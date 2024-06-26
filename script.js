// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
// TODO: Get user input to create and return an array of employee objects
const collectEmployees = function() {
  let loop = true
  const employees = [];
  while (loop == true) {
    const firstName = prompt('Enter first name');
    const lastName = prompt('Enter last name');
    let salaryStr = prompt('Enter salary as a valid number');
    let salary = parseFloat(salaryStr);
    if (isNaN(salary)) {
      salary = 0;
    }
    employees.push({
      firstName: firstName, lastName: lastName, salary: salary
    });
    const addEmployee = confirm('Would you like to add another employee?');
    if (addEmployee == false) {
      loop = false
    }
  }
  return employees
}


// Display the average salary
// TODO: Calculate and display the average salary
const displayAverageSalary = function(employeesArray) {
  let salary = 0;
  for (let employee of employeesArray) {
    salary += parseInt(employee.salary);
  } 
  const average = salary/employeesArray.length;
  console.log(`The average employee salary is $ ${average}`);
};

// Select a random employee
// TODO: Select and display a random employee
const getRandomEmployee = function(employeesArray) {
  const randomEmployee = employeesArray[Math.floor(Math.random()*employeesArray.length)];
  console.log('Congratulations to ' + randomEmployee.firstName + ' ' + randomEmployee.lastName + ', our random drawing winner!');
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
