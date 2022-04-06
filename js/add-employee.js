// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
let id, fname, ext, email, department;
// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
let width = 800;
let height = 700;

// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
const $ = (id) => document.getElementById(id);

// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE
let outputDetails = window.opener.document.getElementById('loginDetails');

// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener('load', () => {
    // RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
    window.resizeTo(width, height);
    // MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
    window.moveTo(((window.screen.width - width) / 2), ((window.screen.height - height) / 2));
});

// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW
let cancelWindow = $('cancel');
cancelWindow.addEventListener('click', (e) => {
    e.preventDefault();
    window.close();
});

// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION
let empForm = $('empForm');
empForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS
    id = $('id').value;
    fname = $('name').value;
    ext = $('extension').value;
    email = $('email').value;
    department = $('department').value;
    // SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES
    outputDetails.innerHTML += `ID: ${id}<br>Name: ${fname}<br>Extension: ${ext}<br>Email: ${email}<br>Department: ${department}<br><br>`;
    // CLOSE THE POPUP
    window.close();
    // THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE
});

