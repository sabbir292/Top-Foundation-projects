const addTaskBtn = document.querySelector('.addTask')
const addProjectBtn = document.querySelector('.add-project')
const overLay = document.querySelector('.overlay')

addTaskBtn.addEventListener('click', addTodo)
addProjectBtn.addEventListener('click', addProject)


let currentProject = {
    currentProjectName: 'home',
}

const Title = (state) => ({
    getTitle: () => state.title
})

const Description = (state) => ({
    getDescription: () => state.description
})

const DueDate = (state) => ({
    getDueDate: () => state.dueDate
})

const Priority = (state) => ({
    getPriority: () => state.priority
})

const Notes = (state) => ({
    getNotes: () => state.notes
})

const taskStatus = (state) => ({
    isTaskComplete: () => state.isTaskComplete
})



// creating the project
const createProject = (id, title) => {
    let state = {
        id,
        title
    }
    return Object.assign(
        {},
        id,
        Title(state)
    )
}


let projectArr = []


function saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('projectArr', JSON.stringify(projectArr));
}


function addProject(e) {
    e.preventDefault();
    const projectVal = document.getElementById('project').value;
    const projectForm = document.querySelector('.project-form');

    // Check if the projectVal already exists in projectArr
    const isProjectExist = projectArr.some((project) => project.pojectTitle === projectVal);

    if (isProjectExist) {
        alert('Kindly choose a different projectName. This project already exists.');
        projectForm.reset()
        return;
    } else {
        const newProject = createProject(projectArr.length + 1, projectVal);
        const title = newProject.getTitle();

        projectArr.push({
            id: projectArr.length + 1,
            pojectTitle: title,
        });

        saveToLocalStorage();
        renderProjects();
        projectForm.reset();
        projectForm.classList.remove('show');
        console.log(projectArr);
    }
}

// localStorage.clear()

function updateActiveTaskCount() {
    const taskCountElements = document.querySelectorAll('.task-count');

    taskCountElements.forEach(countElement => {
        const projectName = countElement.previousElementSibling.textContent.toLowerCase();
        const todoCount = todos.filter(item => item.project.toLowerCase() === projectName);
        const activeTaskCount = todoCount.filter(item => item.isTaskComplete == false);
        console.log({todos, activeTaskCount, todoCount})
        countElement.textContent = activeTaskCount.length;
    });
}



const projectCont = document.querySelector('.projects-cont')

function renderProjects() {

    projectCont.innerHTML = ''

    projectArr.map((item, idx) => {

        const projectCountCont = document.createElement('div')
        projectCountCont.classList.add('project-count-cont')
        const projectName = item.pojectTitle

        const deProjectBtn = document.createElement('div')
        deProjectBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        deProjectBtn.classList.add('deleteProjectBtn')
        projectCountCont.appendChild(deProjectBtn)
        deProjectBtn.addEventListener('click', deleteProject)

        const div = document.createElement('a')
        div.setAttribute('href', `#todo-cont`)
        div.textContent = item.pojectTitle
        projectCountCont.appendChild(div)
        div.addEventListener('click', showProjectDetails)

        const taskCount = document.createElement('p')
        taskCount.classList.add('task-count')

        projectCountCont.appendChild(taskCount)
        projectCont.appendChild(projectCountCont)
        updateActiveTaskCount()
    })
}


function showProjectDetails(e) {
    e.preventDefault()
    currentProject.currentProjectName = this.textContent.toLocaleLowerCase()
    showCurrentProjcet()
    renderTodos()
    closeSideBar()
}

function deleteProject(){
    const parent = this.parentNode
    const title = this.nextSibling.textContent.toLocaleLowerCase()
    
    projectArr.map(item=> {
        if(item.pojectTitle.toLocaleLowerCase() !== title){
            return
        }else{
            projectArr = projectArr.filter(item=> item.pojectTitle.toLocaleLowerCase() !== title )
            projectCont.removeChild(parent)
            saveToLocalStorage()
            renderProjects()
        }
    })
}

// --------------------------------
// creating the todos: --------------


const createTodo = (id, projectName, title, description, dueDate, priority, notes, isTaskComplete) => {
    let state = {
        id,
        projectName,
        title,
        description,
        dueDate,
        priority,
        notes,
        isTaskComplete
    }

    return Object.assign(
        {},
        id,
        Title(state),
        Description(state),
        DueDate(state),
        Priority(state),
        Notes(state),
        taskStatus(state)
    )
}


