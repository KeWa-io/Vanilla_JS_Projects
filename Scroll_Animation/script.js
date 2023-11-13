const box = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  checkBoxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect();
  });
}
