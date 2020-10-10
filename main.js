var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var tasks = JSON.parse(localStorage.getItem('list_tasks')) || [];

function renderTasks() {
    listElement.innerHTML = '';

    for (task of tasks) {
        var taskElement = document.createElement('li');
        var taskText = document.createTextNode(task);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var position = tasks.indexOf(task);
        linkElement.setAttribute('onclick', 'deleteTask('+ position +')');

        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);

        taskElement.appendChild(taskText);
        taskElement.appendChild(linkElement);
        listElement.appendChild(taskElement);
    }
}

renderTasks();

function addTask() {
    var taskText = inputElement.value;

    tasks.push(taskText);
    inputElement.value = '';
    renderTasks();
    saveToStorage();
}

buttonElement.onclick = addTask;

function deleteTask(position) {
    tasks.splice(position, 1);
    renderTasks();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_tasks', JSON.stringify(tasks));
}