console.log('hello');

//declarations
let trackerObject = { weight: String, date: String };
let weightArray = [];
var $incrementBtn = document.querySelector('.increment-btn');
var $decrementBtn = document.querySelector('.decrement-btn');
var $counter = document.querySelector('.weight-input');
var $clear = document.querySelector('.clear-btn');
var $submit = document.querySelector('.submit-btn');
var dayCountEl = document.getElementById("day-count");
var plural = document.querySelector(".plural");
var difference = document.querySelector(".difference");

var firstKey;
var lastKey;
var lastDiff;
var firstWeight;
var lowerLim;
var upperLim;
var counterDiff;
var coefficient;

//event listeners
$incrementBtn.addEventListener('click', increment);
$incrementBtn.addEventListener('keyup', returnCheck);// allows enter to be press outside input field and still submit
$decrementBtn.addEventListener('click', decrement);
$decrementBtn.addEventListener('keyup', returnCheck);
$clear.addEventListener('click', clear);
$submit.addEventListener('click', submit);
$counter.addEventListener("keyup", returnCheck);

//functions

reset();
const removeElements = (elms) => [...elms].forEach(el => el.remove());

function returnCheck(event){
  if (event.keyCode === 13) {
    submit();
  }
}
function setCoefficient() {
  firstKey = localStorage.key(0);
    firstWeight = JSON.parse(localStorage.getItem(firstKey)).weight/2;
    console.log('FIRST WEIGHT: ' + firstWeight);
    // lowerLim = firstWeight - ((firstWeight/3)*2);
    // upperLim = firstWeight + ((firstWeight/3)*2);
    // counterDiff = upperLim-lowerLim;
    coefficient = 175/firstWeight;
}

function submit(){
  lastKey = getTime();
  trackerObject.weight = ($counter.value * 2);
  
  //350px range so first = 50% i.e. 175px
  trackerObject.date = formatAMPM();
  //var parsedVal = parseInt($counter.value);
  if ($counter.value < 1 || $counter.value > 170) {
    alert('Please enter a value (in kg) between 1 and 170');
    return;
  }
  if (isNaN($counter.value)) {
    alert('Entry must only include numbers');
    $counter.value = 75;
    return
  }
  weightArray.push($counter.value * 2);
  //lastKey = formatAMPM();
  localStorage.setItem(lastKey, JSON.stringify(trackerObject));
  if (localStorage.length === 1) {
    setCoefficient();
  }
  if ($counter.value > firstWeight * 2 || $counter.value < firstWeight / 2) {
    alert('You have gained or lost more than 2 times your original weight! You may want to clear previous data');
    localStorage.removeItem(lastKey);
    return;
  }
  // console.log(weightArray);
  // console.log('last key: ' + lastKey);
  console.log('got past addDiv');
  addDiv();
  
}

function increment(){
  $counter.value = parseInt($counter.value) + 1;
  //weightArray.push($counter.value);
console.log('INCREMENTINCREMENT');
}

function decrement(){
  $counter.value = parseInt($counter.value) - 1;
  //weightArray.push($counter.value);
//console.log(weightArray);
}

