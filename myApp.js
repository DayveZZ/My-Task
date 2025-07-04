let currentUser = null;

// First we need to target all the sections in the HTML and store them in an object
const sections = {
  login: document.getElementById("login-section"),
  signup: document.getElementById("signup-section"),
  dashboard: document.getElementById("dashboard-section"),
  tasks: document.getElementById("tasks-section"),
  notes: document.getElementById("notes-section"),
};

// Targeting Navigation Links with currentUser
function renderHeader() {
  const userInfo = document.getElementById("user-info");
  const logoutButton = document.getElementById("logout-btn");
  const desktopNavLinks = document.getElementById("desktop-nav");

  if (currentUser) {
    userInfo.textContent = currentUser.userName;
    logoutButton.style.display = "block";
    desktopNavLinks.querySelector("#nav-dashboard").style.display = "inline";
    desktopNavLinks.querySelector("#nav-tasks").style.display = "inline";
    desktopNavLinks.querySelector("#nav-notes").style.display = "inline";
  } else {
    userInfo.textContent = "";
    logoutButton.style.display = "none";
    desktopNavLinks.querySelector("#nav-dashboard").style.display = "none";
    desktopNavLinks.querySelector("#nav-tasks").style.display = "none";
    desktopNavLinks.querySelector("#nav-notes").style.display = "none";
  }
}

function initialize() {
  const signUpForm = document.getElementById("signup-form");
  signUpForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const userName = document.getElementById("signup-username").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    currentUser = {
      id: Date.now(),
      userName,
      email,
      password,
    };

    console.log(currentUser);
    localStorage.setItem("user", JSON.stringify(currentUser));
  });
}
initialize();

function onOn() {
  if (!currentUser) {
    currentUser = {
      userName: "",
      email: "",
      password: "",
    };
  }

  const userName = document.getElementById("signup-username");
  const email = document.getElementById("signup-email");
  const password = document.getElementById("signup-password");

  userName.addEventListener("input", (e) => {
    currentUser.userName = e.target.value;
  });
  email.addEventListener("input", (e) => {
    currentUser.email = e.target.value;
  });
  password.addEventListener("input", (e) => {
    currentUser.password = e.target.value;
  });

  ["signup-username", "signup-email", "signup-password"].forEach((id) => {
    document.getElementById(id).addEventListener("input", () => {
      console.log(currentUser);
    });
  });
}
onOn();
