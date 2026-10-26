
const taskForm = document.querySelector(".todo-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector(".task-list");
const taskCount = document.querySelector(".todo-footer p");
const clearBtn = document.querySelector(".clear-btn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


let editingId = null;


function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.className = "task-item";

        if (task.completed) {
            li.classList.add("completed");
        }

        const taskContent = document.createElement("div");
        taskContent.className = "task-content";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        const span = document.createElement("span");
        span.textContent = task.text;

        const taskActions = document.createElement("div");
        taskActions.className = "task-actions";

        const editBtn = document.createElement("button");
        editBtn.className = "edit-btn";
        editBtn.textContent = "✎";
        editBtn.setAttribute("aria-label", "Edit task");

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "🗑";
        deleteBtn.setAttribute("aria-label", "Delete task");

        checkbox.addEventListener("change", () => {
            task.completed = checkbox.checked;
            saveTasks();
            renderTasks();
        });

      
        editBtn.addEventListener("click", () => {
            taskInput.value = task.text;
            editingId = task.id;
            taskInput.focus();

            document.querySelector(".add-btn").textContent = "Update";
        });

  
        deleteBtn.addEventListener("click", () => {
            tasks = tasks.filter((item) => item.id !== task.id);

            if (editingId === task.id) {
                resetForm();
            }

            saveTasks();
            renderTasks();
        });

        taskContent.append(checkbox, span);
        taskActions.append(editBtn, deleteBtn);
        li.append(taskContent, taskActions);
        taskList.appendChild(li);
    });

    const remaining = tasks.filter((task) => !task.completed).length;

    taskCount.textContent =
        `${remaining} task${remaining === 1 ? "" : "s"} remaining`;
}

function resetForm() {
    taskInput.value = "";
    editingId = null;
    document.querySelector(".add-btn").textContent = "+ Add";
}

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    if (editingId !== null) {
        const task = tasks.find((item) => item.id === editingId);

        if (task) {
            task.text = taskText;
        }
    } else {
        const newTask = {
            id: crypto.randomUUID(),
            text: taskText,
            completed: false
        };

        tasks.push(newTask);
    }

    saveTasks();
    resetForm();
    renderTasks();
});

clearBtn.addEventListener("click", () => {
    tasks = tasks.filter((task) => !task.completed);

    if (editingId !== null &&
        !tasks.some((task) => task.id === editingId)) {
        resetForm();
    }

    saveTasks();
    renderTasks();
});

renderTasks();
