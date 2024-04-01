function firstChar(text) {
	if(text.length>0){
		return text[0];
	}else{
		return "";
	}
}
  // your code here

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
