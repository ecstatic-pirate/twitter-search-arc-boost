// Start of Script
console.log("Script Start")

// Remove everything from the page.
document.body.innerHTML = "";
console.log("Removed Elements")

// Get the URL of the image
var imageUrl = "https://www.edigitalagency.com.au/wp-content/uploads/Twitter-logo-png.png";
var imageElement = document.createElement("img");
imageElement.className = "twitterLogo";
imageElement.src = imageUrl;
document.body.appendChild(imageElement);


// Create an input element
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "🔍 Type your query here.");
document.body.appendChild(input);
input.className = "myInput";

document.addEventListener('keydown', (event) => {
  // Check if the '/' key was pressed
  if (event.key === '/') {
    // Prevent the default behavior of the key press
        event.preventDefault();
    
    // Get a reference to the search bar element
const searchBar = document.querySelector('.myInput');
// Focus on the search bar
searchBar.focus();
  }
});

// Create a button element
var button = document.createElement("button");
button.innerHTML = "Search Twitter";
button.className = "searchButton";
document.body.appendChild(button);

// Create a variable to save the input text
var inputText;

// Add an event listener to the button
button.addEventListener("click", function() {
// Save the input text to the variable
console.log("button clicked")

//console.log(document.querySelector(".myInput").value);
inputText = document.querySelector(".myInput").value;
newQuery = inputText.replace(/ /g, "%20");
redirectionURL = ("https://twitter.com/search?q="+newQuery)
console.log(redirectionURL)
  window.location.href = redirectionURL;
//alert("you wrote "+inputText);
//console.log("you wrote" + inputText)
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
inputText = document.querySelector(".myInput").value;
newQuery = inputText.replace(/ /g, "%20");
redirectionURL = ("https://twitter.com/search?q="+newQuery)
window.location.href = redirectionURL;
  }
});

var label = document.createElement("label");
label.innerHTML = "© Copyright Shantanu Garg 2022";
document.body.appendChild(label);
label.className = "infoLabel";

// End of Script
console.log("Script END")
