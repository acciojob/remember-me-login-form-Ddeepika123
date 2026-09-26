//your JS code here. If required.
const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existing = document.getElementById("existing"); 
form.addEventListener("submit", function(event) { 
	// Stop page from refreshing
	event.preventDefault(); 
	// Get username and password 
	const user = username.value; 
	const pass = password.value; 
	// Show login message
	alert("Logged in as " + user); 
	// If Remember Me is checked
	if (checkbox.checked) { 
		localStorage.setItem("username", user);
		 localStorage.setItem("password", pass); }
	else { 
		// Remove old saved credentials
		localStorage.removeItem("username"); 
		localStorage.removeItem("password"); 
		existing.style.display = "none"; }
});
// Check localStorage when page loads
const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password"); 
if (savedUsername && savedPassword) { 
	existing.style.display = "block";
} 
// Login using saved credentials 
existing.addEventListener("click", function() {
	const savedUser = localStorage.getItem("username"); 
	alert("Logged in as " + savedUser);
});