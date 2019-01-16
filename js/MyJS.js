
function modalFoto() {
	var img = document.getElementById('MyFoto');
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");
	var modal = document.getElementById('myModal');

	modal.style.display = "block";
	modalImg.src = img.src;
	captionText.innerHTML = img.alt;

}

function closeModalFoto(){
	var modal = document.getElementById('myModal');
	modal.style.display = "none";
}

function openNav() {
	 document.getElementById("mySidenav").style.width = "250px";	 
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0px";
}

window.onscroll = function() {
	scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topBtn").style.opacity = "1";
  } else {
    document.getElementById("topBtn").style.opacity = "0";
  }
}

function autoScrollFunction(point) {
  document.body.scrollTop = point;
  document.documentElement.scrollTop = point;
}