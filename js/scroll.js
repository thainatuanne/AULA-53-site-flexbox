function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.topnav a');
    console.log(navLinks);
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault(); 
            const sectionId = link.getAttribute('href').substring(1); 
            console.log("meusectionID" + sectionId);
            scrollToSection(sectionId);
        });
    });
  });