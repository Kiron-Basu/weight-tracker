console.log('hello');

//declarations
let weightArray = [];
var $incrementBtn = document.querySelector('.increment-btn');
var $decrementBtn = document.querySelector('.decrement-btn');
var $counter = document.querySelector('.weight-input');
var $clear = document.querySelector('.clear-btn');
var $submit = document.querySelector('.submit-btn');

var lastKey;

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

function submit(){
  weightArray.push($counter.value/3 * 12);
  lastKey = formatAMPM();
  localStorage.setItem(formatAMPM(), weightArray[weightArray.length -1]);
  // console.log(weightArray);
  // console.log('last key: ' + lastKey);
  addDiv();
}

function increment(){
  $counter.value = parseInt($counter.value) + 1;
  //weightArray.push($counter.value);
//console.log(weightArray);
}

function decrement(){
  $counter.value = parseInt($counter.value) - 1;
  //weightArray.push($counter.value);
//console.log(weightArray);
}

function clear(){
  this.weightArray = [];
  
  $counter.value = 0;
  
  var checkElExists = document.querySelectorAll(".graph__single-bar"); //ALL -->
  var arrFromcheckElExists = Array.from(checkElExists);
  console.log('arr from nodelist = ' + arrFromcheckElExists); //NODELIST
  if (arrFromcheckElExists) {
    console.log('got here');
    removeElements(arrFromcheckElExists);
    localStorage.clear();
  }
 
  console.log(weightArray);
}
function remove(key){
  console.log('remove button clicked and value received was: ' + key);
  localStorage.removeItem(key);
  document.getElementById(key).parentElement.remove();
}

function addDiv () {
    var key = lastKey
    const val = localStorage.getItem(key);
    var newDiv = document.createElement('div');
    var newSpan = document.createElement('span');
    newDiv.classList.add('graph__single-bar');
    newDiv.setAttribute("id", "span");// needed?
    newDiv.appendChild(newSpan);
    document.getElementById("chart-wrapper").appendChild(newDiv);
    // console.log('last element is' + weightArray[weightArray.length - 1]);
    newDiv.style.height = val + "px";
    newDiv.style.date = key; //needed?
    newSpan.innerHTML = key + ' ' + val + '<button>remove</button>';
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
}

function reset() {
  // setTimeout(clear, 3000);
  for (let i=0; i<localStorage.length; i++) {
    // console.log('ran');
    const key = localStorage.key(i);
    const val = localStorage.getItem(key);
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
    newDiv.style.height = val + "px";
    newDiv.style.date = key; //needed?
    newSpan.innerHTML = key + ' ' + val + '<button id="delete-btn">remove</button>';
    newSpan.setAttribute("id", key);
    // console.log(newDiv.style.date);
    var deleteBtn = document.getElementById(key);
    addEventListeners(newDiv, newSpan, deleteBtn, key);
    console.log('current key is: ' + key);
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
}

function addEventListeners(elementToAddTo, spanToAddClassTo, deleteBtn, key) { //need to rename parameters
  elementToAddTo.addEventListener('mouseover', function() {
    spanToAddClassTo.classList.add('graph__single-bar--visible');
  });
  elementToAddTo.addEventListener('mouseleave', function() {
    spanToAddClassTo.classList.remove('graph__single-bar--visible');
  });
  deleteBtn.addEventListener('click', function() {
    console.log('clicked and key was: ' + key);
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



function formatAMPM() {
var d = new Date(),
    seconds = d.getSeconds().toString().length == 1 ? '0'+d.getSeconds() : d.getSeconds(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'pm' : 'am',
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+':'+seconds+ampm;
}
