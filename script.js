// script.js
function previewFile(inputId) {
    const fileInput = document.getElementById(inputId);
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const modal = document.getElementById('modal');
            const previewIframe = document.getElementById('previewIframe');
            previewIframe.src = e.target.result;
            modal.style.display = 'block';
        };

        reader.readAsDataURL(file);
    } else {
        alert('Please select a file to preview.');
    }
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}