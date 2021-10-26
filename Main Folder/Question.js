function newQuestion() {
	console.log("Starting question...")
	
	colorType = "random";
	if (sessionStorage.getItem("onConfirm")) {
		colorType = sessionStorage.getItem("confirmColor")
	}
	
	
	imgSrc = getRandomImage(colorType);
	
	
	//Applying changes
	sessionStorage.setItem("testIndex", sessionStorage.getItem("testIndex") + 1);
	document.getElementById("content-img").setAttribute("src", imgSrc);
	document.getElementById("");
	
	console.log("Ready!");
}

function getRandomImage(colorType = null) {
	
	/* 
	 * IMPORTANT:
	 *
	 * It'll be much more work to get all the contents of the assets folder automatically.
	 * So everytime a new file is added here, you also need to add its file name.
	 */
	const imgFileNames = ["3.png", "5.png", "6.png", "7.png", "8.png", "9.png", "74.png"];
	
	const colorTypes = [""]
	const path = "assets\\";
	var img = imgFileNames[Math.floor(Math.random()*imgFileNames.length)];
	var fullPath = path + img;
	return fullPath;
}

/*
 * This method is called upon pressing the SUBMIT button.
 * 
 * 
 */
function submitAns() {
	console.log("Receiving info...");
	
	testIndex = sessionStorage.getItem("testIndex");
	colorScores = sessionStorage.getItem("colorTypeArray");
	
	if (testIndex > 15) {
		confirmationTest(); //Supposed to have a color type parameter but is temporarily left out.
	}
}

