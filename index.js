const make_link = () => {
	var rand = urls[Math.floor(Math.random() * urls.length)];
	document.getElementById("message").classList.add("invisible");
	var button = document.getElementById("thebutton");
	button.href = rand;
	button.on_click = "";
	button.innerHTML = "DOWNLOAD";
}

const on_click = () => {
	document.getElementById("message").classList.remove("invisible");
	document.getElementById("thebutton").innerText = "...";
	let timeout = Math.round(3000 + (Math.random() * 2000));
	setTimeout(make_link, timeout);
}
