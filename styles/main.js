/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function toggleDropdown() {
  const dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");
  centerSearchBar();
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

// Set text color to black
function setTextColorToBlack() {
  document.body.style.color = 'black';
  
  const dropdownButton = document.querySelector('.dropbtn');
  if (dropdownButton) {
    dropdownButton.style.color = 'black';
  }
  
  const links = document.getElementsByTagName('a');
  for (const link of links) {
    link.style.color = 'black';
  }
}

// Center the content
function centerContent() {
  const container = document.createElement('div');
  Object.assign(container.style, {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    width: '100%'
  });

  ['h2', 'p', '.dropdown'].forEach(selector => {
    const element = document.querySelector(selector);
    if (element) container.appendChild(element);
  });

  document.body.appendChild(container);
}

// Center the search bar
function centerSearchBar() {
  const dropdown = document.querySelector('.dropdown');
  const dropdownContent = document.getElementById('myDropdown');
  const searchInput = document.getElementById('myInput');

  if (dropdown && dropdownContent && searchInput) {
    Object.assign(dropdownContent.style, {
      left: '50%',
      transform: 'translateX(-50%)',
      width: '300px'
    });

    Object.assign(searchInput.style, {
      width: '100%',
      boxSizing: 'border-box'
    });
  }
}

// Set the background color
function setBackgroundColor() {
  document.body.style.backgroundColor = 'rgb(185, 226, 245)';
}

// Initialize the page
function initializePage() {
  setBackgroundColor();
  setTextColorToBlack();
  centerContent();
  centerSearchBar();
}

// Call the initialization function when the window loads
window.onload = initializePage;

// Handle dropdown item selection
function selectItem(element) {
    const selectedValue = element.getAttribute('data-value');
    const selectedText = element.textContent;
    
    console.log('Selected value:', selectedValue);
    console.log('Selected text:', selectedText);
    
    // You can do something with the selected value here
    // For example, update the dropdown button text:
    document.querySelector('.dropbtn').textContent = selectedText; 
    
    // Close the dropdown
    toggleDropdown();
}
