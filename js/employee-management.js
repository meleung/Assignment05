/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

/*** MODEL ***/
var gEmployees = null;

function setEmployees(employees) {
    "use strict";
    //localStorage.setItem("employees", JSON.stringify(employees));
    gEmployees = JSON.stringify(employees);
}

function getEmployees() {
    "use strict";
    //var employees = JSON.parse(localStorage.getItem("employees"));
    var employees = JSON.parse(gEmployees);
    
    if (employees === null) {
        employees = [{
            name : "Sally Smith",
            title : "Quality Assurance",
            extension : 3423
        }, {
            name : "Mark Martin",
            title : "VP Sales",
            extension : 3346
        }, {
            name : "John Johnson",
            title : "Marketing",
            extension : 3232
        }, {
            name : "Billy Banks",
            title : "Engineer",
            extension : 3164
        }, {
            name : "Daphne Dillinger",
            title : "Consultant",
            extension : 3516
        }];
        //setEmployees(employees);
    }

    return employees;
}

function addEmployee(employees, employee) {
    "use strict";

    employees.push(employee);
}

function deleteEmployee(employees, employee) {
    "use strict";
    var e;

    for (e in employees) {
        if (employees.hasOwnProperty(e)) {
            if (employees[e].name === employee.name && employees[e].title === employee.title && employees[e].extension === employee.extension) {
                employees.splice(e, 1);
                return true;
            }
        }
    }
    return false;
}

/*** VIEW ***/
function showEmployees(employees) {
    "use strict";
    var employeeTable, employeeTableBody, employeeTableTitle, i, row;

    employeeTable = $("employee_table");
    employeeTableBody = employeeTable.getElementsByTagName("TBODY")[0];
    employeeTableTitle = $("table_title");

    /* Set the table title */
    employeeTableTitle.innerHTML = "Showing ";
    employeeTableTitle.innerHTML += employees.length;
    employeeTableTitle.innerHTML += " Employee";
    employeeTableTitle.innerHTML += employees.length === 1 ? "" : "s";
    
    employeeTableBody.parentElement.removeChild(employeeTableBody);
    employeeTableBody = window.document.createElement("TBODY");
    employeeTable.appendChild(employeeTableBody);

    /* Populate the table with employees */
    for (i = 0; i < employees.length; i += 1) {
        row = employeeTableBody.insertRow(employeeTableBody.rows.length);
        row.insertCell(0).innerHTML = employees[i].name;
        row.insertCell(1).innerHTML = employees[i].title;
        row.insertCell(2).innerHTML = employees[i].extension;
        row.insertCell(3).innerHTML = "<input type='button' value='Delete'>";
    }
}

/*** CONTROLLER ***/
function addEmployeeHandler(e) {
    "use strict";
    var employees, employee, name, title, extension;
    
    e.preventDefault();
    
    name = $("name").value;
    title = $("title").value;
    extension = parseInt($("ext").value, 10);
    
    if (name === "" || title === "" || isNaN(extension)) {
        window.alert("Incomplete");
    }
    employee = {
        name : name,
        title : title,
        extension : extension
    };
    
    employees = getEmployees();
    addEmployee(employees, employee);
    setEmployees(employees);
    showEmployees(employees);
}

function deleteEmployeeHandler(e) {
    "use strict";
    var employees, employee, employeeRow, employeeFields, name, title, extension;
    
    /* Only checking for click event on the delete input button */
    if (!(e.target.nodeName === "INPUT" && e.target.value === "Delete")) {
        return;
    }
    
    employeeRow = e.target.parentElement.parentElement;
    employeeFields = employeeRow.getElementsByTagName("TD");

    name = employeeFields[0].innerHTML;
    title = employeeFields[1].innerHTML;
    extension = parseInt(employeeFields[2].innerHTML, 10);

    employee = {
        name: name,
        title: title,
        extension: extension
    };

    employees = getEmployees();
    deleteEmployee(employees, employee);

    employeeRow.parentElement.removeChild(employeeRow);
}

function init() {
    "use strict";
    var addButton, employeeTable, employees;
    
    addButton = $("add_button");
    employeeTable = $("employee_table");
    
    employees = getEmployees();
    showEmployees(employees);
    
    addButton.addEventListener("click", addEmployeeHandler);
    employeeTable.addEventListener("click", deleteEmployeeHandler);
}

window.addEventListener("load", init);