const form = document.querySelector('.form')

let todos = [
    {
        id: 1,
        project: 'home',
        title: 'Running',
        desc: 'Running from 6AM-7AM',
        dueDate: formatDateToCustomFormat('2023-07-15'),
        priority: 'medium',
        notes: 'Running every day will keep me healthy',
        isTaskComplete: false,
    },
    {
        id: 2,
        project: 'this week',
        title: 'Meeting',
        desc: 'Meeting with clients at 10AM',
        dueDate: formatDateToCustomFormat('2023-08-20'),
        priority: 'high',
        notes: 'Prepare presentation in advance',
        isTaskComplete: true,
    },
    {
        id: 3,
        project: 'home',
        title: 'Cooking',
        desc: 'Cooking dinner at 7PM',
        dueDate: formatDateToCustomFormat('2023-09-25'),
        priority: 'low',
        notes: 'Try out new recipes',
        isTaskComplete: false,
    },
    {
        id: 4,
        project: 'today',
        title: 'Task Management',
        desc: 'Organize tasks and set priorities',
        dueDate: formatDateToCustomFormat('2023-10-05'),
        priority: 'high',
        notes: 'Use task management tool',
        isTaskComplete: true,
    },
    {
        id: 5,
        project: 'home',
        title: 'Gardening',
        desc: 'Water plants and trim bushes',
        dueDate: formatDateToCustomFormat('2023-11-15'),
        priority: 'low',
        notes: 'Buy new plants',
        isTaskComplete: false,
    },
    {
        id: 6,
        project: 'today',
        title: 'Report Preparation',
        desc: 'Compile monthly report',
        dueDate: formatDateToCustomFormat('2023-12-02'),
        priority: 'medium',
        notes: 'Gather data and analyze',
        isTaskComplete: false,
    },
    {
        id: 7,
        project: 'this week',
        title: 'Reading',
        desc: 'Read a new book',
        dueDate: formatDateToCustomFormat('2023-12-20'),
        priority: 'low',
        notes: 'Choose a book from the library',
        isTaskComplete: true,
    },
];


// converting the date formats...
function formatDateToCustomFormat(dateString) {
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const date = new Date(dateString);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    // Function to add the appropriate suffix to the day (e.g., "1st", "2nd", "3rd", "4th", etc.)

    function getDayWithSuffix(day) {
        if (day >= 11 && day <= 13) {
            return day + 'th';
        }
        switch (day % 10) {
            case 1: return day + 'st';
            case 2: return day + 'nd';
            case 3: return day + 'rd';
            default: return day + 'th';
        }
    }

    return `${month} ${getDayWithSuffix(day)}`;
}

function reverseDateFormat(dateString) {
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    // Split the formatted date into month and day parts
    const [month, dayStr] = dateString.split(' ');
    const day = parseInt(dayStr);

    // Find the index of the month in the months array
    const monthIndex = months.findIndex((m) => m === month);

    // Get the current year
    const year = new Date().getFullYear();

    // Function to add leading zero if the number is less than 10
    function addLeadingZero(number) {
        return number < 10 ? '0' + number : number;
    }

    // Construct the formatted date in the format "YYYY-MM-DD"
    return `${year}-${addLeadingZero(monthIndex + 1)}-${addLeadingZero(day)}`;
}

function addTodo(e) {
    e.preventDefault()

    const titleVal = document.getElementById('title').value
    const descriptionVal = document.getElementById('description').value
    const notesVal = document.getElementById('notes').value
    const lowPriority = document.getElementById('low').checked
    const midPriority = document.getElementById('medium').checked
    const highPriority = document.getElementById('high').checked
    const dueDateVal = document.getElementById('dueDate').value

    console.log({ dueDateVal, lowPriority, midPriority, highPriority })

    const getPriorityVal = () => {
        if (lowPriority === true) {
            return 'low'
        } else if (midPriority === true) {
            return 'medium'
        } else if (highPriority === true) {
            return 'high'
        }
    }

    const myTodo = createTodo(
        todos.length + 1,
        currentProject.currentProjectName.toLocaleLowerCase(),
        titleVal,
        descriptionVal,
        formatDateToCustomFormat(dueDateVal),
        getPriorityVal(),
        notesVal,
        false
    )

    const taskObj = {
        id: todos.length + 1,
        project: currentProject.currentProjectName.toLocaleLowerCase(),
        title: myTodo.getTitle(),
        desc: myTodo.getDescription(),
        dueDate: myTodo.getDueDate(),
        priority: myTodo.getPriority(),
        notes: myTodo.getNotes(),
        isTaskComplete: myTodo.isTaskComplete(),
    }

    if(!titleVal || !getPriorityVal() || !dueDateVal){
        alert('Please fill the required Inputs*')
    }else{
        {
            todos.push(taskObj)
            renderProjects()
            saveToLocalStorage()
            createTodoEl(taskObj)
            form.reset()
            closeForm()
        
            updateActiveTaskCount();
            console.log(todos)
        }
    }
}


