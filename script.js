// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

const employeesArray = [];

// Collect employee data
const collectEmployees = function () {
  let repeat = true;
  while (repeat) {
    const firstName = window.prompt("Please enter the Employee's First Name");
    const lastName = window.prompt("Please enter the Employee's Last Name");
    let salary = window.prompt("Please enter the Employee's salary");
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat(salary),
    }
    employeesArray.push(employee);

    repeat = confirm("Do you wish to add an employee?");
  }
  return employeesArray;
}
console.log(employeesArray);

// TODO: Get user input to create and return an array of employee objects

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  let addition = 0;
  const number = employeesArray.length;
  for (const employee of employeesArray) {
    addition += employee.salary;
  }
  const mean = addition / number;
  console.log(`Your employees have an average of ${mean} dollars!`)
}
// TODO: Calculate and display the average salary

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  const randomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)];
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
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
