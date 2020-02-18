let goBackBtn=document.querySelector(".go_back");
console.log(goBackBtn);

goBack();

function goBack(){
	goBackBtn.addEventListener("click",function(){
		window.history.back();
		console.log("yeah");
	})
}