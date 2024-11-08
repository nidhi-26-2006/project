const toggleButton = document.getElementById('toggleButton');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Switch to Light Mode';
    toggleButton.classList.add('dark-mode');
  } else {
    toggleButton.textContent = 'Switch to Dark Mode';
    toggleButton.classList.remove('dark-mode');
  }
});
function displayData() {
  const name = document.getElementById('name').value;
  const feedback = document.getElementById('feedback').value;
  const program = document.getElementById('program').value;

  const interests = [];
  document.querySelectorAll('input[name="interest"]:checked').forEach((checkbox) => {
    interests.push(checkbox.value);
  });

  const mode = document.querySelector('input[name="mode"]:checked').value;

  const result = `
    Name: ${name}\n
    Feedback: ${feedback}\n
    Program: ${program}\n
    Interests: ${interests.join(', ')}\n
    Mode of Study: ${mode}
  `;

  alert(result);
}
