const addCardBtn = document.getElementById('addCardBtn');
const taskModal = document.getElementById('taskModal');


addCardBtn.addEventListener('click', () => {
    taskModal.style.display = 'flex';
});