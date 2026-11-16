
document.getElementById("customize-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let message = document.getElementById("new-message").value;
    let color = document.getElementById("color").value;

    if (name.trim() !== "") {
        document.getElementById("greeting").textContent = "Hello " + name + "!";
    } else {
        document.getElementById("greeting").textContent = "Hello User!";
    }

    if (message.trim() !== "") {
        document.getElementById("message").textContent = message;
    }

    document.body.style.backgroundColor = color;
});

document.getElementById("todo-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let task = document.getElementById("task").value.trim();

    if (task !== "") {
        let item = document.createElement("li");
        item.textContent = task;

        document.getElementById("todo-list").appendChild(item);
        document.getElementById("task").value = "";
    }
});
