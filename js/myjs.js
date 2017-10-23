var v = true;

function TestDom() {
	var p1 = document.getElementById("par1");
	if (v == true) {
		p1.innerHTML = "True";
		v = false;
	} else {
		p1.innerHTML = "False";
		v = true;
	}
}