const numberOfImages = "15";
const showFooter = false;

function previousPage() {
	let url = window.location.href;
	let file = url.split('/').pop();
	let index = file.replace("bild", "").replace(".htm", "");
	if (index === "1") {
		index = numberOfImages;
	} else {
		index--;
	}
	window.location.href = "https://main.dgvp1v4kbnr15.amplifyapp.com/bild" + index + ".htm";
}

function nextPage() {
	let url = window.location.href;
	let file = url.split('/').pop();
	let index = file.replace("bild", "").replace(".htm", "");
	if (index === numberOfImages) {
		index = "11";
	} else {
		index++;
	}
	window.location.href = "https://main.dgvp1v4kbnr15.amplifyapp.com/bild" + index + ".htm";
}

function swapImage() {
	let img = document.getElementById("image");
	let re = /^(.*bild\d+).*jpg/;
	let imgName = re.exec(img.src)[1];
	if (img.src.indexOf("orig") > 0) {
		img.src = imgName + "_small.jpg";
	} else if (img.src.indexOf("cropped") > 0) {
		img.src = imgName + "_orig.jpg";
	} else {
		img.src = imgName + "_cropped.jpg";
	}
}

function swapImageHardMode() {
	let img = document.getElementById("image");
	let re = /^(.*bild\d+).*jpg/;
	let imgName = re.exec(img.src)[1];
	if (img.src.indexOf("cropped") > 0) {
		img.src = imgName + "_small.jpg";
	} else {
		img.src = imgName + "_cropped.jpg";
	}
}

function showHideHistory() {
	let p = document.getElementById("history");
	p.style.display = (p.style.display === "none") ? "block" : "none";
}

window.onload = function() {
	if (showFooter) {
		document.getElementById("footer").style.display = "block";
	}
}