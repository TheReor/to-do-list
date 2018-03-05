var ToDoList = [];
var form = document.getElementById('to-do-list-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // alert('hej!');
    var input = document.getElementById('input-form').value;
    console.log(input);
    ToDoList.push(input);
    console.log('ToDoList');
    var ul = document.getElementById('list');
    var li = document.createElement('li');
    li.innerHTML = input;
    ul.appendChild(li);
   
    
});