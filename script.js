 const todoForm = document.getElementById('todoForm');
    const taskInput = document.getElementById('task');
    const taskError = document.getElementById('taskError');
    const taskList = document.getElementById('taskList');
    const submitBtn = document.getElementById('submitBtn');
    let slide = document.getElementById('slide');

    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
      });
    });

    function validateTask(task) {
      taskError.textContent = '';
      if (task.trim() === '') {
        taskError.textContent = 'Task cannot be empty.';
        return false;
      }
      return true;
    }

    function addTaskToDOM(taskText) {
      const li = document.createElement('li');
      li.classList.add('hover-effect');
      const span = document.createElement('span');
      span.textContent = taskText;

      span.addEventListener('click', () => {
        span.classList.toggle('completed');
      });

      span.addEventListener('dblclick', () => {
        alert('Double-click magic! ✨');
      });

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', () => {
        li.remove();
      });

      li.appendChild(span);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    }

    todoForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const taskText = taskInput.value;
      if (validateTask(taskText)) {
        addTaskToDOM(taskText);
        todoForm.reset();
      }
    });

    taskInput.addEventListener('input', () => {
      taskError.textContent = '';
    });

    // Change color on button click
    submitBtn.addEventListener('click', () => {
      submitBtn.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    });

    // Keypress detection
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && document.activeElement === taskInput) {
        console.log('Enter key pressed in task input');
      }
    });

    // Simple image slideshow logic
    const images = [
      'https://placekitten.com/400/200',
      'https://placekitten.com/401/200',
      'https://placekitten.com/402/200'
    ];
    let index = 0;
    setInterval(() => {
      index = (index + 1) % images.length;
      slide.src = images[index];
    }, 3000);