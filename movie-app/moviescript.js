document.addEventListener('DOMContentLoaded', function(){

    const list = document.querySelector('#movie-list ul');

    const forms = document.forms;

  

    // delete movies

    list.addEventListener('click', (e) => {

      if(e.target.className == 'delete'){

        const li = e.target.parentElement;

        li.parentNode.removeChild(li);

      }

    });

     //add movie

     const addform=forms['add-movie'];
     addform.addEventListener('submit',function(e){

     e.preventDefault();


      //creating elements

      const value = addform.querySelector('input[type="text"]').value;
      const li=document.createElement('li');
      const moviename=document.createElement('span');
      const deletebtn=document.createElement('span');
      
      
      //add text-content
      
      moviename.textContent=value;
      deletebtn.textContent='Delete';


      //add classes

      moviename.classList.add('name');
      deletebtn.classList.add('delete');

     //append to DOM
     li.appendChild(moviename);
     li.appendChild(deletebtn);
     list.appendChild(li);
     


     });



})
