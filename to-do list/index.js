
const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector('ul');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const text = input.value;
   if(text !== "") {
    input.value = "";

    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);
   }
   
});

// function to add a delete btn

function addDeleteBtn() {
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = "x";
    deleteBtn.className = "delete";

    // add an eventlistener to target the parentelement and remove the children of ul

    deleteBtn.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);  
    });
    return deleteBtn;
}
