const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", addTask);

function addTask() {
    if (taskInput.value.trim() === "") return;

    const li = document.createElement("li");

    li.innerHTML = `
        <div class="task">
            <input type="checkbox">
            <span>${taskInput.value}</span>
        </div>
        <span class="delete">×</span>
    `;

    taskList.appendChild(li);
    taskInput.value = "";

    const checkbox = li.querySelector("input");
    const deleteBtn = li.querySelector(".delete");

    checkbox.addEventListener("change", () => {
        li.classList.toggle("completed");
    });

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });
}
