const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (ele) {
     console.log(ele);
   ele.addEventListener('click', function (e) {
      const bg = window.getComputedStyle(e.target).getPropertyValue('background-color');
      body.style.backgroundColor = bg;
   });
});
