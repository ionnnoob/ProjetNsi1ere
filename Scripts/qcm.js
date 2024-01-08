document.addEventListener('DOMContentLoaded', function() {
  function submitForm() {
const form = document.getElementById('qcm-form');
// Get the selected values
const q1Answer = document.querySelector('input[name="q1"]:checked');
const q2Answer = document.querySelector('input[name="q2"]:checked');

// Log the selected values for debugging
console.log('q1Answer:', q1Answer ? q1Answer.value : null);
console.log('q2Answer:', q2Answer ? q2Answer.value : null);

// Check if both questions are answered
if (q1Answer && q2Answer) {
// Store the answers in localStorage
localStorage.setItem('q1Answer', q1Answer.value);
localStorage.setItem('q2Answer', q2Answer.value);

// Uncomment the following lines to redirect to resultat.html
const url = `resultat.html?q1Answer=${q1Answer.value}&q2Answer=${q2Answer.value}`;
window.location.href = url;
} else {
// Alert user to answer all questions
alert('Veuillez répondre à toutes les questions avant de voir les résultats.');
}
}
function abortForm() {
  const form = document.getElementById('qcm-form');
  form.reset();
}

// Attach click event listeners
document.getElementById('submitBtn').addEventListener('click', submitForm);
document.getElementById('resetBtn').addEventListener('click', abortForm);
});

function correctionForm(){
window.location.href = 'Correction.html';
}