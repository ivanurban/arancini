// Get the modal


// https://stackoverflow.com/questions/50522916/javascript-on-click-event-for-multiple-buttons-with-same-class


function makeModalVisible(){

		
		let modal = document.querySelector(".modal");
	
		modal.style.display = "block";

}

function makeModalInvisible(){

		
		let modal = document.querySelector(".modal");
	
		modal.style.display = "none";

}

// Get the button that opens the modal
let btn = document.querySelector(".myBtn");


 	
// When the user clicks the button, open the modal 

btn.addEventListener("click", function(){

 			
 		makeModalVisible();
 		

 }, false);





// Get the button that opens the modal
let smallDevice = document.querySelector("#openMenuPhone");


 	
// When the user clicks the button, open the modal 

smallDevice.addEventListener("click", function(){

 			
 		makeModalVisible();
 		

 }, false);



let span = document.querySelector(".close");

// When the user clicks the button, open the modal 

span.addEventListener("click", function(){

 			
 		makeModalInvisible();
 		

 }, false);



let linkMenu = document.querySelector("#openMenu");


linkMenu.addEventListener("click", function(){

 			
 		makeModalVisible();
 		

 }, false);


// When the user clicks anywhere outside of the modal, close it

let modal = document.querySelector(".modal");
window.onclick = function(event) {


  if (event.target == modal) {
    // modal.style.display = "none";
    makeModalInvisible();
  }
}