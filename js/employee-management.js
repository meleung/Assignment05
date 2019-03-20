/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var gEmployees = null;

/* Update Employee Table
  Must clean up THEAD / TBODY separation
  */
function showEmployees() {
    "use strict";
    var employeeTable, employeeTableBody, employeeTableTitle, i, row, employees;
    
    employees = JSON.parse(gEmployees);
    
    window.console.log(employees);
    employeeTable = $("employee_table");
    employeeTableBody = employeeTable.getElementsByTagName("TBODY")[0];
    employeeTableTitle = $("table_title");
    
    window.console.log("table rows: " + employeeTable.rows.length);
    window.console.log("table body: " + employeeTableBody.rows.length);
    
    /* Clear the table */
    for (i = employeeTableBody.rows.length; i > 0; i -= 1) {
        window.console.log(employeeTableBody.rows.length);
        employeeTableBody.deleteRow(i - 1);
    }
    
    /* Set the table title */
    employeeTableTitle.innerHTML = "Showing ";
    employeeTableTitle.innerHTML += employees.length;
    employeeTableTitle.innerHTML += " Employee";
    employeeTableTitle.innerHTML += employees.length === 1 ? "" : "s";
    
    /* Populate the table with current employees */
    for (i = 0; i < employees.length; i += 1) {
        row = employeeTableBody.insertRow(employeeTableBody.rows.length);
        row.insertCell(0).innerHTML = employees[i].name;
        row.insertCell(1).innerHTML = employees[i].title;
        row.insertCell(2).innerHTML = employees[i].extension;
        row.insertCell(3).innerHTML = "<input type='button' value='Delete'>";
    }
}

function setEmployees(employees) {
    "use strict";
    //localStorage.setItem("employees", JSON.stringify(employees));
    gEmployees = JSON.stringify(employees);
    showEmployees();
}

function deleteEmployee(employees, employee) {
    "use strict";
    var employeeIndex;
    window.console.log("deleteEmployee()");
    window.console.log($("employee_table"));
    window.console.log(employee);
    employeeIndex = $("employee_table").tBodies.indexOf(employee);
    window.console.log(employeeIndex);
    
}

function addEmployee(employees) {
    "use strict";
    //var nameField, titleField, extensionField,
    var name, title, extension, employee;
    
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
    
    employees.push(employee);
    setEmployees(employees);
    
    window.console.log(employees);
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
        setEmployees(employees);
    }
    
    return employees;
}

function init() {
    "use strict";
    var addButton, employees, employeeTable;
    
    addButton = $("add_button");
    employeeTable = $("employee_table");
    
    employees = getEmployees();
    
    addButton.addEventListener("click", function (e) {
        e.preventDefault();
        addEmployee(employees);
    });
    
    employeeTable.addEventListener("click", function (e) {
        if (e.target.nodeName === "INPUT") {
            deleteEmployee(employees, e.target.parentElement.parentElement);
        }
    });
}

window.addEventListener("load", init);