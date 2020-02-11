let slideMenu=document.querySelector(".slide-out-menu");
let burger=document.querySelector(".burger");
let back=document.getElementById("go-back");


slideShowController(burger);
slideShowController(back);

// Functions

function slideShowController(el){
	el.addEventListener("click",function(){
		if(slideMenu.classList[1]!=="slide-menu-show"){
			slideMenu.classList.add("slide-menu-show");
		}else{
			slideMenu.classList.remove("slide-menu-show");
		}
	})
}