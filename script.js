function downloadResume() {
  // Provide the correct path to your resume PDF file
  const resumePath = "media/Resume 5.pdf";

  // Open a new window
  const newWindow = window.open();
  
  // Create an anchor element
  const link = document.createElement("a");
  
  // Set the download attribute and the file path
  link.download = "Resume.pdf";
  link.href = resumePath;
  
  // Trigger a click on the anchor element
  link.click();

  // Close the new window after the download starts
  newWindow.close();
}

function openProjectLink(projectLink) {
  window.open(projectLink, '_blank');
}