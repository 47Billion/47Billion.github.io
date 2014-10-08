// JavaScript Document
//Mega Drop down
function changeMegaBtn(){
	if(document.getElementById("ddBtn").className == "ddBtnOpen"){
		document.getElementById("ddBtn").className = "ddBtnClose";
		document.getElementById("mega-menu").style.display = "block";
	}
	else{
		document.getElementById("ddBtn").className = "ddBtnOpen";
		document.getElementById("mega-menu").style.display = "none";
	}
}

//Tab Dselect
function deselectTab(tabNum, tabName, contentName) {
	for(var i = 1; i < tabNum+1; i++){
		document.getElementById(tabName + i).className = ""; 	
		document.getElementById(contentName + i).style.display = "none";
	}
}
function selectTab(tabName, contentName, tabClass, tabNum, id){
	deselectTab(tabNum,tabName, contentName);
	document.getElementById(tabName + id).className = tabClass;
	document.getElementById(contentName + id).style.display = "block";
}