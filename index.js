const make_link = () => {
	var rand = urls[Math.floor(Math.random() * urls.length)];
	document.getElementById("message").innerHTML = "";
	var button = document.getElementById("thebutton");
	button.href = rand;
	button.on_click = "";
	button.innerHTML = "DOWNLOAD";
}

const on_click = () => {
	document.getElementById("message").innerHTML = `
		<p>Making your sample pack...</p>
		<img id = "paige" src="images/doc_writing.gif">`;
	document.getElementById("thebutton").innerText = "...";
	setTimeout(make_link, 5000);
}
