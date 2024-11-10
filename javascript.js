document.addEventListener("DOMContentLoaded", function () {
    const themeButtons = document.querySelectorAll("[data-theme]");
    
    const applyTheme = (theme) => {
      document.documentElement.setAttribute("data-selected-theme", theme);
  
      themeButtons.forEach((btn) => {
        btn.setAttribute("aria-pressed", "false");
      });
      document.querySelector(`[data-theme="${theme}"]`).setAttribute("aria-pressed", "true");
    };
  
    const savedTheme = localStorage.getItem('selected-theme');
    if (savedTheme) {
      applyTheme(savedTheme);
    } else {
      const defaultTheme = themeButtons[0].getAttribute("data-theme");
      applyTheme(defaultTheme);
    }
  
    themeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const selectedTheme = button.getAttribute("data-theme");
        
        applyTheme(selectedTheme);
        
        localStorage.setItem('selected-theme', selectedTheme);
      });
    });
  });
  
