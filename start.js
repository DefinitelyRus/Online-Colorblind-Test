function start() {
	//REMOVE
	//document.getElementById("Title").innerHTML = "Hello there";
	//document.getElementById("Button").style.backgroundColor = "black";
	
	//window.location.href = "Questions.html"	//Temp
	//window.location.replace("Questions.html");
	
	var cbType = [0,0,0,0,0,0,0];
	sessionStorage.setItem("cbTypeArray", cbType);
	
	
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