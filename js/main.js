// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener('load', () => {
    // HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
    let btnAddEmployee = window.document.getElementById('btnAddEmployee');
    btnAddEmployee.addEventListener('click', () => {
        // OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
        window.open('add-employee.html', 'Add Employee', 'resizable=1,width=800,height=700');
    });
});
