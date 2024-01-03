const createBtn = document.querySelector('.btn');
const notesContainer = document.querySelector('.notes-container');
let notes = document.querySelectorAll('.note');


function showNotes() {
    notesContainer.innerHTML = localStorage.getItem('notes');
}

showNotes();

function updateLocalStorage() {
    localStorage.setItem('notes', notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {

    let note = document.createElement('p');
    let img = document.createElement('img');

    note.className = 'note';
    note.setAttribute("contenteditable", "true");

    img.src = 'img/delete.png';

    notesContainer.appendChild(note).appendChild(img);

});

notesContainer.addEventListener("click", (e) => {
    if (e.target.nodeName === 'IMG') {
        e.target.parentElement.remove();
        updateLocalStorage();
    } else if (e.target.nodeName === 'P') {
        notes = document.querySelectorAll('.note');
        notes.forEach(note => {
            note.onkeyup = function () {
                updateLocalStorage();
            }
        })
    }
});

document.addEventListener("keydown", event =>{
    if(event.key === 'Enter'){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

