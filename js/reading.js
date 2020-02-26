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
let cards_meaning=document.querySelectorAll(".card-face-meaning");


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

let card_interp={
	"Chariot":"The Chariot is a card about overcoming conflicts and moving forward in a positive direction. One needs to keep going on and through sheer hard work and commitment he will be victorious.",
	"Death":"Unlikely that this card actually represents a physical death. Typically it implies an end, possibly of a relationship or interest, and therefore implies an increased sense of self-awareness.",
	"Devil":"It represents being seduced by the material world and physical pleasures. Also living in fear, domination and bondage, being caged by an overabundance of luxury, discretion should be used in personal and business matters.",
	"Emperor":"This card is suggestive of stability and security in life. You are on top of things and everything in under your control. It is your hard work, discipline and self control that have bought you this far. It means that you are in charge of your life now setting up your own rules and boundaries.",
	"Empress":"The Empress is traditionally associated with maternal influence, it is the card if you are hoping to start a family. She can represent the creation of life, romance, art, or new business.",
	"Fool":"The Fool represents new beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginner's luck, improvisation and believing in the universe.",
	"Hanged Man":"The Hanged Man is the card that suggests ultimate surrender, sacrifice, or being suspended in time.",
	"Hermit":"The Hermit suggests that you are in a phase of introspection where you are drawing your attention inwards and looking for answers within. You are in need of a period of inner reflection, away from the current demands of your position.",
	"Hierophant":"Hierophant stands for tradition and convention. It can represent marriage in an arranged setup. It can also mean a teacher or counsellor who will help in learning / education of the querent.",
	"High Priestess":"High Priestess is a card of mystery, stillness and passivity. This card suggests that it is time to retreat and reflect upon the situation and trust your inner instincts to guide you through it. Things around you are not what they appear to be right now.",
	"Judgement":"This card is referred to as a time of resurrection and awakening, a time when a period of our life comes to an absolute end making way for dynamic new beginnings.",
	"Justice":"The Justice card indicates that the fairest decision will be made. Justice is the sword that cuts through a situation, and will not be swayed by outer beauty when deciding what is fair and just.",
	"Lovers":"The Lovers represent relationships and choices. Its appearance in a spread indicates some decision about an existing relationship, a temptation of the heart, or a choice of potential partners. Often an aspect of the querent's life will have to be sacrificed; a bachelor(ette)'s lifestyle may be sacrificed and a relationship gained (or vice versa), or one potential partner may be chosen while another is turned down. Whatever the choice, it should not be made lightly, as the ramifications will be lasting.",
	"Magician":"When the Magician appears in a spread, it points to the talents, capabilities and resources at the querent's disposal to succeed. The message is to tap into one's full potential rather than holding back, especially when there is a need to transform something.",
	"Moon":"The Moon is a card of illusion and deception, and therefore often suggests a time when something is not as it appears to be. Perhaps a misunderstanding on your part, or a truth you cannot admit to yourself.",
	"Star":"When the Star card appears, you are likely to find yourself feeling inspired. It brings renewed hope and faith and a sense that you are truly blessed by the universe at this time.",
	"Strength":"Strength predicts the triumphant conclusion to a major life problem, situation or temptation through strength of character. It is a very happy card if you are fighting illness or recovering from injury.",
	"Sun":"The card portends good fortune, happiness, joy and harmony. It represents the universe coming together and agreeing with your path and aiding forward movement into something greater.",
	"Temperance":"This card indicates that you should learn to bring about balance, patience and moderation in your life. You should take the middle road, avoiding extremes and maintain a sense of calm.",
	"Tower":"The Tower is commonly interpreted as meaning danger, crisis, destruction, and liberation. It is associated with sudden unforseen change.",
	"Wheel of Fortune":"A common aspect to most interpretations of this card within a reading is to introduce an element of change in the querent's life, such change being in station, position or fortune: such as the rich becoming poor, or the poor becoming rich.",
	"World":"The World represents an ending to a cycle of life, a pause in life before the next big cycle beginning with the fool. It is an indicator of a major and inexorable change, of tectonic breadth.",
	"Ace of Wands":"Wands symbolize creativity, and the Ace of Wands is the boldest among the cards in the suit. It is not the kind of creativity that you learn from school or as a hobby...",
	"Two of Wands":"This card can signify overseas travel, sudden departures, emigration and deciding if you will stay or go. It can also indicate a lack of contentment with your life, restlessness, withdrawal and detachment. It can represent waiting, anticipation and wanderlust.",
	"Three of Wands":"In a general context, the Three of Wands represents freedom, adventure, travel, moving abroad and foreign lands. It can indicate hard work paying off, success and being happy with your choices or the outcome of your situation. ",
	"Four of Wands":"The Four of Wands represents happy families, celebrations, surprises, parties, weddings and events. It signifies coming home and reunions, feeling like you fit in and being made to feel welcome and supported. ",
	"Five of Wands":"The Five of Wands represents rows, arguments, conflict, fighting and disagreements. It signifies struggle, opposition, battles, aggression and temper. ",
	"Six of Wands":"The Six of Wands represents success, victory, winning, triumph, achievement and having the advantage. It also signifies praise, acclaim, awards, recognition, applause and goodwill. ",
	"Seven of Wands":"The Seven of Wands represents opposing, standing up for what you believe in, fighting your corner and holding your own. It signifies taking the high road, maintaining control and being strong willed.",
	"Eight of Wands":"The Eight of Wands represents hastiness, speed, rushing, progress, movement and action. It is a Minor Arcana card of sudden action, excitement, exciting times, travel, freedom, holidays and holiday romances.",
	"Nine of Wands":"The Nine of Wands tells you that you are half way through a battle. Recent events have left you drained of all energy and feeling like you can’t go on, but you are so close to getting what you want!",
	"Ten of Wands":"The Ten of Wands represents a situation that started off as a good idea but has now become a burden. It signifies problems, responsibilities, being overburdened, overloaded and stressed. ",
	"Page of Wands":"The Page of Wands represents good news that should be coming to you swiftly or shortly. This may take the form of letters, phone calls or word of mouth.",
	"Knight of Wands":"The Knight of Wands indicates that things are going better than you expected and any ventures you have taken on are likely to be more successful than you hoped.",
	"Queen of Wands":"The Queen of Wands indicates that you will be optimistic, outgoing and full of energy. You will be accomplishing many tasks and keeping a lot of balls in the air when she appears in your Tarot spread.",
	"King of Wands":"The King of Wands indicates that you will have the energy, experience and enthusiasm to accomplish what you set out to achieve at this time. You are taking control of your life. ",
	"Ace of Cups":"The Ace of Cups Tarot card in an upright position signifies new beginnings, usually in terms of love, empathy, compassion and/or happiness. ",
	"Two of Cups":"When the Two of Cups Tarot card appears things should be going well for you and life should be very harmonious.  The Two of Cups is a very positive card. ",
	"Three of Cups":"The Three of Cups Tarot card is the Minor Arcana card of reunion or celebration. It can signify someone from your past coming back in to your life. It can also signify parties, festivals, weddings, engagement parties, baby showers and other similar celebrations. ",
	"Four of Cups":"The Four of Cups Tarot Card can represent missed opportunities, remorse or regret. It can also signify becoming self-absorbed due to depression, negativity or apathy. ",
	"Five of Cups":"How many negative emotions can one card represent? Quite a few in the case of the Five of Cups! In a general context, the Five of Cups Tarot card can represent sadness, loss, loneliness and despair. When this card appears it indicates that you are focusing on the negative. This may be the result of some sort of trauma or unwelcome change you have suffered. ",
	"Six of Cups":"The Six of Cups Tarot card can represent nostalgia, childhood memories and focusing on the past. When this card appears in a Tarot spread you may be being influenced by past events, reminiscing about the past or thinking about someone from your past. ",
	"Seven of Cups":"The Seven of Cups Tarot card represents having lots of options to choose from or multiple possibilities open to you. It can be an indication that you have so many choices or so many things going on at once that you may be overwhelmed or unable to focus properly.",
	"Eight of Cups":"The Eight of Cups represents abandonment. It can signify walking away from people or situations in your life or abandoning your plans. It can indicate disappointment, escapism and turning your back on or leaving bad situation. ",
	"Nine of Cups":"The Nine of Cups Tarot card is a positive card which indicates your wishes will be coming true or your dreams will become a reality. If you have experienced hardship, sorrow or pain recently, this card tells you that the bad times are behind you now and a time of happiness, joyfulness and fulfilment is coming. ",
	"Ten of Cups":"The Ten of Cups Tarot card is a great card to have in your Tarot reading as it represents true happiness and emotional and spiritual fulfilment. It tells you that you will be living your happy ever after and can look forward to domestic bliss. ",
	"Page of Cups":"The Page of Cups is a bringer of messages. This can be in the form of happy news, important information, invitations to social events, gossip or the potential for romantic proposals. It can also represent your inner child so don’t take things too seriously when this card appears.",
	"Knight of Cups":" The Knight of Cups Tarot card can represent proposals, offers, good news and invitations. The news or offers he brings usually carry with them a lot of excitement. They are the kinds of offers or news we hope to receive. ",
	"Queen of Cups":"The Queen of Cups Tarot card can generally signify a woman or women in your life who will be supportive and caring towards you. ",
	"King of Cups":"The King of Cups Tarot card represents kindness, compassion and wisdom. This Minor Arcana card can indicate that you will be finding the balance between your mind and your heart. You will learn to control your emotions and find the wisdom to accept that which you cannot change.",
	"Ace of Swords":"The Ace of Swords represents new ideas, new beginnings, new projects, new plans and breakthroughs. It also indicates intellectual ability, mental clarity, clear thinking and the ability to concentrate. ",
	"Two of Swords":"The Two of Swords represents a stalemate, truce or being at a crossroads. It indicates that you are sitting on the fence or struggling to make/ avoiding a difficult, stressful or painful decision. It is the Minor Arcana of coming face to face with your fears.",
	"Three of Swords":"The Three of Swords represents unhappiness, heartache, sorrow and sadness. It is a Minor Arcana card of grief, loss, depression and tears and when it appears in your Tarot reading it generally indicates a period of difficulty or hardship, usually on an emotional level. ",
	"Four of Swords":"The Four of Swords represents fear, anxiety and stress. You will be feeling overwhelmed and mentally overloaded when it appears. This Minor Arcana tells you that the issues you are facing are actually not as bad as you believe them to be and there are solutions available.",
	"Five of Swords":"The Five of Swords is not always a good omen as it can represent defeat, change surrender and walking away. It is a Minor Arcana card of self-sabotaging or underhanded behaviour and deception and lack of communication. It can also represent serious conflict, stress and lack of communication. ",
	"Six of Swords":"The Six of Swords represents progress, moving into calmer waters, moving on or moving forward. It is a Minor Arcana card of overcoming hardship, healing, relief and stability so you can expect problems in your life to settle down and things to be much easier to deal with.",
	"Seven of Swords":"The Seven of Swords represents deception, lies, trickery, cheating and lack of conscience.  This card also signifies mental manipulation, tactics, scheming, cunning, enemies who masquerade as friends and spies in your camp. ",
	"Eight of Swords":"The Eight of Swords can represent feeling trapped, confined, restricted or backed into a corner or having your hands tied. It signifies fear, terror, anxiety and psychological issues. It is a Minor Arcana card of hopelessness, helplessness, powerlessness, slavery, persecution and being silenced or censored. ",
	"Nine of Swords":"The Nine of Swords is another of the fear and anxiety cards in the Suit of Swords. Similar to the other fear cards, this card is not an indication of negative events actually happening, just that your fear and anxiety levels are so high they are making you feel that things are worse than they are.",
	"Ten of Swords":"The Ten of Swords is not a good omen as it can represent backstabbing betrayal, badmouthing, bitching behind your back, bitterness and enemies. It is a Minor Arcana card of failure, ruin, collapse, severing ties, goodbyes and the final nail in the coffin of a relationship or situation.",
	"Page of Swords":"The Page of Swords represents delayed news, ideas, planning and inspiration. It can also signify being protective, guarded and vigilant. This Minor Arcana card may be telling you to be patient, to think before you speak and not to get drawn in unnecessary arguments or conflicts.",
	"Knight of Swords":"The Knight of Swords is a change card, it tells you that a big change is coming, one you have been awaiting for quite some time and you better be ready to roll with it when it does. It’s time to jump in and seize the moment!",
	"Queen of Swords":"The Queen of Swords can represent an older woman in your life who will step in when you are vulnerable and protect you or help you to overcome a problem. It represents being intelligent, sharp witted, witty, honest, truthful and candid.",
	"King of Swords":"The King of Swords represents structure, routine, self-discipline, power authority. It is a Minor Arcana card of being methodical, using your head, mind over matter and the head over the heart. This card signifies logic and reason, integrity, ethics and morals. ",
	"Ace of Pentacles":"The Ace of Pentacles represents new beginnings and prosperity. It is a very good card to get in a Tarot spread as it signifies starting something new which will be very positive for you.",
	"Two of Pentacles":"The Two of Pentacles can indicate that you are trying to find or maintain the balance between various areas of your life. This Minor Arcana card represents the ups and downs of life and indicates that you are resourceful, adaptable and flexible enough to get through them. ",
	"Three of Pentacles":"The Three of Pentacles is a positive card to get in a Tarot spread. It represents learning, studying and apprenticeship. It also signifies hard work, determination, dedication and commitment so whatever you are doing at the moment, you are likely to be giving it 100%.",
	"Four of Pentacles":"The Four of Pentacles Tarot card can indicate that you are holding on to people, possessions, situations or past issues. It can be an indication that there are deep seated issues affecting you that you need to process and let go of. ",
	"Five of Pentacles":"The Five of Pentacles is not a great card to get as it represents hardship, rejection or a negative change in circumstances. You may be feeling like the world is against you and nothing is going your way when it appears. It can signify bad luck, struggles or adversity. ",
	"Six of Pentacles":"The Six of Pentacles Tarot card represents gifts, kindness and generosity. Someone in your life may be very generous towards you with gifts or money or simply generous with their time, knowledge or wisdom. ",
	"Seven of Pentacles":"The Seven of Pentacles indicates that you have been working very hard and it will soon start to pay off. This Minor Arcana card means that things are coming to fruition so you can expect results when it appears in your Tarot Spread.",
	"Eight of Pentacles":"The Eight of Pentacles Tarot card indicates a time of hard work, commitment, diligence and dedication. The effort you put in will not be in vain as your hard work will pay off and lead to results, rewards or the accomplishment of your goals. ",
	"Nine of Pentacles":"The Nine of Pentacles is a great omen to get as it represents success, independence, confidence, freedom, security and stability. It is a Minor Arcana card of abundance, prosperity and wealth gained through hard work, self-discipline and control and self-reliance.",
	"Ten of Pentacles":"The Ten of Pentacles represents solid foundations, security and happiness in all areas of your life. Like all Pentacle cards it is usually connected to financial or material issues so you can expect especially good things in those areas of your life when it appears.",
	"Page of Pentacles":"The Page of Pentacles is the bearer of good news in earthly matters such as money, business, education, career, property or health. It represents making a solid start or laying the foundation for future success. ",
	"Knight of Pentacles":"The Knight of Pentacles represents common sense, responsibility, practicality, working hard for what you want and finishing what you start. This Minor Arcana card is a wish card that signifies achieving your wishes or dreams through perseverance and determination.",
	"Queen of Pentacles":"The Queen of Pentacles represents high social status, prosperity, wealth, luxury, success and financial independence. This Minor Arcana card tells you to approach issues in a sensible, practical, no-nonsense manner and you will be successful. ",
	"King of Pentacles":"The King of Pentacles represents trying to better oneself, hard work paying off, reaching goals, seeing things through to the end and being proud of your achievements. This Minor Arcana card can represent reaching high social status and being enterprising, resourceful and principled.",
};
	
	


let org=Array.from(image_lib);
let card_name_sub=Array.from(card_names);
let tracking=[0,0,0,0,0,0];
let daily_chosen=[];

// setAllCardsBackFaces();
slideShowController(burger);
slideShowController(back);

clickCard(cards,tracking);
resetBtn(tracking);
clickCaption();
// flip();


// Functions

function clickCaption(){
	for(let i=0;i<card_captions.length;i++){
		card_captions[i].addEventListener("click",function(){
			if(tracking[i]===1){
				cards_meaning[i].style.opacity="0.9";
				cards_meaning[i].innerHTML=card_interp[String(card_captions[i].innerHTML)];
				

			}
			
		})

	}
	
}

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
		cards_meaning[i].style.opacity="0";
		cards_meaning[i].innerHTML="";
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