const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('newBtn');

window.onload = function() {
    const cookies = document.cookie.split('; ');
    const todoCookie = cookies.find(row => row.startsWith('todos='));
    if (todoCookie) {
        const todos = JSON.parse(decodeURIComponent(todoCookie.split('=')[1]));
        todos.forEach(todoText => addTodo(todoText, false));
    }
};

newBtn.addEventListener('click', function() {
    const text = prompt('Enter a new TO DO:');
    if (text && text.trim() !== '') {
        addTodo(text.trim(), true);
    }
});

function addTodo(text, isNew) {
    const div = document.createElement('div');
    div.textContent = text;

    div.addEventListener('click', function() {
        if (confirm('Do you want to remove this TO DO?')) {
            div.remove();
            saveTodos();
        }
    });

    if (isNew) {
        ftList.insertBefore(div, ftList.firstChild);
        saveTodos();
    } else {
        ftList.appendChild(div);
    }
}

function saveTodos() {
    const todos = [];
    const items = ftList.querySelectorAll('div');
    items.forEach(item => todos.push(item.textContent));
    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + ";path=/;";
}