const showPopupBtn = document.querySelector(".add-note");
const popupBox = document.querySelector(".popup-box");
const closePopupBtn = popupBox.querySelector(".upper i");
const popupTitle = popupBox.querySelector(".upper h3");
const popupForm = popupBox.querySelector("form");
const popupButton = popupBox.querySelector("form button");
const titleInput = popupBox.querySelector("#title");
const textArea = popupBox.querySelector("#description");

let notes = JSON.parse(localStorage.getItem("notes")) || [];
let edit_id = null;
const months = [
    "January", "February" , "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

function showNotes() {
    // removing all notes before adding new
    document.querySelectorAll(".note").forEach(n => n.remove());
    // showing notes
    notes.forEach((note , index) => {
        let noteBox = `<li class="note">
                            <div class="content">
                                <div class="heading">${note.title}</div>
                                <div class="des">${note.description}</div>
                            </div>
                            <div class="details">
                                <div class="time">${note.date}</div>
                                <div class="action-btns">
                                    <i onClick="editNote(${index}, '${note.title}', '${note.description}')" class="fa fa-pencil" aria-hidden="true"></i>
                                    <i onClick="deleteNote(${index})" class="fa fa-trash" aria-hidden="true"></i>
                                </div>
                            </div>
                        </li>`;
    
        showPopupBtn.insertAdjacentHTML("afterend", noteBox);
    });
}
showNotes();

// editing
function editNote(noteId, title, description) {
    edit_id = noteId;
    showPopupBtn.click();
    titleInput.value = `${title}`;
    textArea.value = `${description}`;
    popupTitle.textContent = "Update a Note";
    popupButton.textContent = "Update note";
}

// deleting notes and showing notes after deleting also save the action in localstorage
function deleteNote(noteId){
    notes.splice(noteId , 1);
    saveNote(notes);
    showNotes();
}

// adding show class on click of addnote card
showPopupBtn.addEventListener("click", () => {
    popupBox.classList.add("show");
});
// removing show class on click of cross icon in popup
closePopupBtn.addEventListener("click", () => {
    popupBox.classList.remove("show");
    popupTitle.textContent = "Add a note";
    popupButton.textContent = "Add note";
});

// action tobe done on submission of form
popupForm.addEventListener("submit", (e) => {
    // preventing default submitting behaviour of form
    e.preventDefault();
    // getting title and textarea value
    let titleInputValue = titleInput.value.trim();
    let textAreaValue = textArea.value.trim();

    // calculating current date on button click
    let date = new Date();
    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let currentDate = `${month} ${day}, ${year}`;
    // console.log(currentDate);

    // checking if input blank then showing alert else doing further action
    if(!titleInputValue || !textAreaValue) {
        alert("please Enter Title and textArea");
    } else {
        let noteDetails = {
            title: titleInputValue,
            description: textAreaValue,
            date: currentDate,
        };
        if(edit_id !== null) {
            notes.splice(edit_id,1, noteDetails);
            edit_id = null;
        } else {
            notes.push(noteDetails);
        }
        // function for saving notes in localstorage
        saveNote(notes);

        // setting values to emplty after submitting
        titleInput.value = "";
        textArea.value = "";
        // closing popup after submiting
        closePopupBtn.click();

        // showing notes on button click
        showNotes();
    }
})

function saveNote(notes) {
    localStorage.setItem("notes", JSON.stringify(notes));
}