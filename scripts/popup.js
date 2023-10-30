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