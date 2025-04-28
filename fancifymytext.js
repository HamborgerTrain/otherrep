//a page where the user can type text into a box, and by clicking on UI controls, the text will get styling.

//Function to increase fontsize when biggerButton is clicked
function enlagre() {
    document.getElementById("textInput").style.fontSize = "24pt";
}
//Function to uppercase and add moo when cowButton is clicked
function cow(){
    var textarea = document.getElementById("textInput");

	//Make the text uppercase
	var text = textarea.value.toUpperCase();

	//Split text into sentences, split on .
	var sentences = text.split(".");

	//adds a suffix of "-Moo" to the last word of each sentence but not empty ones (..)
	for (var i = 0; i < sentences.length; i++) {
		sentences[i] = sentences[i].trim(); // remove extra spaces (' ex ') => ('ex')
		if (sentences[i].length > 0) {
			sentences[i] = sentences[i] + "-Moo";
		}
	}

	// Join sentences back together with ". " and set the value
	textarea.value = sentences.join(". ");
}

//Function to uppercase and add moo when cowButton is clicked
function changeStyle(){
    var textarea = document.getElementById("textInput");
        //sets the textarea text to be bold, blue and underlined
    if (document.getElementById("fancyR").checked) {
            alert("You chose FancyShmancy!");
            textarea.style.fontWeight = "bold";
            textarea.style.color = "blue";
            textarea.style.textDecoration = "underline";
            // sets the textarea back to orginal fontweight, color, and no underline 
    } else if (document.getElementById("boringR").checked){
            alert("You chose BoringBetty!");
            textarea.style.fontWeight = "normal";
            textarea.style.color = "black";
            textarea.style.textDecoration = "none";
        }

}
