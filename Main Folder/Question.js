function newQuestion() {
	console.log("Starting question.......")
	
	var index = parseInt(sessionStorage.getItem("testIndex"));
	var colorType;
	
	//Checks if the initial test is already finished and is on confirmation stage.
	if (index > 12) {colorType = sessionStorage.getItem("confirmColor");}
	else {
		if (index < 2) {
			colorType = "deutly";
			sessionStorage.setItem("currentColor", colorType);
		}
		else if (index < 4) {
			colorType = "protly";
			sessionStorage.setItem("currentColor", colorType);
		}
		else if (index < 6) {
			colorType = "deutia";
			sessionStorage.setItem("currentColor", colorType);
		}
		else if (index < 8) {
			colorType = "protia";
			sessionStorage.setItem("currentColor", colorType);
		}
		else if (index < 10) {
			colorType = "tritly";
			sessionStorage.setItem("currentColor", colorType);
		}
		else if (index < 12) {
			colorType = "tritia";
			sessionStorage.setItem("currentColor", colorType);
		}
		else { //Should be unreachable.
			colorType = "mono";
			sessionStorage.setItem("currentColor", colorType);
		}
	}
	console.log("|Index:      " + index);
	console.log("|Color test: " + colorType);
	
	var total = 0;
	var array = JSON.parse(sessionStorage.getItem("colorTypeArray"));
	for (i = 0; i < array.length; i++) {total += parseInt(array[i]); console.log(array[i]);}
	console.log("|Score:      " + total);
	
	//Getting random image
	console.log("Getting image...........")
	var imgSrc = getRandomImage(colorType);
	sessionStorage.setItem("currentImg", JSON.stringify(imgSrc));
	
	//Applying changes
	console.log("Applying changes........")
	sessionStorage.setItem("testIndex", parseInt(sessionStorage.getItem("testIndex")) + 1);
	document.getElementById("content-img").setAttribute("src", imgSrc);
	
	console.log("Ready!");
}

function getRandomImage(colorType = "none") {
	
	/* 
	 * IMPORTANT:
	 *
	 * It'll be much more work to get all the contents of the assets folder automatically.
	 * So everytime a new file is added here, you also need to add its file name.
	 */
	const imgFileNames = ["Deuteranomaly_45", "Deuteranomaly_6", "Deuteranomaly_3", "Deuteranopia_29", "Deuteranopia_3", "Deuteranopia_42", "Deuteranopia_6",
	"Deuteranopia_7", "Deuteranopia_74", "Deuteranopia_8", "Deuteranopia_9", "Protanomaly_12", "Protanomaly_5", "Protanomaly_6", "Protanomaly_97",
	"Protanopia_2", "Protanopia_29", "Protanopia_42", "Protanopia_8", "Tritanomaly_5", "Tritanopia_6"]; //TODO: Update this list!
	var img;
	
	//For use in the initial 12 stage.
	//Deuteranomaly / Deuteranopia
	if (colorType.startsWith("deut")) {
		while (true) {
			//Not the most efficient way of doing this, but it works.
			img = imgFileNames[Math.floor(Math.random()*imgFileNames.length)];
			if (img.startsWith("Deut")) {break;}
		}
	}
	
	//Protanomaly / Protanopia
	else if (colorType.startsWith("prot")) {
		while (true) {
			img = imgFileNames[Math.floor(Math.random()*imgFileNames.length)];
			if (img.startsWith("Prot")) {break;}
		}
	}
	
	//Tritanomaly / Tritanopia
	else if (colorType.startsWith("trit")) {
		while (true) {
			img = imgFileNames[Math.floor(Math.random()*imgFileNames.length)];
			if (img.startsWith("Trit")) {break;}
		}
	}
	
	//Monochromacy
	else if (colorType.startsWith("mono")) {
		img = imgFileNames[Math.floor(Math.random()*imgFileNames.length)];
	}
	
	//For use in the confirmation stage.
	switch (colorType) {
		case "deutly":
			do {img = imgFileNames[Math.floor(Math.random()*imgFileNames.length)];
			} while (!img.startsWith("Deuteranomaly"))
			break;
		
		case "protly":
			do {img = imgFileNames[Math.floor(Math.random()*imgFileNames.length)];
			} while (!img.startsWith("Protanomaly"))
			break;
		
		case "deutia":
			do {img = imgFileNames[Math.floor(Math.random()*imgFileNames.length)];
			} while (!img.startsWith("Deuteranopia"))
			break;
		
		case "protia":
			do {img = imgFileNames[Math.floor(Math.random()*imgFileNames.length)];
			} while (!img.startsWith("Protanopia"))
			break;
		
		case "tritly":
			do {img = imgFileNames[Math.floor(Math.random()*imgFileNames.length)];
			} while (!img.startsWith("Tritanomaly"))
			break;
		
		case "tritia":
			do {img = imgFileNames[Math.floor(Math.random()*imgFileNames.length)];
			} while (!img.startsWith("Tritanopia"))
			break;
			
		case "mono":
			img = imgFileNames[Math.floor(Math.random()*imgFileNames.length)];
			break;
	}
	
	console.log("|colorType:  " + colorType);
	console.log("|img:        " + img);
	const path = "assets\\";
	var fullPath = path + img + ".png";
	return fullPath;
}

