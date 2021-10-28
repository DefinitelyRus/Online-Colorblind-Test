async function start() {
		
	await new Promise(resolve => setTimeout(resolve, 200));
	
	
	//Fade from black
	
	const cbType = [0,0,0,0,0,0,0]; //Storing into session storage makes it think it's a String not an array of Ints.
	sessionStorage.setItem("colorTypeArray", JSON.stringify(cbType));
	sessionStorage.setItem("onConfirm", false);
	sessionStorage.setItem("testIndex", 0);
	sessionStorage.setItem("currentColor", null);
	sessionStorage.setItem("currentImg", null);
	
	window.location.href = "Question.html";	//Temp
	
	
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

//window.location.replace("Questions.html");