class weightJS {
  constructor() {
    //Data structures
let trackerObject = { weight: String, date: String };
let weightArray = [];
//from DOM
var $incrementBtn = document.querySelector('.increment-btn');
var $decrementBtn = document.querySelector('.decrement-btn');
var $counter = document.querySelector('.weight-input');
var $clear = document.querySelector('.clear-btn');
var $submit = document.querySelector('.submit-btn');
var dayCountEl = document.getElementById("day-count");
var plural = document.querySelector(".plural");
var difference = document.querySelector(".difference");
//variables
var firstKey;
var lastKey;
var lastDiff;
var firstWeight;
var coefficient;

//event listeners
$incrementBtn.addEventListener('click', increment);
$incrementBtn.addEventListener('keyup', returnCheck);// allows enter to be press outside input field and still submit
$decrementBtn.addEventListener('click', decrement);
$decrementBtn.addEventListener('keyup', returnCheck);
$clear.addEventListener('click', clearCheck);
$submit.addEventListener('click', submit);
$counter.addEventListener("keyup", returnCheck);
reset();
//functions
function returnCheck(event){
  if (event.keyCode === 13) {
    submit();
  }
}
const removeElements = (elms) => [...elms].forEach(el => el.remove());
//model
function submit(){
  lastKey = getTime();
  trackerObject.weight = ($counter.value * 2);
  trackerObject.date = formatAMPM();
  if ($counter.value < 1 || $counter.value > 170) {
    alert('Please enter a value (in kg) between 1 and 170');
    return;
  }
  if (isNaN($counter.value)) {
    alert('Entry must only include numbers');
    return
  }
  weightArray.push($counter.value * 2);
  //lastKey = formatAMPM();
  localStorage.setItem(lastKey, JSON.stringify(trackerObject));
  if (localStorage.length === 1) {
    setCoefficient();
  }
  if ($counter.value > firstWeight * 2 || $counter.value < firstWeight / 2) {
    alert('You have gained or lost more than 2 times your starting weight! You may want to clear previous data');
    localStorage.removeItem(lastKey);
    return;
  }
  addDiv();
}

function increment(){
  $counter.value = parseInt($counter.value) + 1;
}

function decrement(){
  $counter.value = parseInt($counter.value) - 1;
}
function clearCheck() {
  if (confirm('Are you sure you want to clear all data?')) {
    clear();
} else {
   return;
}
}
function clear(){
  //this.weightArray = [];
  $counter.value = 0;
  dayCountEl.innerHTML = 0;
  var checkElExists = document.querySelectorAll(".graph__single-bar"); //ALL -->
  var arrFromcheckElExists = Array.from(checkElExists);
  console.log('arr from nodelist = ' + arrFromcheckElExists); //NODELIST
  if (arrFromcheckElExists) {
    removeElements(arrFromcheckElExists);
    localStorage.clear();
    pluraliser();
  }
  difference.classList.remove("difference--negative") || difference.classList.remove("difference--positive");
  difference.innerHTML = '';
  console.log(weightArray);
}
function remove(key){
  console.log('2. remove button clicked and value received was: ' + key);
  localStorage.removeItem(key);
  var el = document.getElementById(key)
  heightDelay(el.parentElement, 0); //height slide down animation
  elRemove(el)
  //el.parentElement.remove();
  dayCountEl.innerHTML = localStorage.length;
  setCoefficient();
  insertDifference(calcDifference());
  pluraliser();
}

function elRemove(el) {
  setTimeout(function(){ el.parentElement.remove();}, 450);
  lastKey = localStorage.key(localStorage.length-1); //reset last key
}
function pluraliser() {
  console.log('7. got to pooraliser');
  if (localStorage.length === 1) {
   plural.classList.add("plural");
  } else {
    plural.classList.remove("plural");
  }
}

function heightDelay(newDiv, weight) {
  setTimeout(function(){ newDiv.style.height = weight/2*coefficient + "px"; }, 0);
  console.log('3. Height delay');
}

function insertDifference(diff) {
  console.log('passed in diff from func is: ' + diff); //refactor to combine
  if(diff > 0) {
    difference.innerHTML = '+' + diff;
  }
  if (diff < 0) {
    difference.innerHTML = diff;
  }
  if (diff === 0) { //else doesn't work here as treated in conjunction with prev if
    difference.innerHTML = '0';
  } 
  lastDiff = diff;
}
function addDivHelper(weight, date, key) {
  var newDiv = document.createElement('div');//repeat
  var newSpan = document.createElement('span');//repeat
  newDiv.classList.add('graph__single-bar');//repeat
  newDiv.setAttribute("id", "span");// needed?yes!for clear all//repeat
  newDiv.appendChild(newSpan);//repeat
  document.getElementById("chart-wrapper").appendChild(newDiv);//repeat
  heightDelay(newDiv, weight);//repeat
  newSpan.innerHTML = '<strong>' + (weight/2) + 'kg' + '</strong>' + '<br>' + date  + '<button id="delete-btn">remove</button>';//repeat
  pluraliser();//repeat
  dayCountEl.innerHTML = localStorage.length;//repeat
  newSpan.setAttribute("id", key);//repeat
  var deleteBtn = document.getElementById(key);//repeat
  addEventListeners(newDiv, newSpan, deleteBtn, key);//repeat
}
function addDiv () {
  if (localStorage.length === 1) {
    firstKey = localStorage.key(0)
  }
    var key = lastKey;
    var valAsObj = JSON.parse(localStorage.getItem(key));//repeat
    const weight = valAsObj.weight;//repeat
    const date = valAsObj.date;//repeat
  addDivHelper(weight, date, key);
  insertDifference(calcDifference());
}

function reset() {
  if (localStorage.length === 0) { return; }
  for (let i=0; i<localStorage.length; i++) {
    if (i === 0) {
      firstKey = localStorage.key(i);
    }
    const key = localStorage.key(i);
    var valAsObj = JSON.parse(localStorage.getItem(key));
    const weight = valAsObj.weight;
    const date = valAsObj.date;
    addDivHelper(weight, date, key);
    pluraliser();
}
setCoefficient();
insertDifference(Math.round(((JSON.parse(localStorage.getItem(localStorage.key(localStorage.length-1))).weight - JSON.parse(localStorage.getItem(firstKey)).weight)/2)*10)/10);
}

function addEventListeners(elementToAddTo, spanToAddClassTo, deleteBtn, key) { //need to rename parameters
  elementToAddTo.addEventListener('mouseover', function() {
    spanToAddClassTo.classList.add('graph__single-bar--visible');
  });
  elementToAddTo.addEventListener('mouseleave', function() {
    spanToAddClassTo.classList.remove('graph__single-bar--visible');
  });
  deleteBtn.addEventListener('click', function() {
    console.log('1. clicked and key was: ' + key);
    remove(key);
  });

  }

  function calcDifference() {
    if (localStorage.length === 0) {
      return;
    } else {
      console.log('4. got to calcDifference');
      var last = JSON.parse(localStorage.getItem(lastKey)).weight/2; 
      console.log('5. last = ' + last);
      var first = JSON.parse(localStorage.getItem(firstKey)).weight/2;
      console.log('6. first = ' + first);
      var diff =  last - first;
      if (diff > 0) {
        difference.classList.add("difference--positive");
        difference.classList.remove("difference--negative");
      }
      if (diff < 0) {
        difference.classList.add("difference--negative");
        difference.classList.remove("difference--positive");
      } 
      
      if (diff === 0){
        difference.classList.remove("difference--negative") || difference.classList.remove("difference--positive");
      }
      return Math.round( diff * 10 ) / 10;;
    } 
  }
  
  function setCoefficient() {
    firstKey = localStorage.key(0);
      firstWeight = JSON.parse(localStorage.getItem(firstKey)).weight/2;
      coefficient = 175/firstWeight;
  }
  
  function formatAMPM() {
    var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    var today  = new Date();
    return today.toLocaleDateString("en-US", options);
    }
    
    function getTime() {
      var d = new Date();
      return d.getTime();
    }      
  }
}
export default weightJS;
