function previousPage() {
	let url = window.location.href;
	let file = url.split('/').pop();
	console.log(file);
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
	console.log(file);
	let index = url.replace("bild", "").replace(".htm", "");
	console.log(index);
	if (index == "15") {
		index = "11";
	} else {
		index++;
	}
	window.location.href = "https://main.dgvp1v4kbnr15.amplifyapp.com/bild" + index + ".htm";
}