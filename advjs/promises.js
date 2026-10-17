
// Promise One
const firstTask = new Promise(function (resolve, reject) {

    // Simulating an asynchronous task
    setTimeout(function () {
        console.log("First task finished");
        resolve();
    }, 1000);

});

firstTask.then(function () {
    console.log("First promise completed");
});


// Promise Two
new Promise(function (resolve, reject) {

    setTimeout(function () {
        console.log("Second task finished");
        resolve();
    }, 1000);

}).then(function () {
    console.log("Second promise completed");
});



const userTask = new Promise(function (resolve, reject) {

    setTimeout(function () {
        resolve({
            username: "Rahul",
            email: "rahul@example.com"
        });
    }, 1000);

});

userTask.then(function (userData) {
    console.log(userData);
});


// Promise Four: Handling Errors
const loginTask = new Promise(function (resolve, reject) {

    setTimeout(function () {

        let hasError = true;

        if (!hasError) {
            resolve({
                username: "developer123",
                password: "abc123"
            });
        } else {
            reject("ERROR: Login failed");
        }

    }, 1000);

});

loginTask
    .then((userData) => {
        console.log(userData);
        return userData.username;
    })
    .then((userName) => {
        console.log(userName);
    })
    .catch(function (errorMessage) {
        console.log(errorMessage);
    })
    .finally(() => {
        console.log("Operation completed");
    });


// Promise Five: Using Async/Await
const dataTask = new Promise(function (resolve, reject) {

    setTimeout(function () {

        let hasError = true;

        if (!hasError) {
            resolve({
                username: "webDeveloper",
                password: "xyz789"
            });
        } else {
            reject("ERROR: Unable to load data");
        }

    }, 1000);

});

async function handleDataTask() {

    try {
        const result = await dataTask;
        console.log(result);
    } catch (errorMessage) {
        console.log(errorMessage);
    }

}

handleDataTask();


// Fetching Users from an API
async function fetchUsers() {

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const users = await response.json();

        console.log(users);

    } catch (errorMessage) {
        console.log("Error:", errorMessage);
    }

}

// Uncomment to execute
// fetchUsers();


// Fetching a GitHub User using Fetch and Then
fetch("https://api.github.com/users/octocat")
    .then((response) => {
        return response.json();
    })
    .then((userInfo) => {
        console.log(userInfo);
    })
    .catch((errorMessage) => {
        console.log(errorMessage);
    });


// Promise.all Example
const taskOne = Promise.resolve("Task A completed");
const taskTwo = Promise.resolve("Task B completed");
const taskThree = Promise.resolve("Task C completed");

Promise.all([taskOne, taskTwo, taskThree])
    .then((results) => {
        console.log(results);
    })
    .catch((errorMessage) => {
        console.log("One of the tasks failed:", errorMessage);
    });
