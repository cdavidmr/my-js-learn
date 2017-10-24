function TestDom() {
	var p1 = document.getElementById("par1");
	var p2 = document.getElementById("par2");
	//get class
	var pc1 = p1.getAttribute("class");
	var pc2 = p2.getAttribute("class");
	//aux var
	var pp1 = p1.textContent;
	//change text
	p1.innerHTML = p2.textContent;
	p2.innerHTML = pp1;
	//remove class 
	p1.removeAttribute("class");
	p2.removeAttribute("class");
	//Set class 
	p1.setAttribute("class", pc2);
	p2.setAttribute("class", pc1);
	//
	var bo1 = document.getElementById("bt1");
	var color = ["darkred", "darkblue", "darkgreen", "black", "purple", "gold", "tomato", "#ee82ee"];
	var rdm = Math.floor(Math.random() * color.length);
	//
	bo1.classList.remove("bg-dark")
	bo1.style.backgroundColor = color[rdm];
	//
	console.log(pc1 +" "+" "+ pc2 +" "+ pp1);
	console.log("color: "+color[rdm]);
}

function Lamp() {
	var btn_on = document.getElementById("btn_on");
	var btn_off = document.getElementById("btn_off");
	var img_lamp = document.getElementById("lamp_img");

	if (btn_on.hasAttribute("disabled", "") == true) {
		btn_on.removeAttribute("disabled", "");
		btn_off.setAttribute("disabled", "");
		img_lamp.setAttribute("src", "img/lamp-off.png");
	} else {
		btn_on.setAttribute("disabled", "");
		btn_off.removeAttribute("disabled", "");
		img_lamp.setAttribute("src", "img/lamp-on.png");
	}
}

function OverBg(x) {
	var alert_theme = ["alert-success", "alert-danger", "alert-warning", "alert-dark",
		"alert-primary", "alert-secondary", "alert-light", "alert-info"
	];
	var alert1 = document.getElementById(x);
	var rdm = Math.floor(Math.random() * alert_theme.length);
	var con = 1;
	var con1 = 1;

	for (var i = 0; i < alert_theme.length; i++) {
		console.log("for : " + (i + 1));
		if (alert1.classList.contains(alert_theme[i]) == true) {
			while (alert1.classList.contains(alert_theme[i]) == alert1.classList.contains(alert_theme[rdm])) {
				rdm = Math.floor(Math.random() * alert_theme.length);
				console.log("iguales: " + con++);
			}
			alert1.classList.remove(alert_theme[i]);
			console.log("else: " + con1++);
			console.log(alert_theme[i] + " " + alert_theme[rdm]);
			return alert1.classList.add(alert_theme[rdm]);
		}
	}
}

function OverBg1() {
	OverBg("par1");
}

function OverBg2() {
	OverBg("par2");
}

function OverBg3() {
	OverBg("title1");
}