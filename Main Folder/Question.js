function newQuestion() {
	console.log("Starting question...")
	
	var index = sessionStorage.getItem("testIndex");
	var colorType;
	if (index > 12) {
		colorType = sessionStorage.getItem("confirmColor");
	} else {
		console.log("hey")
		if (index < 4) colorType = "deut";
		else if (index < 8) colorType = "prot";
		else if (index < 12) colorType = "trit";
		else colorType = "mono";
	}
	
	//Getting random image
	var imgSrc = getRandomImage(colorType) + ".png";
	console.log(imgSrc);
	
	//Applying changes
	sessionStorage.setItem("testIndex", sessionStorage.getItem("testIndex") + 1);
	document.getElementById("content-img").setAttribute("src", imgSrc);
	
	console.log("Ready!");
}

//FIXME [IMPORTANT] --------------------------------------------------------------------
function getRandomImage(colorType = "none") {
	
	/* 
	 * IMPORTANT:
	 *
	 * It'll be much more work to get all the contents of the assets folder automatically.
	 * So everytime a new file is added here, you also need to add its file name.
	 */
	const imgFileNames = ["Deuteranomaly_45", "Deuteranomaly_6", "Deuteranopia_3","Deuteranopia_7", "Deuteranopia_8",
	"Deuteranopia_9", "Deuteranopia_42", "Deuteranopia_74", "Protanomaly_6", "Protanomaly_12", "Protanomaly_97",
	"Protanopia_2", "Protanopia_29", "Protanopia_42", "Tritanomaly_5"]; //TODO: Update this list!
	var img;
	
	//Deuteranomaly / Deuteranopia
	if (colorType.startsWith("deut")) {
		var toggle = false;
		while (toggle) {
			//Not the most efficient way of doing this, but it works.
			img = imgFileNames[Math.floor(Math.random()*imgFileNames.length)];
			if (img.startsWith("Deut")) {break;}
		}
	}
	
	//Protanomaly / Protanopia
	else if (colorType.startsWith("prot")) {
		var toggle = false;
		while (toggle) {
			img = imgFileNames[Math.floor(Math.random()*imgFileNames.length)];
			if (img.startsWith("Prot")) {break;}
		}
	}
	
	//Tritanomaly / Tritanopia
	else if (colorType.startsWith("trit")) {
		var toggle = false;
		while (toggle) {
			img = imgFileNames[Math.floor(Math.random()*imgFileNames.length)];
			if (img.startsWith("Trit")) {break;}
		}
	}
	
	//Monochromacy
	else if (colorType.startsWith("mono")) {
		img = imgFileNames[Math.floor(Math.random()*imgFileNames.length)];
	}
	else {
		alert("Unable to load resources.");
		return;
	}
	
	console.log(colorType);
	console.log(img);
	const path = "assets\\";
	var fullPath = path + img;
	return fullPath;
}

function submitAns() {
	/*
	 * This method is called upon pressing the SUBMIT button.
	 * 
	 * GUIDE
	 *
	 * Deuteranomaly	- Bias towards Red
	 * Protanomaly		- Bias towards Green
	 * Deuteranopia		- Red is not visible
	 * Protanopia		- Green is not visible
	 * Tritanomaly		- Blue & Green and/or Yellow & Red are difficult to differentiate.
	 * Tritanopia		- Blue & Green, Purple & Red, and Yellow & Pink are indistinguishable.
	 * Monochromacy		- Only 1 color is visible (black -> 1 color) (Not explicitly black and white)
	 */
	console.log("Receiving info...");
	
	var testIndex = sessionStorage.getItem("testIndex");
	var scoreList = sessionStorage.getItem("colorTypeArray");
	
	
	//Checks if the questionnaire is at the last page.
	if (testIndex == 12) {
		var highestScore = 0;
		var highestColorIndex;
		var totalScore;
		
		//Getting total score
		for (index; index < 7; index++) {
			var score = scoreList[index];
			if (score >= highestScore) {
				highestScore = score;
				highestColorIndex = index;
			}
			totalScore += score;
		}
		
		//Skips to finish if total score is less than 2.
		if (totalScore < 2) {finishTest("none");}
		else {
			//Testing for different types of color blindness.
			var colorType;
			if (totalScore > 5) {colorType = "mono";}				//Monochromacy
			else if (highestColorIndex == 0) {colorType = "deutly";}//Deuteranomaly
			else if (highestColorIndex == 1) {colorType = "protly";}//Protanomaly
			else if (highestColorIndex == 2) {colorType = "deutia";}//Deuteranopia
			else if (highestColorIndex == 3) {colorType = "protia";}//Protanopia
			else if (highestColorIndex == 4) {colorType = "tritly";}//Tritanomaly
			else if (highestColorIndex == 5) {colorType = "tritia";}//Tritanopia
			
			sessionStorage.setItem("confirmColor", colorType);
			window.location.replace("Question.html");
		}
	} else {window.location.replace("Question.html");}
}

function finishTest(colorType = "none") {
	sessionStorage.setItem("finalColor", colorType);
	window.location.replace("Done.html");
}
