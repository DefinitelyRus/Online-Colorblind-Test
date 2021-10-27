async function start() {
		
	await new Promise(resolve => setTimeout(resolve, 200));
	
	window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");	//Temp
	
	//Fade from black
	
	var cbType = [0,0,0,0,0,0,0];
	sessionStorage.setItem("colorTypeArray", cbType);
	sessionStorage.setItem("onConfirm", false);
	sessionStorage.setItem("testIndex", 0);
	sessionStorage.setItem("currentColor", null);
	
	
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