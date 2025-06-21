📝 Notes App (Vanilla JavaScript + LocalStorage)
This is a simple Notes App built using HTML, CSS, and Vanilla JavaScript that allows users to create, read, update, delete, and search their notes. All notes are stored locally using the browser's LocalStorage, so no backend is required.


🚀 Features
✅ Add New Note (Title + Description)

🗂️ View All Notes in a card layout

🖊️ Edit Existing Notes

🗑️ Delete Individual Notes

🔍 Live Search through notes content

💾 Data Persistence using LocalStorage


📁 Folder Structure
📦NotesApp
 ┣ 📄 index.html
 ┣ 📄 script.js
 ┣ 📄 style.css


 🔧 Technologies Used
HTML5

CSS3

JavaScript (ES6)

LocalStorage API


🧠 How It Works

📌 Adding a Note
Click on the "Add Note" button.

Fill in the title and description.

Click "Save" to add the note.

The note is saved to localStorage as an object inside an array.

🔍 Viewing Notes
Notes are automatically loaded and displayed on page load.

Each note appears as a styled card with its title, description, and action buttons.

✏️ Editing a Note
Click the pen icon on any note to edit it.

The input fields get pre-filled with the note's content.

Click "Update Note" to save the changes.

🗑️ Deleting a Note
Click the trash icon to delete a note.

It is instantly removed from localStorage and the UI.

🔎 Searching Notes
Type in the search bar to filter notes by description.

Only matching notes are shown dynamically.


🔮 Future Improvements
Add categories/tags to notes

Enable markdown support

Add confirmation modal before delete

Save time and date for each note

Dark/Light mode toggle


🛠️ How to Use
Clone the repo:git clone https://github.com/Gyananjay31/NoteTakingApp_JS.git
Open index.html in your browser.
Start creating notes!


🙌 Author
Gyananjay Dwivedi
🌐 GitHub


📄 License
This project is open-source and available under the MIT License.