async function submitAns() {
	console.log("Receiving info..........");
	
	var isUsed = false;
	var testIndex = parseInt(sessionStorage.getItem("testIndex")) - 1;
	var scores = JSON.parse(sessionStorage.getItem("colorTypeArray"));
	var input = document.getElementsByClassName("answerbox")[0].value.toString();
	var imgNum = sessionStorage.getItem("currentImg").match(/[0-9]/g).toString().replace(",", "");
	
	//Checks if the questionnaire is at the last page or further.
	if (testIndex == 11) {
		console.log("Confirming results......")
		var highestScore = 0;
		var highestColorIndex;
		var totalScore = 0;
		
		//Getting total score
		for (index = 0; index < 8; index++) {
			var score = parseInt(scores[index]);
			if (score >= highestScore) {
				highestScore = score;
				highestColorIndex = index;
				console.log(score);
			}
			sessionStorage.setItem("colorTypeArray", JSON.stringify(scores));
		}
		
		totalScore = scores.reduce(getSum);
		
		var highColor = "none";
		switch (highestColorIndex) {
			case 0:
				if (totalScore == 0) highColor == "none";
				else highColor = "deutly";
				finishTest(highColor);
				break;
			case 1:
				highColor = "protly";
				finishTest(highColor);
				break;
			case 2:
				highColor = "deutia";
				finishTest(highColor);
				break;
			case 3:
				highColor = "protia";
				finishTest(highColor);
				break;
			case 4:
				highColor = "tritly";
				finishTest(highColor);
				break;
			case 5:
				highColor = "tritia";
				finishTest(highColor);
				break;
			default:
				if (totalScore == 0) highColor == "none";
				else highColor = "mono";
				await new Promise(resolve => setTimeout(resolve, 10000));
				finishTest(highColor);
				break;
		}
		
		//Does another 6 quesitons otherwise.
		//UNREACHABLE / UNUSED
		if (isUsed) {
			//Testing for different types of color blindness.
			var colorType;
			if (totalScore > 4) {colorType = "mono";}				//Monochromacy
			else if (highestColorIndex == 0) {colorType = "deutly";}//Deuteranomaly
			else if (highestColorIndex == 1) {colorType = "protly";}//Protanomaly
			else if (highestColorIndex == 2) {colorType = "deutia";}//Deuteranopia
			else if (highestColorIndex == 3) {colorType = "protia";}//Protanopia
			else if (highestColorIndex == 4) {colorType = "tritly";}//Tritanomaly
			else if (highestColorIndex == 5) {colorType = "tritia";}//Tritanopia
			
			//Starts another 6 questions.
			sessionStorage.setItem("confirmColor", colorType);
			sessionStorage.setItem("onConfirm", true);
			window.location.href = "Question.html";
			//window.location.replace("Question.html");
		}
		return;
	}
	
	//Used in the first 12 questions.
	else {
		//Adds a point if the answer is incorrect.
		console.log("Adding score............");
		if (input != imgNum) {
			switch (sessionStorage.getItem("currentColor")) {
				case "deutly":
					scores[0] += 1;
					break;
				
				case "protly":
					scores[1] += 1;
					break;
				
				case "deutia":
					scores[2] += 1;
					break;
				
				case "protia":
					scores[3] += 1;
					break;
				
				case "tritly":
					scores[4] += 1;
					break;
				
				case "tritia":
					scores[5] += 1;
					break;
				
				case "mono":
					scores[6] += 1;
					break;
			}
			sessionStorage.setItem("colorTypeArray", JSON.stringify(scores));
		}
		console.log("|Scores:     " + scores);
		await new Promise(resolve => setTimeout(resolve, 1000));
		window.location.replace("Question.html");
	}
}

function finishTest(colorType = "none") {
	sessionStorage.setItem("finalColor", colorType);
	window.location.replace("Done.html");
}

function getSum(total, num) {
	return total + num;
}