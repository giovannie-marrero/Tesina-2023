/**
 * Generates pagination for a dynamically generated table.
 *
 * @param {number} totalItems - The total number of items in the table.
 * @param {number} itemsPerPage - The number of items to display per page.
 * @param {number} currentPage - The current page number.
 * @returns {string} The generated pagination HTML.
 */
/*function generatePagination(totalItems, itemsPerPage, currentPage) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Check if there is only one page
    if (totalPages === 1) {
        return "";
    }

    let paginationHTML = "<ul class='pagination'>";

    // Generate the previous page button
    if (currentPage > 1) {
        paginationHTML += `<li class='page-item'><a class='page-link' href='#' onclick='changePage(${currentPage - 1})'>Previous</a></li>`;
    }

    // Generate the page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === currentPage) {
            paginationHTML += `<li class='page-item active'><a class='page-link' href='#' onclick='changePage(${i})'>${i}</a></li>`;
        } else {
            paginationHTML += `<li class='page-item'><a class='page-link' href='#' onclick='changePage(${i})'>${i}</a></li>`;
        }
    }

    // Generate the next page button
    if (currentPage < totalPages) {
        paginationHTML += `<li class='page-item'><a class='page-link' href='#' onclick='changePage(${currentPage + 1})'>Next</a></li>`;
    }

    paginationHTML += "</ul>";

    return paginationHTML;
}

// Example usage
const totalItems = 50;
const itemsPerPage = 10;
const currentPage = 3;

const paginationHTML = generatePagination(totalItems, itemsPerPage, currentPage);
console.log(paginationHTML);*/



	/**
	 * Generates pagination for a dynamically generated table.
	 *
	 * @param {string} tableId - The id of the table to be paginated.
	 * @param {number} itemsPerPage - The number of items to display per page.
	 */
	function generatePagination(tableId, itemsPerPage) {
	    const table = document.getElementById(tableId);
	    const rows = table.getElementsByTagName("tr");
	    const numRows = rows.length;
	 
	    // Calculate the number of pages required
	    const numPages = Math.ceil(numRows / itemsPerPage);
	 
	    // Create pagination elements
	    const paginationContainer = document.createElement("div");
	    paginationContainer.classList.add("pagination");
	 
	    for (let i = 0; i < numPages; i++) {
	        const pageLink = document.createElement("a");
	        pageLink.href = "#";
	        pageLink.textContent = i + 1;
	 
	        // Add event listener to handle page navigation
	        pageLink.addEventListener("click", function () {
	            // Calculate the start and end indices for the current page
	            const startIndex = i * itemsPerPage;
	            const endIndex = Math.min(startIndex + itemsPerPage, numRows);
	 
	            // Hide all rows
	            for (let j = 0; j < numRows; j++) {
	                rows[j].style.display = "none";
	            }
	 
	            // Display rows for the current page
	            for (let k = startIndex; k < endIndex; k++) {
	                rows[k].style.display = "";
	            }
	        });
	 
	        paginationContainer.appendChild(pageLink);
	    }
	 
	    // Insert the pagination container after the table
	    table.parentNode.insertBefore(paginationContainer, table.nextSibling);
	}
	 
	// Usage Example
	 
	// Assuming the table with id "studentTable" is dynamically generated
	generatePagination("studentTable", 10);