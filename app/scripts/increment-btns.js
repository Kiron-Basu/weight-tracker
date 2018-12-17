console.log('hello');
var $incrementBtn = document.querySelector('.increment-btn');
var $decrementBtn = document.querySelector('.decrement-btn');
var $counter = document.querySelector('.weight-input');

$incrementBtn.addEventListener('click', function(){
  $counter.value = parseInt($counter.value) + 1;
}, false);

$decrementBtn.addEventListener('click', function(){
  $counter.value = parseInt($counter.value) - 1;
}, false);