var p1 = document.querySelector('.p1');
var p2 = document.querySelector('.p2');
var p3 = document.querySelector('.p3');
var box = document.querySelector('.box');

  function one() {
    box.style.display = 'block';
    p1.style.display = 'block';
    p2.style.display = 'none';
    p3.style.display = 'none';
  }

  function two() {
    box.style.display = 'block';
    p1.style.display = 'none';
    p2.style.display = 'block';
    p3.style.display = 'none';
  }

  function three() {
    box.style.display = 'block';
    p1.style.display = 'none';
    p2.style.display = 'none';
    p3.style.display = 'block';
  }

  function btn2() {
    box.style.display = 'none';
  }
