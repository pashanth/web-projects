const myform=document.querySelector('#my-form');
const nameinput=document.querySelector('#name');
const emailinput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userlist=document.querySelector('#users');


myform.addEventListener('submit',onsubmit);

function onsubmit(e){
    e.preventDefault();

    if(nameinput.value==='' ||emailinput.value==='')
    {
        msg.classList.add('error');
        msg.innerHTML='Please enter all fields';

        setTimeout(()=>msg.remove(),3000);

    }
    else{

        const li=document.createElement('li');
        li.appendChild(document.createTextNode(nameinput.value+':'+emailinput.value));

        userlist.appendChild(li);

        nameinput.value='';
        emailinput.value='';
    }
}