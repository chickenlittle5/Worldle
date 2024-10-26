/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function toggleDropdown() {
  const dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");
}

function filterDropdownItems() {
  const input = document.getElementById("myInput");
  const filter = input.value.toUpperCase();
  const dropdownItems = document.getElementById("myDropdown").getElementsByTagName("a");
  
  for (const item of dropdownItems) {
    const txtValue = item.textContent || item.innerText;
    item.style.display = txtValue.toUpperCase().includes(filter) ? "" : "none";
  }
}

// Handle dropdown item selection
function selectItem(element) {
    const selectedValue = element.getAttribute('data-value');
    const selectedText = element.textContent;
    
    console.log('Selected value:', selectedValue);
    console.log('Selected text:', selectedText);
    
    document.querySelector('.dropbtn').textContent = selectedText;
    
    // Send data to Python Flask backend
    fetch('http://127.0.0.1:5000/select', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value: selectedValue, text: selectedText }),
  })
  .then(response => response.json())
  .then(data => console.log('Success:', data))
  .catch((error) => console.error('Error:', error));
    
    toggleDropdown();
    showTable();

    addRow(selectedText);
}

function addRow(selectedText){
    var table = document.getElementById("table");
    var tr = document.createElement("tr");
    appendData(tr, selectedText);
    appendData(tr, "radius data");
    appendData(tr, "mass data");
    appendData(tr, "temp data");
    appendData(tr, "year data");
    appendData(tr, "dist data");
    table.appendChild(tr);
}

function appendData(tr, data){
  var td = document.createElement("td");
  td.innerHTML = data;
  tr.appendChild(td);
}

// Show the table
function showTable() {
  document.querySelector('.table').style.display = 'block';
}


// Show the loader
function showLoader() {
  document.querySelector('.loader').style.display = 'block';
}

// Hide the loader
function hideLoader() {
    document.querySelector('.loader').style.display = 'none';
}

// Example usage: Show loader before an operation, hide it after
function someAsyncOperation() {
    showLoader();
    
    setTimeout(() => {
        // Your operation here
        
        hideLoader();
    }, 2000);
}

// Initialize the page
function initializePage() {
    hideLoader();
}

// Call the initialization function when the window loads
window.onload = initializePage;
