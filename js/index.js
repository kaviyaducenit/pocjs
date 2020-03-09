let arr=[];
let i=0;
let fname=document.getElementById('name');
let mail=document.getElementById('email');
document.getElementById('cu-action').addEventListener('click',display);
let cr=null;
function display()
{
    if(cr)
    {
        arr=arr.map(index=>{
            if(index.i===cr)
            {
                index.fname=fname.value;
                index.mail=mail.value;
            }
            return index;
        });
        updatefn(null,'add');
    }
    else{
   arr.push({
    i:++i,
   fname:fname.value,
   mail:mail.value
  
    });
}
com();
}

function delete_row(i)
{
arr=arr.filter(num=>num.i!==i);
com();
}
function updatefn(i,text)
{
cr=i;
document.getElementById('cu-action').innerHTML=text;
}
function edit(i)
{
const num=arr.find(index=>index.i==i);
if(num)
{
fname.value=num.fname;
mail.value=num.mail;
updatefn(i,'update')
}
}

function com()
{
    rows="";
    arr.forEach(obj=>
    {
        const tr=`<tr>
    
            <td>${obj.i}</td>
            <td>${obj.fname}</td>
            <td>${obj.mail}</td>
            <td><button onclick="edit(${obj.i})">edit</button>
            <button onclick="delete_row(${obj.i})">delete</button></td>
            </tr>`;
            rows+=tr;    
    
    });
    
    document.getElementById("todo-body").innerHTML=rows;
  reset();
}
function reset()
{
fname.value='';
mail.value='';
}



