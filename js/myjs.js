function TestDom() {
	var p1 = document.getElementById("par1");
	var p2 = document.getElementById("par2");
	//get class
	let pc1 = p1.getAttribute("class");
	let pc2 = p2.getAttribute("class");
	//aux var
	let pp1 = p1.textContent;
	//change text
	p1.innerHTML = p2.textContent;
	p2.innerHTML = pp1;
	//remove class 
	p1.removeAttribute("class");
	p2.removeAttribute("class");
	//Set class 
	p1.setAttribute("class",pc2);
	p2.setAttribute("class",pc1);
	//
	var bo1 = document.getElementById("bt1");
	var color = ["darkred","darkblue","darkgreen","black","purple","gold","tomato","#ee82ee"];
	var rdm = Math.floor(Math.random()*color.length);
	//
	bo1.classList.remove("bg-dark")
	bo1.style.backgroundColor = color[rdm];
	//
	console.log(pc1+pc2+pp1);
	console.log(color[rdm]);
}

function lamp() {
	let btn_on = document.getElementById("btn_on");
	let btn_off = document.getElementById("btn_off");
	let img_lamp = document.getElementById("lamp_img");

	if(btn_on.hasAttribute("disabled","") == true){
		btn_on.removeAttribute("disabled","");
		btn_off.setAttribute("disabled","");
		img_lamp.setAttribute("src","img/lamp-off.png");
	}else{
		btn_on.setAttribute("disabled","");
		btn_off.removeAttribute("disabled","");
		img_lamp.setAttribute("src","img/lamp-on.png");
	}


}