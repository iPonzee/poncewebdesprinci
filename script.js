// Get elements
const subscribeBtn = document.getElementById('subscribeBtn');
const newsletterPopup = document.getElementById('newsletterPopup');
const closeBtn = document.getElementById('closeBtn');

// Show the pop-up when the button is clicked
subscribeBtn.addEventListener('click', () => {
  newsletterPopup.style.display = 'block';
});

// Close the pop-up when the close button is clicked
closeBtn.addEventListener('click', () => {
  newsletterPopup.style.display = 'none';
});

// Optional: Close the pop-up if the user clicks outside the pop-up content
window.addEventListener('click', (e) => {
  if (e.target === newsletterPopup) {
    newsletterPopup.style.display = 'none';
  }
});
