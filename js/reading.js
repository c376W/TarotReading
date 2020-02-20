let slideMenu=document.querySelector(".slide-out-menu");
let burger=document.querySelector(".burger");
let back=document.getElementById("go-back");
let cards=document.querySelectorAll(".card-face");
let dailyResetBtn=document.querySelector(".daily-reset-btn");
let card_captions=document.querySelectorAll(".card-caption");
let detailReadingBtn=document.getElementById("main-btn");
let card_front_faces=document.querySelectorAll(".card-face-front");
let card_back_faces=document.querySelectorAll(".card-face-back");
let cards_inner=document.querySelectorAll(".card-face-inner");


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

let card_names=[
	"Chariot",
	"Death",
	"Devil",
	"Emperor",
	"Empress",
	"Fool",
	"Hanged Man",
	"Hermit",
	"Hierophant",
	"High Priestess",
	"Judgement",
	"Justice",
	"Lovers",
	"Magician",
	"Moon",
	"Star",
	"Strength",
	"Sun",
	"Temperance",
	"Tower",
	"Wheel of Fortune",
	"World",
	"Ace of Wands",
	"Two of Wands",
	"Three of Wands",
	"Four of Wands",
	"Five of Wands",
	"Six of Wands",
	"Seven of Wands",
	"Eight of Wands",
	"Nine of Wands",
	"Ten of Wands",
	"Page of Wands",
	"Knight of Wands",
	"Queen of Wands",
	"King of Wands",
	"Ace of Cups",
	"Two of Cups",
	"Three of Cups",
	"Four of Cups",
	"Five of Cups",
	"Six of Cups",
	"Seven of Cups",
	"Eight of Cups",
	"Nine of Cups",
	"Ten of Cups",
	"Page of Cups",
	"Knight of Cups",
	"Queen of Cups",
	"King of Cups",
	"Ace of Swords",
	"Two of Swords",
	"Three of Swords",
	"Four of Swords",
	"Five of Swords",
	"Six of Swords",
	"Seven of Swords",
	"Eight of Swords",
	"Nine of Swords",
	"Ten of Swords",
	"Page of Swords",
	"Knight of Swords",
	"Queen of Swords",
	"King of Swords",
	"Ace of Pentacles",
	"Two of Pentacles",
	"Three of Pentacles",
	"Four of Pentacles",
	"Five of Pentacles",
	"Six of Pentacles",
	"Seven of Pentacles",
	"Eight of Pentacles",
	"Nine of Pentacles",
	"Ten of Pentacles",
	"Page of Pentacles",
	"Knight of Pentacles",
	"Queen of Pentacles",
	"King of Pentacles",

];
let org=Array.from(image_lib);
let card_name_sub=Array.from(card_names);
let tracking=[0,0,0,0,0,0];
let daily_chosen=[];

// setAllCardsBackFaces();
slideShowController(burger);
slideShowController(back);

clickCard(cards,tracking);
resetBtn(tracking);
// flip();


// Functions

function flip(){
	flipCard.addEventListener("click",function(){
		flipCard.classList.add("show");
		console.log(flipCard.classList);
	})
}


function resetBtn(){
	dailyResetBtn.addEventListener("click",function(){
		detailReadingBtn.disabled=true;
		
		setAllCardsBackFaces();
		tracking=[0,0,0,0,0,0];
		daily_chosen=[];
		clickCard(cards,tracking);
	})

}

function setAllCardsBackFaces(){
	for(let i=0;i<6;i++){
		cards_inner[i].classList.remove("show");
		card_front_faces[i].style.backgroundImage="url('./img/cards/back-face.jpg')";
		card_captions[i].style.color="#6e0075";
	}
}

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
			detailReadingBtn.disabled=false;
			if(tracking[i]!==1){
				index=Math.floor(org.length*Math.random());
				card_back_faces[i].style.backgroundImage=org[index];
				cards_inner[i].classList.add("show");
				daily_chosen.push(card_name_sub[index]);
				card_captions[i].innerHTML=daily_chosen[daily_chosen.length-1];
				card_captions[i].style.color="#fff";
				org=org.splice(0,index).concat(org.splice(1,org.length-1));
				card_name_sub=card_name_sub.splice(0,index).concat(card_name_sub.splice(1,card_name_sub.length-1));
				tracking[i]=1;

			}
		})
	}
}