document.addEventListener('DOMContentLoaded', function() {
  let sign_in_btn = document.querySelector("#sign-in-btn");
  let sign_up_btn = document.querySelector("#sign-up-btn");
  let container = document.querySelector(".container");

  sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });

  sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });

  // Load existing user data from localStorage if available
  let users = JSON.parse(localStorage.getItem('users')) || [];

  // Function to save user data to localStorage
  function saveUserData() {
    localStorage.setItem('users', JSON.stringify(users));
  }

  // Function to handle sign-up form submission
  document.querySelector(".sign-up-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Create user object
    const user = {
      username: username,
      email: email,
      password: password
    };

    // Push user object into users array
    users.push(user);

    // Save user data to localStorage
    saveUserData();

    // Clear form fields
    document.querySelector(".sign-up-form").reset();

    alert("User signed up successfully!");
  });

  // Function to handle login form submission
  document.querySelector(".sign-in-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const loginUsername = document.querySelector("#loginusername").value;
    const loginPassword = document.querySelector("#loginpassword").value;

    // Check if user exists in users array
    const user = users.find(u => u.username === loginUsername && u.password === loginPassword);

    if (user) {
      alert("Login successful!");
      // Redirect to main home page
      window.location.href = "https://ganesh22272001.github.io/group14majorproject/indexnew.html";
    } else {
      alert("Invalid username or password.");
    }

    // Clear form fields
    document.querySelector(".sign-in-form").reset();
  });
});
