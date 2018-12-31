function addDiv() {
    console.log('into addDiv');
    var newDiv = document.createElement('div');
    newDiv.classList.add('graph__single-bar');
    newDiv.classList.add('graph__bar5');
    // add the newly created element and its content into the DOM 
    // var currentDiv = document.getElementById("div1"); 
    //document.body.insertBefore(newDiv, currentDiv);
    document.getElementById("chart-wrapper").appendChild(newDiv); 
    var currentDiv = document.getElementsByClassName('graph__bar5');
    currentDiv.style.height = "200px";
}