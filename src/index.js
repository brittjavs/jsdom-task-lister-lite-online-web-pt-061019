document.addEventListener("DOMContentLoaded", () => {
  const taskList = document.getElementById('tasks')
  const taskForm = document.getElementById('create-task-form')
    taskForm.addEventListener('submit', function(event) {
      event.preventDefault() //stop form from posting
      const userInputField = event.target.querySelector('#new-task-description')
      const userInputString = userInputField.value
      const taskListItem = document.createElement('li')
      taskListItem.textContent = userInputString
      taskList.appendChild(taskListItem)

    });
});
