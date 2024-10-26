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
    
    toggleDropdown();
    showTable();

    addRow(selectedText);
}

function addRow(selectedText){
    var table = document.getElementById("table");
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerHTML = selectedText;
    tr.appendChild(td1);
    var td2 = document.createElement("td");
    td2.innerHTML = "radius data";
    tr.appendChild(td2);
    var td3 = document.createElement("td");
    td3.innerHTML = "mass data";
    tr.appendChild(td3);
    var td4 = document.createElement("td");
    td4.innerHTML = "temp data";
    tr.appendChild(td4);
    var td5 = document.createElement("td");
    td5.innerHTML = "year data";
    tr.appendChild(td5);
    var td6 = document.createElement("td");
    td6.innerHTML = "dist data";
    tr.appendChild(td6);
    table.appendChild(tr);
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
