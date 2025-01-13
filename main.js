function showHideHint() {
	let div = document.getElementById("hint");
	let link = document.getElementById("toggle");
	if (div.style.display === "none") {
		div.style.display = "block";
		link.innerText = "Dölj hint";
	} else {
		div.style.display = "none";
		link.innerText = "Visa hint";
	}
	return false;
}

function swapImage() {
	let img = document.getElementById("map_image");
	let re = /^(.*map_\d\d).*png/;
	let imgName = re.exec(img.src)[1];
	if (img.src.indexOf("hint") === -1) {
		img.src = imgName + "_hint.png";
	} else {
		img.src = imgName + ".png";
	}
}

function previousPage() {
	let url = window.location.href;
	let file = url.split('/').pop();
	let index = url.replace("bild", "").replace(".htm", "");
	console.log(index);
	if (index == "1") {
		index = "15";
	} else {
		index--;
	}
	window.location.href = "https://main.dgvp1v4kbnr15.amplifyapp.com/bild" + index + ".htm";
}

function nextPage() {
	let url = window.location.href;
	let file = url.split('/').pop();
	let index = url.replace("bild", "").replace(".htm", "");
	console.log(index);
	if (index == "15") {
		index = "11";
	} else {
		index++;
	}
	window.location.href = "https://main.dgvp1v4kbnr15.amplifyapp.com/bild" + index + ".htm";
}