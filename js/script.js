// Toggle visibility of details
function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    } else {
        element.classList.add('hidden');
    }
}

// Validate story form
function validateStoryForm() {
    const storyTitle = document.getElementById('storyTitle').value;
    const errorElement = document.getElementById('error');
    
    if (storyTitle.length < 3) {
        errorElement.textContent = "Story title must be at least 3 characters long.";
        return false;
    } else {
        errorElement.textContent = "";
        return true;
    }
}
