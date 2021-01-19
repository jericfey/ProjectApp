// Grab all the tasks
const getTasks = () => {
  console.log("Get tasks is getting called");
  fetch("/api/tasks", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log("Success in getting tasks:", data);
      //   const rowsToAdd = [];
      //   for (let i = 0; i < data.length; i++) {
      //     rowsToAdd.push(createTaskRow(data[i]));
      //   }
      //   renderTaskList(rowsToAdd);
      //   nameInput.value = "";
    })
    .catch((error) => console.error("Error:", error));
};

// Get the list of tasks
getTasks();
