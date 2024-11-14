todoList = [{
  name:'Make diner',
  dueDate: '2024-10-15',
  dueTime: '11:40'
},{
  name:'wash dishes',
  dueDate: '2024-10-15',
  dueTime: '11:40'
   }];

renderTodo()
function renderTodo(){

  let todoListHTML = '';

  for(let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const dueTime = todoObject.dueTime;
   
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <div>${dueTime}</div>
    <button onclick = "
        todoList.splice(${i}, 1);
        renderTodo();
    " class="supprimer">Delete</button>
    `;
    todoListHTML += html;
  }
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

    console.log(todoListHTML);
}



    function addTodo(){
      const inputElement = document.querySelector(".js-name-input");
      const name = inputElement.value;

      const dateInputElement = document.querySelector('.la-date');
      const dueDate = dateInputElement.value;

      const timeInputElement = document.querySelector('.lheure');
      const dueTime =timeInputElement.value;

      console.log(name);
      todoList.push(
        {name: name,
        dueDate: dueDate,
        dueTime: dueTime
      });
      console.log(todoList);
      inputElement.value = '';

      renderTodo()
    }