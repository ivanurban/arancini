function toggleMenu(){



	document.querySelector(".dropDownMenu").classList.toggle("open");
	document.querySelector("#toggle").classList.toggle("closeBtn");

	if (document.getElementById("toggle").classList.contains('closeBtn')){

			hamVisibility("none");
	}
	else{


		hamVisibility("block");
	}





    console.log(document.getElementById("toggle").classList.contains('closeBtn'));

}


function hamVisibility(x){


	let hamburger = document.querySelector(".hamburger");
	hamburger.style.display = x;

}

function closeBtnVisibility(x){


	let closeBtn = document.querySelector(".closeBtn");
	closeBtn.style.display = x;

}



let hamMenu = document.querySelector("#toggle");

hamMenu.addEventListener("click", function(){

 			
 		toggleMenu();
 	


 }, false);


let dDMenu = document.querySelector(".dropDownMenu");

window.addEventListener("click", function(event) {



    if (!event.target.matches('.hamburger')) {
     
  	 dDMenu.classList.remove('open');
  	 hamMenu.classList.remove('closeBtn');
  	 hamVisibility("block");



    }
  
 }); 



 