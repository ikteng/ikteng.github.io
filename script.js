function openTab(tabId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    const selectedSection = document.getElementById(tabId);
    if (selectedSection) {
        selectedSection.classList.add('active');
        
        // Update the URL to reflect the current section
        history.pushState(null, null, `#${tabId}`);
    }
}

function downloadResume() {
    // Provide the correct path to your resume PDF file
    const resumePath = "https://github.com/ikteng/ikteng.github.io/blob/ae72b43763d7caeb573bd51bba37dce1ea0ff504/media/Resume%203.pdf";
    
    // Create an anchor element
    const link = document.createElement("a");
    
    // Set the download attribute and the file path
    link.download = "Your_Resume.pdf";
    link.href = resumePath;
    
    // Trigger a click on the anchor element
    link.click();
}

// Open and close topbar
function openHiddenMenu() {
    document.getElementById("myHiddenMenu").style.display = "block";
  }
  
  function closeHiddenMenu() {
    document.getElementById("myHiddenMenu").style.display = "none";
  }

function scrollToProject(projectId) {
    var projectElement = document.getElementById(projectId);

    if (projectElement) {
      projectElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

function openProjectLink(projectLink) {
    window.open(projectLink, '_blank');
}
