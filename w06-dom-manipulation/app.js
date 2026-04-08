const toDoList = document.getElementById('toDoList');
const toDoInput = document.getElementById('toDoInput');

function addToDo() {
  const text = toDoInput.value.trim();

  if (text === '') {
    alert('Please actually type something...');
    return;
  }

  const li = document.createElement('li');
  li.textContent = text;

  // Cross Out on Click
  li.addEventListener('click', function () {
    this.classList.toggle('completed');
  });

  // Delete Btn
  const deleteBtn = document.createElement('span');
  deleteBtn.textContent = 'x';
  deleteBtn.className = 'deleteBtn';
  deleteBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(deleteBtn);
  toDoList.appendChild(li);

  // Clear Input Field
  toDoInput.value = '';
}

// Add with Enter Key
toDoInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    addToDo();
  }
});
