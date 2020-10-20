function handleBackPress(event) {
    event.preventDefault();
    event.stopPropagation();

    $('.modal').modal('hide');
    $('.modal-backdrop').remove();
}

var closedModalHashStateId = "#menu";
var openModalHashStateId = "#game";

/* Updating the hash state creates a new entry
 * in the web browser's history. The latest entry in the web browser's
 * history is "modal.html#modalClosed". */
window.location.hash = closedModalHashStateId;

var radios = document.getElementsByName('gameName');

var modal = document.getElementById("myModal");
modal.style.display = "none";

var resumeBtn = document.getElementById("resButton");
var btn = document.getElementById("playButton");

resumeBtn.onclick =function(){
	window.location.hash = openModalHashStateId;
	modal.style.display = "block";
}

// Get the modal
var optionsModal = document.getElementById("optionsModal");
// Get the button that opens the modal
var btnOptions = document.getElementById("btnOptions");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btnOptions.onclick = function() {
  optionsModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  optionsModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == optionsModal) {
    optionsModal.style.display = "none";
  }
}

btn.onclick = function() {
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
		switch(i+1){
			case 1:
				gameName='Modern Hnefatafl';
			break;
			case 2:
				gameName='Classic Hnefatafl';
			break;
			case 3:
				gameName='Tablut';
			break;
			case 4:
				gameName='Brandubh';
			break;
			case 5:
				gameName='Ard Ri';
			break;
			case 6:
				gameName='Tawlbwrdd';
			break;
			case 7:
				gameName='Alea Evangeli';
			break;
			case 8:
				gameName='Custom';
			break;
		}

		break;
		}
	}
	window.location.hash = openModalHashStateId;
	onModalOpen();
	modal.style.display = "block";
}

document.addEventListener("keydown", ({key}) => {
    if (key === "Escape"&&window.location.hash == openModalHashStateId){
        modal.style.display = "none";
        resButton.style.display = "block";
        window.location.hash = closedModalHashStateId;
    }
})


