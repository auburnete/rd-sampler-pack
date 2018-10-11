const make_link = () => {
	var rand = urls[Math.floor(Math.random() * urls.length)];
	document.getElementById("message").innerHTML = `<p><a href=${rand}>Click to download!</a></p>`;
}

const on_click = () => {
	document.getElementById("message").innerHTML = "<p>Making your sample pack...</p>";
	setTimeout(make_link, 5000);
}
