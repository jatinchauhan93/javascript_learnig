
const taskForm = document.querySelector(".todo-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector(".task-list");
const taskCount = document.querySelector(".todo-footer p");
const clearBtn = document.querySelector(".clear-btn");

// Load previously saved tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Track which task is being edited
let editingId = null;

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Display all tasks on the page
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

        // Mark task as completed
        checkbox.addEventListener("change", () => {
            task.completed = checkbox.checked;
            saveTasks();
            renderTasks();
        });

        // Edit task
        editBtn.addEventListener("click", () => {
            taskInput.value = task.text;
            editingId = task.id;
            taskInput.focus();

            document.querySelector(".add-btn").textContent = "Update";
        });

        // Delete task
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

    // Update remaining task count
    const remaining = tasks.filter((task) => !task.completed).length;

    taskCount.textContent =
        `${remaining} task${remaining === 1 ? "" : "s"} remaining`;
}

// Reset the input after adding or editing
function resetForm() {
    taskInput.value = "";
    editingId = null;
    document.querySelector(".add-btn").textContent = "+ Add";
}

// Add or update task
taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    if (editingId !== null) {
        // Update existing task
        const task = tasks.find((item) => item.id === editingId);

        if (task) {
            task.text = taskText;
        }
    } else {
        // Add new task
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

// Remove all completed tasks
clearBtn.addEventListener("click", () => {
    tasks = tasks.filter((task) => !task.completed);

    if (editingId !== null &&
        !tasks.some((task) => task.id === editingId)) {
        resetForm();
    }

    saveTasks();
    renderTasks();
});

// Display saved tasks when page loads
renderTasks();
