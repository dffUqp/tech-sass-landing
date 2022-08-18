const [burger, menu] = [
  document.querySelector('.burger'),
  document.querySelector('.menu'),
];

burger.onclick = () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');

  document.querySelector('body').classList.toggle('lock');
};
