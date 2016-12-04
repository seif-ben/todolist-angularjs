angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [
      {text:'learn angular', done:true},
      {text:'build an angular app', done:false}];

  })
  .value('SERVICE_URL', 'http://localhost:8080/test-services/')
  .service('TodoListService', function(SERVICE_URL, $http) {
    var findAll = function() {
      return $http.get(SERVICE_URL + 'test-services/todolist');
    };

    return {
      findAll: findAll
    };
  });
