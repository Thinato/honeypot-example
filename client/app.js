document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    // Function to fetch tasks from the server (GET request)
    async function fetchPersonRelations(document) {
      try {
        const response = await fetch(`http://localhost:3000/${document}`); 
        const tasks = await response.json();
        taskList.innerHTML = ''; // Clear previous tasks
        console.log(tasks)
  
        tasks.forEach(task => {
          const li = document.createElement('li');
          li.textContent = task.name;
          taskList.appendChild(li);
        });
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    }
  
    // Function to add a new task (POST request)
    async function addTask(task) {
      try {
        const response = await fetch('http://localhost:3000/tasks', { // Replace with your server URL
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name: task })
        });
  
        if (response.ok) {
          fetchTasks(); // Refresh the task list
        }
      } catch (error) {
        console.error('Error adding task:', error);
      }
    }
  
    // Event listener for form submission
    taskForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const task = taskInput.value;
      addTask(task); // Add new task
      taskInput.value = ''; // Clear input field
    });
  
    // Fetch tasks when the page loads
    fetchTasks();
  });
  