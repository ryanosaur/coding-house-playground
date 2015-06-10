$(document).ready(function(){
  var localTodos = JSON.parse(localStorage.getItem('todos'));
  var todos = localTodos instanceof Array ? localTodos : [];

  // localStorage.clear();
  
  console.log(todos);
  
  if(todos.length > 0){
    todos.forEach(function(todo){
      var newTodoLi = $(".todo-item:last").clone(true).show();
      newTodoLi.find(".todo-text").text(todo.text);
      if(todo.done){
        newTodoLi.addClass('done'); 
        newTodoLi.find('.checkbox').attr('checked', 'checked');
      }
      $("#todo-items").prepend(newTodoLi);
    });
  }
  
  $("form#add-todo").submit(function(event) {
    event.preventDefault();
    var newTodo = $(this).find("textarea");
    
    // 1. Clone the template element
    var newTodoLi = $(".todo-item:last").clone(true).show();
    
    // 2. Change the template content
    newTodoLi.find(".todo-text").text(newTodo.val());
    console.log(newTodoLi);
    
    // 3. Write to the DOM
    $("#todo-items").prepend(newTodoLi);
    
    // 4. Push li to Array and localstorage
    todos.push({text:newTodo.val(), done:newTodo.hasClass('done')});
    localStorage['todos'] = JSON.stringify(todos);
    
    newTodo.val('');
     
  });
  
  $(':checkbox').click(function(){
    $(this).parent('li').addClass('done');
    var scope = this;
    todos.forEach(function(todo){
      if(todo.text === $(scope).parent('li').find(".todo-text").text()){
        todo.done = true;
      }
    });
    localStorage['todos'] = JSON.stringify(todos);
  });
  
  $('#clear').on('click', function(){
    var scope = this;
    todos.forEach(function(todo, index){
      if(todo.done === true){
        todos.splice(index, 1);
        console.log('ran '+ index + ' ' + todo);
      }
    });
    localStorage['todos'] = JSON.stringify(todos);
    $('.done').remove();
  });
});

// http://plnkr.co/edit/eYbXR6aMDz07gOnbymla?p=preview

// reading : $("div");
// creating: $("<div>");
// wrapping: $(element)
// document.ready: $(function() {});