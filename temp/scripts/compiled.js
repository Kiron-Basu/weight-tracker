!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);new class{constructor(){let e={weight:String,date:String},t=[];var n,o,r,a,l=document.querySelector(".increment-btn"),i=document.querySelector(".decrement-btn"),c=document.querySelector(".weight-input"),s=document.querySelector(".clear-btn"),u=document.querySelector(".submit-btn"),d=document.getElementById("day-count"),g=document.querySelector(".plural"),f=document.querySelector(".difference");function m(e){13===e.keyCode&&p()}l.addEventListener("click",function(){c.value=parseInt(c.value)+1}),l.addEventListener("keyup",m),i.addEventListener("click",function(){c.value=parseInt(c.value)-1}),i.addEventListener("keyup",m),s.addEventListener("click",function(){confirm("Are you sure you want to clear all data?")&&function(){c.value=0,d.innerHTML=0;var e=document.querySelectorAll(".graph__single-bar"),n=Array.from(e);console.log("arr from nodelist = "+n),n&&(v(n),localStorage.clear(),y()),f.classList.remove("difference--negative")||f.classList.remove("difference--positive"),f.innerHTML="",console.log(t)}()}),u.addEventListener("click",p),c.addEventListener("keyup",m),function(){if(0!==localStorage.length){for(let t=0;t<localStorage.length;t++){0===t&&(n=localStorage.key(t));const o=localStorage.key(t);var e=JSON.parse(localStorage.getItem(o));const r=e.weight,a=e.date;L(r,a,o),y()}k(),b(Math.round((JSON.parse(localStorage.getItem(localStorage.key(localStorage.length-1))).weight-JSON.parse(localStorage.getItem(n)).weight)/2*10)/10)}}();const v=e=>[...e].forEach(e=>e.remove());function p(){if(o=(new Date).getTime(),e.weight=2*c.value,e.date=(new Date).toLocaleDateString("en-US",{weekday:"short",year:"numeric",month:"short",day:"numeric"}),c.value<1||c.value>170)alert("Please enter a value (in kg) between 1 and 170");else if(isNaN(c.value))alert("Entry must only include numbers");else{if(t.push(2*c.value),localStorage.setItem(o,JSON.stringify(e)),1===localStorage.length&&k(),c.value>2*r||c.value<r/2)return alert("You have gained or lost more than 2 times your starting weight! You may want to clear previous data"),void localStorage.removeItem(o);!function(){1===localStorage.length&&(n=localStorage.key(0));var e=o,t=JSON.parse(localStorage.getItem(e));const r=t.weight,a=t.date;L(r,a,e),b(w())}()}}function S(e){console.log("2. remove button clicked and value received was: "+e),localStorage.removeItem(e);var t=document.getElementById(e);h(t.parentElement,0),function(e){setTimeout(function(){e.parentElement.remove()},450),o=localStorage.key(localStorage.length-1)}(t),d.innerHTML=localStorage.length,k(),b(w()),y()}function y(){console.log("7. got to pooraliser"),1===localStorage.length?g.classList.add("plural"):g.classList.remove("plural")}function h(e,t){setTimeout(function(){e.style.height=t/2*a+"px"},0),console.log("3. Height delay")}function b(e){console.log("passed in diff from func is: "+e),e>0&&(f.innerHTML="+"+e),e<0&&(f.innerHTML=e),0===e&&(f.innerHTML="0")}function L(e,t,n){var o=document.createElement("div"),r=document.createElement("span");o.classList.add("graph__single-bar"),o.setAttribute("id","span"),o.appendChild(r),document.getElementById("chart-wrapper").appendChild(o),h(o,e),r.innerHTML="<strong>"+e/2+"kg</strong><br>"+t+'<button id="delete-btn">remove</button>',y(),d.innerHTML=localStorage.length,r.setAttribute("id",n),function(e,t,n,o){e.addEventListener("mouseover",function(){t.classList.add("graph__single-bar--visible")}),e.addEventListener("mouseleave",function(){t.classList.remove("graph__single-bar--visible")}),n.addEventListener("click",function(){console.log("1. clicked and key was: "+o),S(o)})}(o,r,document.getElementById(n),n)}function w(){if(0!==localStorage.length){console.log("4. got to calcDifference");var e=JSON.parse(localStorage.getItem(o)).weight/2;console.log("5. last = "+e);var t=JSON.parse(localStorage.getItem(n)).weight/2;console.log("6. first = "+t);var r=e-t;return r>0&&(f.classList.add("difference--positive"),f.classList.remove("difference--negative")),r<0&&(f.classList.add("difference--negative"),f.classList.remove("difference--positive")),0===r&&(f.classList.remove("difference--negative")||f.classList.remove("difference--positive")),Math.round(10*r)/10}}function k(){n=localStorage.key(0),r=JSON.parse(localStorage.getItem(n)).weight/2,a=175/r}}}}]);