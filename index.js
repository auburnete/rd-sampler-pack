const make_link = () => {
	var rand = urls[Math.floor(Math.random() * urls.length)];
	document.getElementById("message").classList.add("invisible");
	var button = document.getElementById("thebutton");
	button.href = rand;
	button.setAttribute("onclick", "ga('send', 'event', { eventCategory: 'Download', eventAction: 'Click', eventLabel: 'Page', eventValue: 50}); return true;");
	button.innerHTML = "DOWNLOAD";
}

const on_click = () => {
	document.getElementById("message").classList.remove("invisible");
	document.getElementById("thebutton").innerText = "...";
	let timeout = Math.round(3000 + (Math.random() * 1000));
	setTimeout(make_link, timeout);
}
