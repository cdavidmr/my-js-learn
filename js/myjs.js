function testDom() {
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
}

function lamp() {
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

function overBg(x) {
	var alert_theme = ["alert-success", "alert-danger", "alert-warning", "alert-dark",
		"alert-primary", "alert-secondary", "alert-light", "alert-info"];
	var alert1 = document.getElementById(x);
	var rdm = Math.floor(Math.random() * alert_theme.length);
	var con = 1;
	var con1 = 1;

	for (var i = 0; i < alert_theme.length; i++) {
		if (alert1.classList.contains(alert_theme[i]) == true) {
			while (alert1.classList.contains(alert_theme[i]) == alert1.classList.contains(alert_theme[rdm])) {
				rdm = Math.floor(Math.random() * alert_theme.length);
			}
			alert1.classList.remove(alert_theme[i]);
			return alert1.classList.add(alert_theme[rdm]);
		}
	}
}

function overBg1() {
	overBg("par1");
}

function overBg2() {
	overBg("par2");
}

function overBg3() {
	overBg("title1");
}

function overBg4() {
	overBg("text_date");
	setTimeout("overBg4()", 1000);
}

function dateLoad() {
	var f = new Date();
	var seconds = f.getSeconds();
	var hours = f.getHours();
	var minutes = f.getMinutes();
	var month = f.getMonth() + 1;
	var day = f.getDate();
	if (f.getSeconds() < 10) {
		seconds = "0" + f.getSeconds();
	}
	if (f.getMinutes() < 10) {
		minutes = "0" + f.getMinutes();
	}
	if (f.getHours() < 10) {
		hours = "0" + f.getHours();
	}
	if (f.getMonth() + 1 < 10) {
		month = "0" + f.getMonth();
	}
	if (f.getDate() < 10) {
		day = "0" + f.getDate();
	}
	var fecha = day + "/" + month + "/" + f.getFullYear() + " " + hours + ":" + minutes + ":" + seconds;
	document.getElementById("text_date").innerHTML = fecha;
	setTimeout("dateLoad()", 1000);
}


//ES6
// setInterval(()=>{
// 	overBg("text_date");
// 	setTimeout("overBg4()", 1000);
// 	var f = new Date();
// 	var seconds = f.getSeconds();
// 	var hours = f.getHours();
// 	var minutes = f.getMinutes();
// 	var month = f.getMonth() + 1;
// 	var day = f.getDate();
// 	if (f.getSeconds() < 10) {
// 		seconds = "0" + f.getSeconds();
// 	}
// 	if (f.getMinutes() < 10) {
// 		minutes = "0" + f.getMinutes();
// 	}
// 	if (f.getHours() < 10) {
// 		hours = "0" + f.getHours();
// 	}
// 	if (f.getMonth() + 1 < 10) {
// 		month = "0" + f.getMonth();
// 	}
// 	if (f.getDate() < 10) {
// 		day = "0" + f.getDate();
// 	}
// 	var fecha = day +"/" + month +"/" + f.getFullYear() + " " + hours +":" + minutes +":" + seconds;
// 	document.getElementById("text_date").innerHTML = fecha;
// 	setTimeout("dateLoad()", 1000);
// }, 1000);