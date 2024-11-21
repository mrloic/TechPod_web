const mainAddBtn = document.getElementById('mainAddBtn');
const taskModal = document.getElementById('taskModal');
const closeModal = document.getElementById('closeModal');
const taskForm = document.getElementById('taskForm');
const backlog = document.getElementById('backlog');
const fileInput = document.getElementById('fileInput');
const preview = document.getElementById('preview');
const profile = document.getElementById('profile-icon');
const profileModal = document.getElementById('profile-modal');
const profileClose = document.getElementById('close-modal-btn');

// Открытие модального окна
mainAddBtn.addEventListener('click', () => {
  taskModal.style.display = 'flex';
});


// Закрытие модального окна
closeModal.addEventListener('click', () => {
  taskModal.style.display = 'none';
});

// Предпросмотр изображения
fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      preview.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Добавление задачи
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const task = document.createElement('div');
  task.classList.add('task');
  task.classList.add('task-card');
  task.textContent = taskForm.title.value;
  
  backlog.appendChild(task);
  taskModal.style.display = 'none';
  taskForm.reset();
  preview.src = '';
});

// Изначально скрываем предпросмотр
preview.style.display = 'none';

// Обработчик события изменения инпута (выбор файла)
fileInput.addEventListener('change', function () {
  const file = fileInput.files[0]; // Получаем выбранный файл

  if (file) {
    const reader = new FileReader(); // Создаем объект FileReader

    // Когда файл будет загружен, отобразим его в preview
    reader.onload = function (e) {
      preview.src = e.target.result; // Устанавливаем изображение в src
      preview.style.display = 'block'; // Отображаем preview
    };

    reader.readAsDataURL(file); // Читаем файл как DataURL
  } else {
    // Если файл не выбран, скрываем preview
    preview.style.display = 'none';
    preview.src = ''; // Очищаем src
  }
});