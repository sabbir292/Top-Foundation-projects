
// Project Library----------------

const library = [
    {
        id: 1,
        title: 'Mahabharata',
        author: 'Bedbyas',
        pages: '1000',
        isRead: true,
    },
    {
        id: 2,
        title: 'The Hobbit',
        author: 'JRR',
        pages: '999',
        isRead: true,
    },
]

// constructor

function Book(id, title, author, pages, isRead) {
    this.id = id
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

// Book.prototype.toggleReadStatus = function(){
//     this.isRead = !this.isRead
// }
// global ui
const libraryArea = document.querySelector('.library-area')
const addBookBtn = document.querySelector('.add')


function createBookEl(book){
    const id = library.length
    let{title,author,pages,isRead} = book

        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('id',id)
      
        const deleteBtn = document.createElement('div');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        card.appendChild(deleteBtn);
      
        const titleElement = document.createElement('h3');
        titleElement.classList.add('card-title');
        titleElement.innerHTML = `<span>Title: </span>${title}`;
        card.appendChild(titleElement);
      
        const authorElement = document.createElement('h3');
        authorElement.classList.add('card-author');
        authorElement.innerHTML = `<span>Author: </span>${author}`;
        card.appendChild(authorElement);
      
        const pagesElement = document.createElement('h3');
        pagesElement.classList.add('card-pages');
        pagesElement.innerHTML = `<span>Pages: </span>${pages}`;
        card.appendChild(pagesElement);
      
        const buttonElement = document.createElement('button');
        buttonElement.classList.add('card-btn');
        buttonElement.textContent = isRead ? 'Read' : 'Not Read Yet';
        card.appendChild(buttonElement);
      
        libraryArea.appendChild(card);  


        const deleteButtons = document.querySelectorAll('.delete-btn')
        const readBtn = document.querySelectorAll('.card-btn')
        
        readBtn.forEach(btn=>{
         btn.addEventListener('click', toggleReadStatus)
        })
     
        deleteButtons.forEach(btn=>{
         btn.addEventListener('click', deleteBook)
        })

        if(isRead){
            card.style.backgroundColor = '#228B22'
        }else{
            card.style.backgroundColor = '#9e1b32'
        }
}


// pre render the books libraray already have
library.map(item=>{
    createBookEl(item)
})


addBookBtn.addEventListener('click', showForm)

function showForm(){
    const formArea = document.querySelector('.form-area')
    const sumbitBtn = document.getElementById('submit-btn')

    formArea.classList.toggle('show-form')
    addBookBtn.classList.toggle('rotate')


    sumbitBtn.addEventListener('click', handleFormSubmit)
}



function handleFormSubmit(e){
    e.preventDefault()
    console.log('submited')

    const id = library.length + 1
    const titleVal = document.getElementById('title').value
    const authorVal = document.getElementById('author').value
    const pagesVal = document.getElementById('pages').value
    const readVal = document.getElementById('isRead').checked
    const form = document.querySelector('.form')
    let isDuplicate = false

    if(!titleVal || !authorVal || !pagesVal){
        alert('Please fillup the form with proper value')
        return
    }

    for(const book of library){
        if(book.title === titleVal && book.author === authorVal){
            isDuplicate = true
        }
    }


   if(isDuplicate){
    alert('This book already exist in the library')
    form.reset()
    return
   }
   else{
    const newBook = new Book(id,titleVal,authorVal,pagesVal,readVal)
    library.push(newBook)
    console.log(library)
    createBookEl(newBook)
    form.reset()
    console.log(newBook.isRead)
   }
}


function toggleReadStatus(){
    const parent = this.offsetParent
    const parentId = Number(parent.id)
    library.map((item,index)=>{
        console.log(item.id, parentId)
        if(item.id === parentId){
            item.isRead = !item.isRead
        }else{
            return
        }

        if(item.isRead){
            parent.style.backgroundColor = '#228B22'
            this.textContent = 'Read'
        }else{
            parent.style.backgroundColor = '#9e1b32'
            this.textContent = 'Not Read Yet'
        }
    })

}

function deleteBook(){
    const parent = this.offsetParent
    const parentId = Number(parent.id)
    library.map((item,index)=>{
        console.log(item.id, parentId)
        if(item.id === parentId){
            library.splice(index ,1)
        }
    })
    parent.remove()
}
