const task_list = document.querySelector("#task-list");

task_list.addEventListener("click", () => {
    if(event.target.tagName === "IMG") {
        event.target.parentNode.remove();
    }
});

function AddTask() {
    let task = document.createElement("li");
    task.className = "task";

    let nbsp = document.createTextNode("\u00A0");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let p = document.createElement("p");
    p.innerText = document.getElementById("input").value;

    let img = document.createElement("img");
    img.src = "./assets/trash.png"

    task.appendChild(checkbox);
    task.appendChild(nbsp);
    task.appendChild(p);
    task.appendChild(nbsp.cloneNode(true));
    task.appendChild(img);

    task_list.appendChild(task);
}