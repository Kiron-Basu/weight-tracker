!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){o(1);alert("testing is it PIG?")},function(e,t){console.log("hello");let o={weight:String,date:String},n=[];var r,l,a,i,c=document.querySelector(".increment-btn"),s=document.querySelector(".decrement-btn"),u=document.querySelector(".weight-input"),g=document.querySelector(".clear-btn"),d=document.querySelector(".submit-btn"),f=document.getElementById("day-count"),m=document.querySelector(".plural"),v=document.querySelector(".difference");c.addEventListener("click",function(){u.value=parseInt(u.value)+1,console.log("INCREMENTINCREMENT")}),c.addEventListener("keyup",y),s.addEventListener("click",function(){u.value=parseInt(u.value)-1}),s.addEventListener("keyup",y),g.addEventListener("click",function(){this.weightArray=[],u.value=75,f.innerHTML=0;var e=document.querySelectorAll(".graph__single-bar"),t=Array.from(e);console.log("arr from nodelist = "+t),t&&(console.log("got here"),p(t),localStorage.clear(),L());v.classList.remove("difference--negative")||v.classList.remove("difference--positive"),v.innerHTML="",console.log(n)}),d.addEventListener("click",h),u.addEventListener("keyup",y),function(){for(let l=0;l<localStorage.length;l++){0===l&&(r=localStorage.key(l));const a=localStorage.key(l);var e=JSON.parse(localStorage.getItem(a));console.log("object parsed = "+e);const i=e.weight,c=e.date;var t=document.createElement("div"),o=document.createElement("span");t.classList.add("graph__single-bar"),t.setAttribute("id","span"),t.appendChild(o),document.getElementById("chart-wrapper").appendChild(t),t.style.height=i+"px",t.style.date=c,o.innerHTML="<strong>"+i/2+"kg</strong><br>"+c+'<button id="delete-btn">remove</button>',o.setAttribute("id",a);var n=document.getElementById(a);w(t,o,n,a),console.log("current key is: "+a),f.innerHTML=localStorage.length,L()}S(),k((JSON.parse(localStorage.getItem(localStorage.key(localStorage.length-1))).weight-JSON.parse(localStorage.getItem(r)).weight)/2)}();const p=e=>[...e].forEach(e=>e.remove());function y(e){13===e.keyCode&&h()}function S(){r=localStorage.key(0),i=JSON.parse(localStorage.getItem(r)).weight/2,console.log("FIRST WEIGHT: "+i),175/i}function h(){if(l=(new Date).getTime(),o.weight=2*u.value,o.date=(new Date).toLocaleDateString("en-US",{weekday:"short",year:"numeric",month:"short",day:"numeric"}),u.value<1||u.value>170)alert("Please enter a value (in kg) between 1 and 170");else{if(isNaN(u.value))return alert("Entry must only include numbers"),void(u.value=75);if(n.push(2*u.value),localStorage.setItem(l,JSON.stringify(o)),1===localStorage.length&&S(),u.value>2*i||u.value<i/2)return alert("You have gained or lost more than 2 times your original weight! You may want to clear previous data"),void localStorage.removeItem(l);console.log("got past addDiv"),function(){1===localStorage.length&&(r=localStorage.key(0),console.log("in if statement "+localStorage.getItem(r)));console.log("got into addDiv");var e=l;console.log("lastkey ="+e);var t=JSON.parse(localStorage.getItem(e));console.log("object parsed = "+t);const o=t.weight,n=t.date;var a=document.createElement("div"),i=document.createElement("span");console.log(f),a.style.height=0,a.classList.add("graph__single-bar"),a.setAttribute("id","span"),a.appendChild(i),document.getElementById("chart-wrapper").appendChild(a),E(a,o),a.style.date=n,i.innerHTML="<strong>"+o/2+"kg</strong><br>"+n+'<button id="delete-btn">remove</button>',L(),f.innerHTML=localStorage.length,i.setAttribute("id",e);var c=document.getElementById(e);w(a,i,c,e),k(I()),console.log("calcDiff = "+I())}()}}function b(e){console.log("2. remove button clicked and value received was: "+e),localStorage.removeItem(e);var t=document.getElementById(e);E(t.parentElement,0),function(e){setTimeout(function(){e.parentElement.remove()},450),l=localStorage.key(localStorage.length-1)}(t),f.innerHTML=localStorage.length,S(),k(I()),L()}function L(){console.log("7. got to pluraliser"),1===localStorage.length?m.classList.add("plural"):m.classList.remove("plural")}function E(e,t){setTimeout(function(){e.style.height=t+"px"},0),console.log("3. Height delay")}function I(){if(0!==localStorage.length){console.log("4. got to calcDifference");var e=JSON.parse(localStorage.getItem(l)).weight/2;console.log("5. last = "+e);var t=JSON.parse(localStorage.getItem(r)).weight/2;console.log("6. first = "+t);var o=e-t;return o>0&&(v.classList.add("difference--positive"),v.classList.remove("difference--negative")),o<0&&(v.classList.add("difference--negative"),v.classList.remove("difference--positive")),0===o&&(v.classList.remove("difference--negative")||v.classList.remove("difference--positive")),Math.round(10*o)/10}}function k(e){console.log("passed in diff from func is: "+e),e>0&&(console.log("insert val i s: "+e),v.innerHTML="+"+e),e<0&&(v.innerHTML=e),0===e&&(v.innerHTML="0"),a=e,console.log("LAST DIFF from calc func"+a)}function w(e,t,o,n){e.addEventListener("mouseover",function(){t.classList.add("graph__single-bar--visible")}),e.addEventListener("mouseleave",function(){t.classList.remove("graph__single-bar--visible")}),o.addEventListener("click",function(){console.log("1. clicked and key was: "+n),b(n)})}}]);