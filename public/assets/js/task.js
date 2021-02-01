// window.addEventListener("DOMContenLoaded", (e) => {
console.log(" loaded!");
let billable = true;
const taskForm = document.getElementById("taskForm");
const checkBox = document.getElementById("billable");
checkBox.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    billable = true;
  } else {
    billable = false;
  }
});
const createTask = (e) => {
  e.preventDefault();
  const task = {
    name: document.getElementById("taskName").value,
    person: document.getElementById("person").value,
    state: document.getElementById("state").value,
    hours: document.getElementById("hours").value,
    project: document.getElementById("project").value,
    billable: billable,
  };
  if (task) {
    fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    }).then((response) => response.json());
  }
  this.window.location.reload();
  // console.log(task);
};
taskForm.addEventListener("submit", createTask);
// });