// show and close form

function showForm() {
    form.classList.add('show')
    overLay.classList.add('show')
}
function closeForm() {
    form.classList.remove('show')
    form.reset()
    overLay.classList.remove('show')
}


// Projcets DOM

const preRenderedProjects = document.querySelectorAll('.preMadeProjects')
const todoCont = document.querySelector('.todo-cont')

preRenderedProjects.forEach(project => {
    project.addEventListener('click', showProjectDetails)
})



const createTodoBtn = document.querySelector('.create-todo-btn')
createTodoBtn.addEventListener('click', showForm)



function renderTodos() {
    const todoCont = document.querySelector('.todo-cont')
    // clearing the page ---
    const allChildEls = todoCont.querySelectorAll('.todo-parent')
    allChildEls.forEach(element => {
        element.remove()
    })
    
    // filtering the with with same project
    const currentProjectTodos = todos.filter(item => {
        return item.project === currentProject.currentProjectName
    })
    
    currentProjectTodos.map((item, idx) => {
        createTodoEl(item)
        console.log({ item, todos })
    })
    updateActiveTaskCount()
}


function toggleTaskCompletion() {

    const taskParent = this.parentNode.parentNode
    const taskId = Number(this.parentNode.parentNode.dataset.id)
    const taskTitle = document.getElementById('title')
    console.log({ taskTitle })

    const filteredTask = todos.filter(item => Number(item.id) === taskId)
    const task = filteredTask[0]
    console.log(task)

    if (this.checked) {
        task.isTaskComplete = true
        taskParent.style.opacity = '.5'

        renderTodos()
        updateActiveTaskCount()
        saveToLocalStorage()
    } else {
        task.isTaskComplete = false
        renderTodos()
        updateActiveTaskCount()
        saveToLocalStorage()

    }
}


// createing TodoEl

function createTodoEl(item) {

    const todoParent = document.createElement('div')
    todoParent.setAttribute('data-id', item.id)
    todoParent.classList.add('todo-parent')

    if (item.priority === 'low') {
        todoParent.style.borderLeft = '4px solid green';
    } else if (item.priority === 'medium') {
        todoParent.style.borderLeft = '4px solid orange';
    } else {
        todoParent.style.borderLeft = '4px solid red';
    }

    todoCont.appendChild(todoParent)

    const taskDiv1 = document.createElement('div')
    taskDiv1.classList.add('task-div-1')
    todoParent.appendChild(taskDiv1)

    const isTaskDone = document.createElement('input')
    isTaskDone.setAttribute('type', 'checkbox');
    isTaskDone.addEventListener('click', toggleTaskCompletion)


    taskDiv1.appendChild(isTaskDone)

    const taskTitle = document.createElement('h3')
    taskTitle.classList.add('task-title')
    taskTitle.textContent = item.title
    taskDiv1.appendChild(taskTitle)


    const taskDiv2 = document.createElement('div')
    taskDiv2.classList.add('task-div-2')
    todoParent.appendChild(taskDiv2)

    const taskDate = document.createElement('p')
    taskDate.classList.add('task-date')
    taskDate.textContent = item.dueDate
    taskDiv2.appendChild(taskDate)

    const taskDetailsBtn = document.createElement('button')
    taskDetailsBtn.classList.add('task-details-btn')
    taskDetailsBtn.textContent = 'Details'
    taskDiv2.appendChild(taskDetailsBtn)

    const editTaskBtn = document.createElement('button')
    editTaskBtn.classList.add(`edit-task-btn`);
    editTaskBtn.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>'
    taskDiv2.appendChild(editTaskBtn)

    const deletetaskBtn = document.createElement('div')
    deletetaskBtn.classList.add('delete-task-btn')
    deletetaskBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
    taskDiv2.appendChild(deletetaskBtn)

    if (item.isTaskComplete === true) {
        isTaskDone.checked = true
        todoParent.classList.add('taskComplete')
        taskTitle.style.textDecoration = 'line-through';
        editTaskBtn.disabled = true;

    } else {
        isTaskDone.checked = false
        todoParent.classList.remove('taskComplete')
    }

    taskDetailsBtn.addEventListener('click', showTaskDetails)
    editTaskBtn.addEventListener('click', editTaskDetails)
    deletetaskBtn.addEventListener('click', deleteTask)
}