function clear(){
  this.weightArray = [];
  
  $counter.value = 75;
  dayCountEl.innerHTML = 0;
  var checkElExists = document.querySelectorAll(".graph__single-bar"); //ALL -->
  var arrFromcheckElExists = Array.from(checkElExists);
  console.log('arr from nodelist = ' + arrFromcheckElExists); //NODELIST
  if (arrFromcheckElExists) {
    console.log('got here');
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
  console.log('7. got to pluraliser');
  // console.log(plural);
  if (localStorage.length === 1) {
   plural.classList.add("plural");
  } else {
    plural.classList.remove("plural");
  }
}

function heightDelay(newDiv, weight) {
  setTimeout(function(){ newDiv.style.height = weight + "px"; }, 0);
  console.log('3. Height delay');
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

function insertDifference(diff) {
  console.log('passed in diff from func is: ' + diff); //refactor to combine
  if(diff > 0) {
    console.log('insert val i s: ' + diff);
    difference.innerHTML = '+' + diff;
  }
  if (diff < 0) {
    difference.innerHTML = diff;
  }
  if (diff === 0) { //else doesn't work here as treated in conjunction with prev if
    difference.innerHTML = '0';
  } 
  lastDiff = diff;
  console.log('LAST DIFF from calc func' + lastDiff);
}

function addDiv () {
  if (localStorage.length === 1) {
    firstKey = localStorage.key(0)
    console.log('in if statement ' + localStorage.getItem(firstKey));
  }
    console.log('got into addDiv');
    var key = lastKey;
    console.log('lastkey =' + key);
    var valAsObj = JSON.parse(localStorage.getItem(key));
    console.log('object parsed = ' + valAsObj);
    const weight = valAsObj.weight;
    const date = valAsObj.date;
    var newDiv = document.createElement('div');
    var newSpan = document.createElement('span');
    console.log(dayCountEl);
    newDiv.style.height = 0;
    newDiv.classList.add('graph__single-bar');
    newDiv.setAttribute("id", "span");// needed?
    newDiv.appendChild(newSpan);
    document.getElementById("chart-wrapper").appendChild(newDiv);
    // console.log('last element is' + weightArray[weightArray.length - 1]);
    heightDelay(newDiv, weight);
    newDiv.style.date = date; //needed?
    newSpan.innerHTML = '<strong>' + (weight/2) + 'kg' + '</strong>' + '<br>' + date  + '<button id="delete-btn">remove</button>';
    pluraliser();
    dayCountEl.innerHTML = localStorage.length;
    newSpan.setAttribute("id", key);
    // console.log(newDiv.style.date);
  //   newDiv.addEventListener('mouseover', function() {
  //     newSpan.classList.add('graph__single-bar--visible');
  //     // var spanner = document.getElementById('span');
      
  //     // console.log('Date: ' + newDiv.style.date + ' / Weight: ' + newDiv.style.height + newSpan);
  // });
  // newDiv.addEventListener('mouseleave', function() {
  //   newSpan.classList.remove('graph__single-bar--visible');
  // });
  var deleteBtn = document.getElementById(key);
  // deleteBtn.addEventListener('click', function() {
  //   // console.log('val: ' + val + 'key: ' + key); //this works - if it doesn't, it's the reset function
  //   remove(key);
  // });
  addEventListeners(newDiv, newSpan, deleteBtn, key);
  insertDifference(calcDifference());
  console.log("calcDiff = " + calcDifference());
}
//needs to check if largest against updating variable, if so then becomes var then calc new difference,
function reset() {
  // setTimeout(clear, 3000);
  for (let i=0; i<localStorage.length; i++) {
    // console.log('ran');
    if (i === 0) {
      firstKey = localStorage.key(i);
    }
    const key = localStorage.key(i);
    var valAsObj = JSON.parse(localStorage.getItem(key));
    console.log('object parsed = ' + valAsObj);
    const weight = valAsObj.weight;
    const date = valAsObj.date;
    // const val = localStorage.getItem(key);
    // console.log(val);
    // console.log('key: ' + key + ' and val: ' + val);
    var newDiv = document.createElement('div');
    var newSpan = document.createElement('span');
    newDiv.classList.add('graph__single-bar');
    newDiv.setAttribute("id", "span");//needed?
    newDiv.appendChild(newSpan);
    document.getElementById("chart-wrapper").appendChild(newDiv);
    // console.log('last element is' + weightArray[weightArray.length - 1]);
    // console.log('key: ' + key + ' and val: ' + val);
    newDiv.style.height = weight + "px";
    newDiv.style.date = date; //needed?
    newSpan.innerHTML = '<strong>' + (weight/2) + 'kg' + '</strong>' + '<br>' + date  + '<button id="delete-btn">remove</button>';
    newSpan.setAttribute("id", key);
    // console.log(newDiv.style.date);
    var deleteBtn = document.getElementById(key);
    addEventListeners(newDiv, newSpan, deleteBtn, key);
    console.log('current key is: ' + key);
    dayCountEl.innerHTML = localStorage.length;
    pluraliser();
  //   newDiv.addEventListener('mouseover', function() {
  //     newSpan.classList.add('graph__single-bar--visible');
  //     console.log(val);
  //     // var spanner = document.getElementById('span');
      
  //     // console.log('Date: ' + newDiv.style.date + ' / Weight: ' + newDiv.style.height + newSpan);
  // });
  // newDiv.addEventListener('mouseleave', function() {
  //   newSpan.classList.remove('graph__single-bar--visible');
  // });
  // var deleteBtn = document.getElementById('delete-btn')
  // deleteBtn.addEventListener('click', function() {
  //   console.log('clicked');
  //   remove();
  // });
  // console.log('key: ' + key + ' and val: ' + val);
  
}
setCoefficient();
insertDifference((JSON.parse(localStorage.getItem(localStorage.key(localStorage.length-1))).weight - JSON.parse(localStorage.getItem(firstKey)).weight)/2);
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
  

  // console.log("this is the addDiv: " + weightArray);
  // var newDiv = document.createElement('div');
  // newDiv.classList.add('graph__single-bar');
  // document.getElementById("chart-wrapper").appendChild(newDiv);
  // console.log('last element is' + weightArray[weightArray.length - 1]);
  // newDiv.style.height = (weightArray[weightArray.length - 1] + "px");
  // newDiv.addEventListener('mouseover', function() {
  //   console.log('bar hovered over' + weightArray[weightArray.length - 1]);
  // });
  
  //for each version of DOM element injection
  // weightArray.forEach(function(item) {
  //   console.log(item);
  //   var newDiv = document.createElement('div');
  //   newDiv.classList.add('graph__single-bar');
  //   document.getElementById("chart-wrapper").appendChild(newDiv);
  //   newDiv.style.height = (item + "px");
  //   console.log(newDiv.style.height);
  //   // console.log(newDiv);
  // });


  // //creating a bar via DOM element injection
  // console.log('into addDiv');
  // var newDiv = document.createElement('div');
  // newDiv.classList.add('graph__single-bar');
  // document.getElementById("chart-wrapper").appendChild(newDiv); 
  // newDiv.style.height = "200px";

//generator functions

function formatAMPM() {
// var d = new Date(),
//     // seconds = d.getSeconds().toString().length == 1 ? '0'+d.getSeconds() : d.getSeconds(),
//     // minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
//     // hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
//     // ampm = d.getHours() >= 12 ? 'pm' : 'am',
//     months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
//     days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
// return days[d.getDay()]+' '+d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear()+'';
var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
var today  = new Date();
return today.toLocaleDateString("en-US", options);
}

function getTime() {
  var d = new Date();
  return d.getTime();
}

function guidGenerator() {
  var S4 = function() {
     return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}
