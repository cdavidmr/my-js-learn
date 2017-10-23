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
	console.log(pc1+pc2+pp1);
}