function createTaskModal(task) {
    console.log('creating task modal');

    const taskDetailModal = document.createElement('div');
    taskDetailModal.classList.add('detail-modal');

    const closeDetail = document.createElement('div');
    closeDetail.classList.add('close-task-details');
    closeDetail.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    taskDetailModal.appendChild(closeDetail);

    closeDetail.addEventListener('click', () => {
        todoCont.removeChild(taskDetailModal);
        overLay.classList.remove('show');
    });

    const title = document.createElement('h3');
    title.classList.add('detail-title');
    title.textContent = `Title: ${task.title}`;
    taskDetailModal.appendChild(title);

    const desc = document.createElement('p');
    desc.classList.add('detail-desc');
    desc.textContent = `Description: ${task.desc}`; // <-- Modified "Descripion" to "Description"
    taskDetailModal.appendChild(desc);


    const notes = document.createElement('p');
    notes.classList.add('detail-notes');
    notes.textContent = `Notes: ${task.notes}`;
    taskDetailModal.appendChild(notes);

    const dueDate = document.createElement('p');
    dueDate.classList.add('detail-due-date');
    dueDate.textContent = `Due-date: ${task.dueDate}`;
    taskDetailModal.appendChild(dueDate);

    const priority = document.createElement('p');
    priority.classList.add('detail-priority');
    priority.textContent = `Priority: ${task.priority}`;
    taskDetailModal.appendChild(priority);

    const taskStatus = document.createElement('p');
    taskStatus.classList.add('task-status');
    taskStatus.textContent = `Task Status: ${task.isTaskComplete ? 'Task Complete' : 'Task Pending'}`;
    taskDetailModal.appendChild(taskStatus);


    todoCont.appendChild(taskDetailModal);

    console.log(task);
}


function showTaskDetails() {
    console.log('showTaskDetail')
    const taskDetailsModal = document.querySelector('.detail-modal')
    const taskId = Number(this.parentNode.parentNode.dataset.id)
    overLay.classList.add('show')

    todos.map(item => {

        if (Number(item.id) === taskId && taskDetailsModal) {
            todoCont.removeChild(taskDetailsModal)
            createTaskModal(item)
        } else if (Number(item.id === taskId)) {
            createTaskModal(item)
        }
        return
    })
}

// edit task ----
function editTaskDetails(e) {

    const taskId = Number(this.parentNode.parentNode.dataset.id)

    const confirmBtn = form.querySelector('.editTask')
    const addTaskBtn = form.querySelector('.addTask')
    const priorityConfirmBtnParent = form.querySelector('.priority-confirm')

    const filteredTask = todos.filter(item => Number(item.id) === taskId)
    const editableTask = filteredTask[0]

    document.getElementById('title').value = editableTask.title
    document.getElementById('description').value = editableTask.desc
    document.getElementById('notes').value = editableTask.notes
    document.getElementById('dueDate').value = reverseDateFormat(editableTask.dueDate)

    console.log(editableTask.priority)

    if (editableTask.priority === 'low') {
        document.getElementById('low').checked = true
    } else if (editableTask.priority === 'medium') {
        document.getElementById('medium').checked = true
    } else {
        document.getElementById('high').checked = true
    }

    showForm()
    if (confirmBtn) {
        priorityConfirmBtnParent.removeChild(confirmBtn)
    }
    const confirmEditBtn = createConfirmEditBtn(editableTask, taskId)
    console.log(confirmEditBtn)
    // const confirmEditBtn = document.querySelector(`.editTask`);


    addTaskBtn.classList.add('hide')
    confirmEditBtn.classList.add('show')
    confirmEditBtn.addEventListener('click', () => editTask(e, editableTask, confirmEditBtn, addTaskBtn))

}

