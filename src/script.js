let addNoteContainer = document.getElementById("addNoteContainer");
addNoteContainer.style.display = "none";


//{READ}
function showAllNotes() {
  addNoteContainer.style.display = "none";

  let allNotes;
  let notes = localStorage.getItem("notes");     ////.card-container
  if (notes === null) {
    allNotes = [];
  } else {
    allNotes = JSON.parse(notes);               //allNotes = [ {},{},{},{},{} ]        ----like This, i.e an Array of Objects
  }

  let notesContainer = document.getElementById("notes");          //getElementById("notes");
  notesContainer.innerHTML = "";

  allNotes.forEach((note , index) => {
    notesTobeShown = `<div class="card">
            <div class="card-body">
              <div class="card-header">
                <h3 class="card-title">${note.title}</h3>
                <div class="svg">
                  <span class="btn card_btns delete" id="deleteBtn" onclick="deleteNote(${index})"><i class="fa-solid fa-trash" id="fa-trash"></i></span>
                  <span class="btn card_btns edit" id="editBtn" onclick="editNote(${index})"><i class="fa-solid fa-pen"></i></span>
                </div>
              </div>
              <p class="card-text">${note.descp}</p>
            </div>
          </div>`;

    notesContainer.innerHTML = notesContainer.innerHTML + notesTobeShown;
  });
}
showAllNotes();


let addNoteBtn = document.getElementById("addNote");
addNoteBtn.addEventListener("click", () => {
  let allNotes;
  let notes = localStorage.getItem("notes"); //.card-container
  if (notes === null) {
    allNotes = [];
  } else {
    allNotes = JSON.parse(notes);                      //allNotes = [ {},{},{},{},{} ]   ----like This, i.e an Array of Objects
  }

  let title = document.getElementById("title");
  let descp = document.getElementById("descp");
  let newNoteObj = {
    title : title.value,
    descp : descp.value
  }

  if(addNoteBtn.innerText === "Update Note"){
    let editCard = document.querySelector(".card");
    let editIndex = editCard.getAttribute("editCard");
    allNotes[editIndex] = newNoteObj ;
  }else{
    allNotes.push(newNoteObj);
  }

  localStorage.setItem("notes" , JSON.stringify(allNotes));
  title.value = '';
  descp.value = '';
  showAllNotes();
});


//To Add New Note{Create}
let navAddNoteBtn = document.getElementById("navAddNote");
navAddNoteBtn.addEventListener("click", () => {
  addNoteContainer.style.display = "block";
  addNoteBtn.innerText = "Save"
});


//To delete Notes
function deleteNote(noteIndex){
  let allNotes = JSON.parse(localStorage.getItem('notes'));
  allNotes.splice(noteIndex, 1);
  localStorage.setItem("notes" , JSON.stringify(allNotes));
  showAllNotes();
}


//To Search Notes
let search = document.getElementById("search");
search.addEventListener("input" , ()=>{
  let inputValue = search.value.toLowerCase();
  let allcards = document.getElementsByClassName("card");

  Array.from(allcards).forEach((ele)=>{
    let cardText = ele.getElementsByTagName("p")[0].innerText;
    // console.log(cardText);

    if(cardText.toLowerCase().includes(inputValue)){
      ele.style.display = "block";
    }else{
      ele.style.display = "none";
    }
  })
})


//To Edit The Notes{UPDATE} ;
function editNote(noteIndex){
  let allNotes = JSON.parse(localStorage.getItem("notes"));
  addNoteContainer.style.display = "block";

  let title = document.getElementById("title")
  let descp = document.getElementById("descp")

  title.value = allNotes[noteIndex].title;
  descp.value = allNotes[noteIndex].descp;

  addNoteBtn.innerText = 'Update Note';

  let editCard = document.querySelector(".card");
  editCard.setAttribute("editCard" , `${noteIndex}`);
}
