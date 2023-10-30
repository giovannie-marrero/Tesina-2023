// Function to fetch the JSON file
async function fetchJSONFile() {
    try {
        const response = await fetch('training_model_data.json');
        if (!response.ok) {
            throw new Error('Failed to fetch JSON file');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

function displayTableFromJSON(jsonFile) {
    // Step 1: Read the JSON file
    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            // Step 2: Create the HTML table
            const table = document.createElement('table');
            table.setAttribute('id', 'studentTable');
 
            // Step 3: Create the table header row
            const columnMapping = {
                'Num Est': 'Student ID',
                'Sexo': 'Gender',
                'Prog Code': 'Program Code',
                'GPA': 'GPA',
                'Muni': 'Town of Origin',
                'Año Cred': 'Years Accredited'
            };
            const thead = document.createElement('thead');
            const headerRow = document.createElement('tr');
            for (const key in data[0]) {
                const th = document.createElement('th');
                th.textContent = columnMapping[key];
                headerRow.appendChild(th);
            }
            thead.appendChild(headerRow);
            table.appendChild(thead);
 
            // Step 4: Create the table body rows
            const tbody = document.createElement('tbody');
            data.forEach(item => {
                const row = document.createElement('tr');
                row.setAttribute('class', 'table-row');
                for (const key in item) {
                    const cell = document.createElement('td');
                    cell.textContent = item[key];
                    row.appendChild(cell);
                }
                tbody.appendChild(row);
            });
            table.appendChild(tbody);
 
            // Step 5: Append the table to the document body
            document.body.appendChild(table);
        })
        .catch(error => {
            throw new Error(`Error reading JSON file or displaying table: ${error}`);
        });
}

// Call the function to display the table
displayTableFromJSON('student_data_2023-2024.json', 'myTable');

// Function to search students by Student ID
function searchStudents() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toUpperCase();
    const table = document.getElementById("studentTable");
    const rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        const studentID = rows[i].getElementsByTagName("td")[0].textContent || rows[i].getElementsByTagName("td")[0].innerText;
        if (studentID.toUpperCase().includes(filter)) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}

// Get all table rows
const rows = document.querySelectorAll('.table-row');

// Get the popup and its content
const popup = document.getElementById('popup');
const popupContent = document.getElementById('popup-content');

// Function to show the popup
function showPopup() {
    popup.style.display = 'block';
}

// Function to hide the popup
function hidePopup() {
    popup.style.display = 'none';
}

// Add a click event listener to the document body to handle clicks on dynamically generated table rows
document.body.addEventListener('click', (event) => {
    const target = event.target;

    // Check if the clicked element or its parent has the class 'table-row'
    const tableRow = target.closest('.table-row');
    if (tableRow) {
        // You can customize the content of the popup here
        const studentId = tableRow.querySelector('td:first-child').textContent;
        const index = Array.from(tableRow.parentNode.children).indexOf(tableRow);
        popupContent.innerHTML = `${studentId} has a ${index + 1}% chance for dropping out.`;
        showPopup();
    } else if (target === popup) {
        hidePopup();
    }
});