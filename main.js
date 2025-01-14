const numberOfImages = "15";

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