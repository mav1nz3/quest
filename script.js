let location1 = document.querySelector(".Location1")
let tr = document.querySelectorAll(".true")
let fal = document.querySelectorAll(".false")
let main = document.querySelector(".main")

let school = document.querySelector(".school")
let body = document.querySelector("body")
let main_player = document.querySelector(".main_player");
let loc1_teacher = document.querySelector(".loc1_teacher")
let loc1_talk = document.querySelector(".loc1_talk")
let test = document.querySelector(".test")
let stol = document.querySelector(".stol")
let stols = document.querySelector(".stols")
let doska = document.querySelector(".doska")
let player = document.querySelector(".loc1_player")
let text = document.querySelector(".text")
let timeText = document.querySelector(".loc1_timeText")
let timeSize = document.querySelector(".loc2_timeSize")
let dopusk = document.querySelector(".dopusk")

let score = 0
let second = 120
let scoreView = document.querySelector(".scoreView")
let que5 = document.querySelector(".quest5")
let que8 = document.querySelector(".quest8")


let time = function(){
	second = second - 1
	timeText.innerHTML = second
}	

school.onclick = function(){
	main_player.style.top = "30%";
	main_player.style.left = "40%";
	

	function changeLocation1(){
		main.style.display = "none";
		location1.style.display = "block";
		body.style.background = "#23b049";
		
		let showBubble = function(){
			loc1_talk.style.display = "block"
			loc1_teacher.style.backgroundImage = "url(Loc1/female_back.png)"
			alert("Пора приступать к экзамену!")
			
			if(loc1_talk.style.display == "block"){
				loc1_teacher.style.display = "none";
				loc1_talk.style.display = "none";
				stol.style.display = "none";
				stols.style.display = "none";
				doska.style.display = "none";
				text.style.display = "none";
				player.style.left = "20%";
				test.style.display = "block"
				setInterval(time, 1000)
			}
			
		}
		for(let i = 0; i < 8; i = i + 1){
			tr[i].onclick = function(){
			tr[i].style.color = "green";
			score = score + 1
			scoreView.innerHTML = score
				if(score == 8){
				alert("Ты получил 5 и допуск к экзамену!")
				test.style.display = "none"
				location1.style.display = "none"
				main.style.display = "block"
				body.style.backgroundImage = "url(bg1.png)"
				body.style.backgroundSize = "cover"
				dopusk.style.display = "block"
				
				}
			}
		}
		for(let x = 0; x < 16; x = x + 1){
			fal[x].onclick = function(){
				fal[x].style.color = "red"
				fal[x].style.cursor = "notAllowed"
			}
		}

		setTimeout(showBubble, 1000)
	}
	setTimeout(changeLocation1, 1000);
}