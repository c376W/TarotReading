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
	"url('./img/cards/Wands01.jpg')",
	"url('./img/cards/Wands02.jpg')",
	"url('./img/cards/Wands03.jpg')",
	"url('./img/cards/Wands04.jpg')",
	"url('./img/cards/Wands05.jpg')",
	"url('./img/cards/Wands06.jpg')",
	"url('./img/cards/Wands07.jpg')",
	"url('./img/cards/Wands08.jpg')",
	"url('./img/cards/Wands09.jpg')",
	"url('./img/cards/Wands10.jpg')",
	"url('./img/cards/Wands11.jpg')",
	"url('./img/cards/Wands12.jpg')",
	"url('./img/cards/Wands13.jpg')",
	"url('./img/cards/Wands14.jpg')",
	"url('./img/cards/Cups01.jpg')",
	"url('./img/cards/Cups02.jpg')",
	"url('./img/cards/Cups03.jpg')",
	"url('./img/cards/Cups04.jpg')",
	"url('./img/cards/Cups05.jpg')",
	"url('./img/cards/Cups06.jpg')",
	"url('./img/cards/Cups07.jpg')",
	"url('./img/cards/Cups08.jpg')",
	"url('./img/cards/Cups09.jpg')",
	"url('./img/cards/Cups10.jpg')",
	"url('./img/cards/Cups11.jpg')",
	"url('./img/cards/Cups12.jpg')",
	"url('./img/cards/Cups13.jpg')",
	"url('./img/cards/Cups14.jpg')",
	"url('./img/cards/Swords01.jpg')",
	"url('./img/cards/Swords02.jpg')",
	"url('./img/cards/Swords03.jpg')",
	"url('./img/cards/Swords04.jpg')",
	"url('./img/cards/Swords05.jpg')",
	"url('./img/cards/Swords06.jpg')",
	"url('./img/cards/Swords07.jpg')",
	"url('./img/cards/Swords08.jpg')",
	"url('./img/cards/Swords09.jpg')",
	"url('./img/cards/Swords10.jpg')",
	"url('./img/cards/Swords11.jpg')",
	"url('./img/cards/Swords12.jpg')",
	"url('./img/cards/Swords13.jpg')",
	"url('./img/cards/Swords14.jpg')",
	"url('./img/cards/Pents01.jpg')",
	"url('./img/cards/Pents02.jpg')",
	"url('./img/cards/Pents03.jpg')",
	"url('./img/cards/Pents04.jpg')",
	"url('./img/cards/Pents05.jpg')",
	"url('./img/cards/Pents06.jpg')",
	"url('./img/cards/Pents07.jpg')",
	"url('./img/cards/Pents08.jpg')",
	"url('./img/cards/Pents09.jpg')",
	"url('./img/cards/Pents10.jpg')",
	"url('./img/cards/Pents11.jpg')",
	"url('./img/cards/Pents12.jpg')",
	"url('./img/cards/Pents13.jpg')",
	"url('./img/cards/Pents14.jpg')",

];
let org=Array.from(image_lib);
let tracking=[0,0,0,0,0,0];
slideShowController(burger);
slideShowController(back);
clickCard(cards,tracking);


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

function clickCard(list,tracking){
	let index=0;
	for(let i=0;i<list.length;i++){
		list[i].addEventListener("click",function(){
			if(tracking[i]!==1){
				index=Math.floor(org.length*Math.random());
				this.style.backgroundImage=org[index];
				org=org.splice(0,index).concat(org.splice(1,org.length-1))
				tracking[i]=1;
				console.log(tracking);

			}
			
			
			
		})
	}
}