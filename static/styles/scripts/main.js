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
    const selectedText = element.textContent;
    
    fetch('/select', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: selectedText }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response from server:', data);
        if (data.status === 'success') {
            const info = data.planet_info;
            const threshold = data.threshold_planet;
            addRow(
                info.name, 
                parseFloat(info.radius), 
                parseFloat(info.mass), 
                parseFloat(info.temperature), 
                parseFloat(info.year_discovered),
                parseFloat(info.distance_from_earth),
                threshold
            );
            showTable();
        } else {
            console.error('Error:', data.message);
        }
    })
    .catch((error) => console.error('Error:', error));
    
    toggleDropdown();
}

const thresholds = {
    radius: 50000,  // km
    mass: 1e26,     // kg
    temperature: 0, // °C
    distance_from_earth: 5e8 // km
};

function addRow(name, radius, mass, temp, year, distance, threshold) {
    console.log('Adding row:', name, radius, mass, temp, year, distance);
    var table = document.getElementById("table");
    var tr = document.createElement("tr");
    
    appendData(tr, name);
    appendComparedData(tr, radius, parseFloat(threshold.radius), 'km', name);
    appendComparedData(tr, mass, parseFloat(threshold.mass), 'kg', name);
    appendComparedData(tr, temp, parseFloat(threshold.temperature), '°C', name);
    appendData(tr, year);
    appendComparedData(tr, distance, parseFloat(threshold.distance_from_earth), 'km', name);
    
    table.appendChild(tr);
}

function appendComparedData(tr, value, threshold, unit, planetName) {
    var td = document.createElement("td");
    var numValue = parseFloat(value);
    
    if (!isNaN(numValue)) {
        td.innerHTML = `${value} ${unit} `;
        var img = document.createElement("img");
        img.style.width = "20px";  // Adjust size as needed
        img.style.height = "20px";  // Adjust size as needed
        
        if (numValue > threshold) {
            img.src = static_url + "images/image.png";
            img.alt = "Higher";
            td.classList.add('higher');
        } else if (numValue < threshold) {
            img.src = static_url + "images/picture2.png";
            img.alt = "Lower";
            td.classList.add('lower');
        } else { // when we find it
            td.innerHTML += "(Equal)";
            showCongratulationScreen(planetName);
        }
        
        if (img.src) {
            td.appendChild(img);
        }
    } else {
        td.innerHTML = value;
    }
    
    tr.appendChild(td);
}

function appendData(tr, data) {
    var td = document.createElement("td");
    td.innerHTML = data;
    tr.appendChild(td);
}

// Show the table
function showTable() {
  document.getElementById('table').style.display = 'table';
}

//hide the table
function hideTable() {
  document.getElementById('table').style.display = 'none';
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
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});

function showCongratulationScreen(planetName) {
    // Create the congratulation screen
    const congratsScreen = document.createElement('div');
    congratsScreen.id = 'congratsScreen';
    congratsScreen.style.position = 'fixed';
    congratsScreen.style.top = '0';
    congratsScreen.style.left = '0';
    congratsScreen.style.width = '100%';
    congratsScreen.style.height = '100%';
    congratsScreen.style.backgroundColor = 'rgba(13, 17, 23, 0.9)'; // Dark blue background
    congratsScreen.style.display = 'flex';
    congratsScreen.style.justifyContent = 'center';
    congratsScreen.style.alignItems = 'center';
    congratsScreen.style.zIndex = '1000';

    // Create the content container
    const contentContainer = document.createElement('div');
    contentContainer.style.backgroundColor = 'rgba(22, 27, 34, 0.8)'; // Slightly lighter blue
    contentContainer.style.padding = '40px';
    contentContainer.style.borderRadius = '20px';
    contentContainer.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.1)';
    contentContainer.style.textAlign = 'center';

    // Create the congratulation message
    const message = document.createElement('div');
    message.innerHTML = `<h1>Congratulations!</h1>
                         <p>You found the correct planet:</p>
                         <h2>${planetName}</h2>`;
    message.style.color = '#58a6ff'; // Light blue text
    message.style.fontFamily = 'Arial, sans-serif';
    message.style.marginBottom = '30px';

    // Add a star animation
    const starContainer = document.createElement('div');
    starContainer.style.position = 'absolute';
    starContainer.style.width = '100%';
    starContainer.style.height = '100%';
    starContainer.style.overflow = 'hidden';
    starContainer.style.zIndex = '-1';
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = '2px';
        star.style.height = '2px';
        star.style.backgroundColor = 'white';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animation = `twinkle ${Math.random() * 5 + 5}s linear infinite`;
        starContainer.appendChild(star);
    }
    congratsScreen.appendChild(starContainer);

    // Add a close button
    const closeButton = document.createElement('button');
    closeButton.innerHTML = 'Close';
    closeButton.style.padding = '10px 20px';
    closeButton.style.fontSize = '16px';
    closeButton.style.backgroundColor = '#238636'; // Green button
    closeButton.style.color = 'white';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '5px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.transition = 'background-color 0.3s';
    closeButton.onmouseover = function() {
        this.style.backgroundColor = '#2ea043';
    };
    closeButton.onmouseout = function() {
        this.style.backgroundColor = '#238636';
    };
    closeButton.onclick = function() {
        document.body.removeChild(congratsScreen);
    };

    contentContainer.appendChild(message);
    contentContainer.appendChild(closeButton);
    congratsScreen.appendChild(contentContainer);

    // Add the congratulation screen to the body
    document.body.appendChild(congratsScreen);

    // Add keyframe animation for twinkling stars
    const style = document.createElement('style');
    style.textContent = `
        @keyframes twinkle {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}
