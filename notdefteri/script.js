let notes = [];

function addNote() {
    const titleInput = document.getElementById('noteTitle');
    const contentInput = document.getElementById('noteContent');

    const title = titleInput.value;
    const content = contentInput.value;

    if (title && content) {
        const note = { title, content };
        notes.push(note);
        displayNotes();
        titleInput.value = '';
        contentInput.value = '';
    } else {
        alert('Lütfen not başlığı ve içeriği giriniz.');
    }
}

function displayNotes() {
    const noteList = document.getElementById('noteList');
    noteList.innerHTML = '';

    notes.forEach((note, index) => {
        const noteElement = document.createElement('div');
        noteElement.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.content}</p>
            <button onclick="deleteNote(${index})">Notu Sil</button>
        `;
        noteList.appendChild(noteElement);
    });
}

function deleteNote(index) {
    notes.splice(index, 1);
    displayNotes();
}