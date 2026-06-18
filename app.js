const inputTask = document.getElementById('input-task')
const btnAdd = document.getElementById('btn-add')
const listTask = document.getElementById('list-task')

btnAdd.addEventListener('click', function() {
    const noiDung = inputTask.value

    if (noiDung === '') return

    const li = document.createElement('li')
    li.textContent = noiDung

    const btnXoa = document.createElement('button')
    btnXoa.textContent = 'Xóa'

    btnXoa.addEventListener('click', function() {
    listTask.removeChild(li)
    })
    li.appendChild(btnXoa)
    
    listTask.appendChild(li)

    inputTask.value = ''
})