/** Renders table based on a list of objects */
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
const student1: Student = {
    firstName: "jassem",
    lastName: "ben ali",
    age: 20,
    location: "sfax"
};
const student2: Student = {
  firstName: "ali",
  lastName: "ben ali",
  age: 18,
  location: "tunis"
};
const studentList = [student1,student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentList.forEach((data) => {
  const row = document.createElement('tr');
  const cellName = document.createElement('td');
  const cellLocation = document.createElement('td');
  cellName.textContent = data.firstName;
  cellLocation.textContent = data.location;
  row.appendChild(cellName);
  row.appendChild(cellLocation);
  tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);