function newQuestion() {
	console.log("hello")
	imgSrc = getRandomImage();
	
	sessionStorage.setItem("current ", "");
	
	//Applying changes
	document.getElementById("content-img").setAttribute("src", imgSrc)
	
	console.log("Ready!");
}

function getRandomImage() {
	
	/* 
	 * IMPORTANT:
	 *
	 * It'll be much more work to get all the contents of the assets folder automatically.
	 * So everytime a new file is added here, you also need to add its file name.
	 */
	const imgFileNames = ["3.png", "5.png", "6.png", "7.png", "8.png", "9.png", "74.png"];
	const path = "assets\\";
	var img = imgFileNames[Math.floor(Math.random()*imgFileNames.length)];
	var fullPath = path + img;
	return fullPath;
}