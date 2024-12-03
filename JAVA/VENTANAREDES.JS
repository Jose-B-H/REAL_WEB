const closePopupBtn = document.getElementById('closePopupBtn');
const popup = document.getElementById('popup');

window.addEventListener('load', () => {
  popup.style.display = 'flex'; 
});

closePopupBtn.addEventListener('click', () => {
  popup.style.display = 'none'; 
});

window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none'; 
  }
});

