let button=document.getElementById('add-btn');
let input=document.getElementById('add-search');
let list=document.getElementById('list');
function addTOdo(){
    if(input.value===''){
        alert('enter list items');
    }else{
    let checkbox=document.createElement('INPUT');
    checkbox.setAttribute("type", "radio");
    let todo=document.createElement('div');
    todo.style.width='100%';
    const removebtn=document.createElement('button');
    let li=document.createElement('li');
    li.style.listStyleType='none';
    li.style.fontSize='20px';
    li.style.fontFamily="'Poppins', sans-serif";
    todo.appendChild(checkbox);
    todo.appendChild(li);
    todo.style.display = 'flex'; // make the todo div a flex container
    todo.style.alignItems = 'center'; 
    todo.appendChild(removebtn);

    list.appendChild(todo);
    li.innerText=input.value;
    input.value=' ';
   
    removebtn.innerText = '\u00d7'; 
    removebtn.style="border:none";
    removebtn.style="border:none; margin-left:50px;";
    removebtn.addEventListener('click', function() { // add event listener to delete button
        todo.remove();
    });
    checkbox.addEventListener('change', function() { // add event listener to checkbox
        if (this.checked) {
            li.style.textDecoration = 'line-through'; // add strike-through to completed tasks
        } else {
            li.style.textDecoration = 'none'; // remove strike-through from incomplete tasks
        }
    });}
}