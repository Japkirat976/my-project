const textarea = document.getElementById('textInput');
const charCount = document.getElementById('charCount');

function count() {
    charCount.textContent = textarea.value.length;
};

textarea.addEventListener('input', count);

