let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    const activeList = document.getElementById("taskList");
    const checkedList = document.getElementById("checkedList");
    const checkedTitle = document.getElementById("checkedTitle");

    activeList.innerHTML = "";
    checkedList.innerHTML = "";

    let checkedCount = 0;

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        const taskDiv = document.createElement("div");
        taskDiv.className = "task";

        if (task.done) {
            taskDiv.classList.add("completed");
            checkedCount++;
        }

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.done;
        checkbox.onclick = () => toggleTask(index);

        const span = document.createElement("span");
        span.innerText = task.text;

        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(span);

        const del = document.createElement("span");
        del.innerText = "➖";
        del.className = "delete";
        del.onclick = () => deleteTask(index);

        li.appendChild(taskDiv);
        li.appendChild(del);

        if (task.done) {
            checkedList.appendChild(li);
        } else {
            activeList.appendChild(li);
        }
    });

    checkedTitle.innerText =
        checkedCount > 0 ? `${checkedCount} Checked items` : "";
}

function addTask() {
    const input = document.getElementById("taskInput");
    if (input.value.trim() === "") return;

    tasks.push({ text: input.value, done: false });
    input.value = "";
    saveTasks();
    renderTasks();
}

function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
    saveTasks();
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

renderTasks();
