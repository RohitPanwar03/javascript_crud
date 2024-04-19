var selectedRow = null

// FORM SUBMIT FUNCTION

function onFormSubmit() {

    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["studentid"] = document.getElementById("studentid").value;
    formData["email"] = document.getElementById("email").value;
    formData["contact"] = document.getElementById("contact").value;

    if (validate()) {

        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

// FORM VALIDATION FUNCTION
function validate() {
    isValid = true;

    var fullname = document.getElementById("fullName").value;
    var studentId = document.getElementById("studentid").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;

    // FULL NAME VALIDATION ERRORS

    if (fullname == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }

    // STUDENT ID VALIDATION ERRORS

    if (studentId == "") {
        isValid = false;
        document.getElementById("studentidValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("studentidValidationError").classList.contains("hide"))
            document.getElementById("studentidValidationError").classList.add("hide");
    }

    // STUDENT EMAIL VALIDATION ERRORS

    if (email == "") {
        isValid = false;
        document.getElementById("emailValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("emailValidationError").classList.contains("hide"))
            document.getElementById("emailValidationError").classList.add("hide");
    }

    // STUDENTS CONTACT VALIDATION ERRORS

    if (contact == "") {
        isValid = false;
        document.getElementById("contactValidationError").classList.remove("hide");
    }
    else {
        isValid = true;
        if (!document.getElementById("contactValidationError").classList.contains("hide"))
            document.getElementById("contactValidationError").classList.add("hide");
    }
    return isValid;
}


// NEW RECORD FUNCTION

// it will insert a new data into the record

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.studentid;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.contact;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a  onClick="onDelete(this)">Delete</a>`;
}

// RESET FORM FUNCTION

// After the form is submitted all the fields will be reset

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("studentid").value = "";
    document.getElementById("email").value = "";
    document.getElementById("contact").value = "";
    selectedRow = null;
}

// EDIT BUTTON FUNCTION 

// This will display the student data from records to the input fields

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("studentid").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("contact").value = selectedRow.cells[3].innerHTML;
}

//UPDATE RECORD FUNCTION

// It will update the data in the records

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.studentid;
    selectedRow.cells[2].innerHTML = formData.email;
    selectedRow.cells[3].innerHTML = formData.contact;
}

// DELETE RECORD FUNCTION

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}


