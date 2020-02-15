let slideMenu=document.querySelector(".slide-out-menu");
let burger=document.querySelector(".burger");
let back=document.getElementById("go-back");
let cards=document.querySelectorAll(".card-face");
console.log(cards[3].style);
console.log(cards[3].style.backgroundImage); 
let image_lib=[
	"url('./img/cards/Chariot.jpg')",
	"url('./img/cards/Death.jpg')",
	"url('./img/cards/Devil.jpg')",
	"url('./img/cards/Emperor.jpg')",
	"url('./img/cards/Empress.jpg')",
	"url('./img/cards/Fool.jpg')",
	"url('./img/cards/Hanged_Man.jpg')",
	"url('./img/cards/Hermit.jpg')",
	"url('./img/cards/Hierophant.jpg')",
	"url('./img/cards/High_Priestess.jpg')",
	"url('./img/cards/Judgement.jpg')",
	"url('./img/cards/Justice.jpg')",
	"url('./img/cards/Lovers.jpg')",
	"url('./img/cards/Magician.jpg')",
	"url('./img/cards/Moon.jpg')",
	"url('./img/cards/Star.jpg')",
	"url('./img/cards/Strength.jpg')",
	"url('./img/cards/Sun.jpg')",
	"url('./img/cards/Temperance.jpg')",
	"url('./img/cards/Tower.jpg')",
	"url('./img/cards/Wheel_of_Fortune.jpg')",
	"url('./img/cards/World.jpg')",
]

slideShowController(burger);
slideShowController(back);
clickCard(cards);

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

function clickCard(list){
	// let index=0;
	// for(let i=0;i<list.length;i++){
	// 	list[i].addEventListener("click",function(){
	// 		this.style.backgroundImage=image_lib[Math.floor(22*Math.random())];

	// 		console.log(this.style.backgroundImage);
			
	// 	})
	// }
	// let index=0;
	for(let i=0;i<list.length;i++){
		list[i].addEventListener("click",function(){
			this.style.backgroundImage=image_lib[Math.floor(22*Math.random())];
			console.log(this.style.backgroundImage);
			
		})
	}
}