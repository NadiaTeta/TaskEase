function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    var li = document.createElement("li");
    li.textContent = taskInput.value;
    var deleteBtn = document.createElement("button")
    deleteBtn.textContent = "*";
    deleteBtn.onclick = function() {
        li.remove();
    };
    li.appendChild(deleteBtn);
    li.onclick = function() {
        li.classList.toggle("completed");
    };

    taskList.appendChild(li);
    taskInput.value = "";
}

