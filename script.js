function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
    var overlay = document.getElementById("overlay");
    overlay.style.display = (overlay.style.display == "block") ? "none" : "block";
  }
  
  function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
    updateDarkModeButton();
    updateAboutSiteStyle(body.classList.contains("dark-mode")); // Call function to update About Me style
  }
  
  function updateDarkModeButton() {
    var darkModeIcon = document.getElementById("dark-mode-icon");
    if (document.body.classList.contains("dark-mode")) {
      darkModeIcon.classList.remove("fa-moon");
      darkModeIcon.classList.add("fa-sun");
    } else {
      darkModeIcon.classList.remove("fa-sun");
      darkModeIcon.classList.add("fa-moon");
    }
  }
  
  function updateAboutSiteStyle(isDarkMode) {
    var aboutSite = document.querySelector(".about-site");
    if (isDarkMode) {
      aboutSite.classList.add("dark-mode");
    } else {
      aboutSite.classList.remove("dark-mode");
    }
  }