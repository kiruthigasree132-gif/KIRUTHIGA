// Function to switch between sections
function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  // Show the selected one
  document.getElementById(sectionId).classList.add('active');
}