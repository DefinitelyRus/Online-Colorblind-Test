async function finish() {
	await new Promise(resolve => setTimeout(resolve, 200));
	window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
	
	//Fade from black
	
	
	
	/* This counts from 0 to 6 when used on cbType[x].
	 *
	 * Deuteranomaly	- Bias towards Red
	 * Protanomaly		- Bias towards Green
	 * Deuteranopia		- Red is not visible
	 * Protanopia		- Green is not visible
	 * Tritanomaly		- Blue & Green and/or Yellow & Red are difficult to differentiate.
	 * Tritanopia		- Blue & Green, Purple & Red, and Yellow & Pink are indistinguishable.
	 * Monochromacy		- Only 1 color is visible (black -> 1 color) (Not explicitly black and white)
	 */
}

async function onLoad() {
	var color = sessionStorage.getItem("finalColor");
	console.log(color);
	text = getRandomText(color);
	console.log(text);
	document.getElementById("content-body-text").innerHTML = text;
}

function getRandomText(color = "lorem") {
	const longVerList = ["Deuteranomaly", "Protanomaly", "Deuteranopia", "Protanopia", "Tritanomaly", "Tritanopia", "Monochromacy"];
	
	if (color == "none") {
		const dialogues = ["UR NOT COLOR BLIND", "You are not color blind, now click this button to continue.",
		"You’re not yet color blind", "You really aren’t color blind... or are you?", "There’s nothing wrong with your eyes. ;)"];
		return dialogues[Math.floor(Math.random() * (dialogues.length))];
	}
	
	else if (color == "lorem") {
		return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsam nulla quia, " +
		"incidunt molestias quasi, doloribus officiis tenetur possimus reiciendisodit " +
		"ducimus assumenda, asperiores id culpa error sed magnam ullam?";
	}
	
	else {
		var longVer;
		switch (color) {
			case "deutly":
				longVer = longVerList[0];
				break;
			case "protly":
				longVer = longVerList[1];
				break;
			case "deutia":
				longVer = longVerList[2];
				break;
			case "protia":
				longVer = longVerList[3];
				break;
			case "tritly":
				longVer = longVerList[4];
				break;
			case "tritia":
				longVer = longVerList[5];
				break;
			case "mono":
				longVer = longVerList[6];
				break;
		}
		const dialogues = ["UR COLORBLIND ("+longVer.toUpperCase()+")", "You are color blind with "+longVer,
		"Your are now color blind with "+longVer+".", "You now know that you really are color blind with "+longVer+".",
		"There’s something wrong with your third eye. (It's "+longVer+")"];
		result = dialogues[Math.floor(Math.random() * (dialogues.length))];
		console.log(result);
		return result;
	}
}