function createConfirmEditBtn(item, taskid) {
    const priorityConfirm = document.querySelector('.priority-confirm')
    const confirmBtn = document.createElement('button')
    confirmBtn.classList.add('editTask', 'form-btn')
    confirmBtn.setAttribute('type', 'button')
    confirmBtn.textContent = 'Confirm Edit'
    priorityConfirm.appendChild(confirmBtn)

    return confirmBtn
}


function editTask(e, item, editTaskBtn, addTaskBtn) {
    e.preventDefault()

    // getting the edited value from the from ...

    const titleVal = document.getElementById('title').value
    const descVal = document.getElementById('description').value
    const notesVal = document.getElementById('notes').value
    const lowPrioriyVal = document.getElementById('low').checked
    const midPriorityVal = document.getElementById('medium').checked
    const highPriorityVal = document.getElementById('high').checked
    const dueDateVal = document.getElementById('dueDate').value


    const getPriorityVal = () => {
        if (lowPrioriyVal) {
            return 'low';
        } else if (midPriorityVal) {
            return 'medium';
        } else if (highPriorityVal) {
            return 'high';
        } else {
            return
        }
    }

    console.log(getPriorityVal(), todos)


    item.title = titleVal
    item.desc = descVal
    item.notes = notesVal
    item.dueDate = formatDateToCustomFormat(dueDateVal)
    item.priority = getPriorityVal()

    renderTodos()
    addTaskBtn.classList.remove('hide')
    editTaskBtn.classList.remove('show')
    form.reset()
    closeForm()
    updateActiveTaskCount()
    saveToLocalStorage()
}

function deleteTask() {
    const taskId = Number(this.parentNode.parentNode.dataset.id)
    todoCont.removeChild(this.parentNode.parentNode)
    todos = todos.filter((item) => Number(item.id) !== taskId);
    console.log(todos)
    updateActiveTaskCount()
    saveToLocalStorage()
}


// loads the homepage whenever screen

window.addEventListener('load', () => {
    // Load todos from local storage, or initialize with default value
    todos = JSON.parse(localStorage.getItem('todos')) || todos;
    // Load projects from local storage, or initialize with default value
    projectArr = JSON.parse(localStorage.getItem('projectArr')) || [];

    currentProject.currentProjectName = 'home';
    updateActiveTaskCount()
    showCurrentProjcet();
    renderTodos();
    renderProjects()
});


// window.addEventListener('load', () => {
//     currentProject.currentProjectName = 'home';
//     showCurrentProjcet()
//     updateActiveTaskCount()
//     renderProjects()
//     renderTodos();
// });



// show current project 

function showCurrentProjcet() {
    const currProjectCont = document.querySelector('.currentProject')
    currProjectCont.textContent = currentProject.currentProjectName
}


//   ui-ux interactivity ---
const sidebar = document.querySelector('.sidebar')
const menuBtn = document.querySelector('.menuBtn')
const closeMenuBtn = document.querySelector('.closeBtn')
const closeFormBtn = document.querySelector('.close-form-btn')

menuBtn.addEventListener('click', showSideBar)
closeMenuBtn.addEventListener('click', closeSideBar)
closeFormBtn.addEventListener('click', () => {
    const addTaskBtn = form.querySelector('.addTask')
    const editTaskBtn = form.querySelector('.editTask')

    if (editTaskBtn) {
        addTaskBtn.classList.remove('hide')
        editTaskBtn.classList.remove('show')
        closeForm()
    } else {
        closeForm()
    }

})

function showSideBar() {
    sidebar.classList.add('show')
    menuBtn.classList.add('hide')
    closeMenuBtn.classList.add('show')
}
function closeSideBar() {
    sidebar.classList.remove('show')
    menuBtn.classList.remove('hide')
    closeMenuBtn.classList.remove('show')
}

// todo count


// show project form
const addProjectButton = document.querySelector('.addProject')
const projectForm = document.querySelector('.project-form')
const closeProjectFormBtn = document.querySelector('.cancel-project')

closeProjectFormBtn.addEventListener('click', closeProjectForm)
addProjectButton.addEventListener('click', showProjectForm)

function showProjectForm() {
    projectForm.classList.add('show')
}

function closeProjectForm(e) {
    e.preventDefault()
    projectForm.classList.remove('show')
}

// form validation ----

