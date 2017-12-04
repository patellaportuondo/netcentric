function checkform(){ 
	var firstname= document.forms["myform"]["fname"].value;
	if (firstname==""){
		
		alert("there is no input");
		//return false;
	};
	var lastname= document.forms["myform"]["lname"].value;
	if (lastname==""){
		alert("there is no input2");
		//return false;
	};
	var email= document.forms["myform"]["email"].value;
	if (email==""){
		alert("there is no input3");
		//return false;
	};
	
	
	var password= document.forms["myform"]["password"].value;
	//var j=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/i;
	if (testpassword()==false){
		alert("there is no input");
		//return false;
	};
	// 
	
	var conpassword= document.forms["myform"]["passwordcon"].value;
	if (conpassword==""){
		alert("there is no input");
		//return false;
	};
	// if (password!=conpassword){
	// 	alert("Password not match";
	// };


function testpassword(){
	var j=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/i;
	if(!j.test(password)){
	 	alert("Format not correct")
	 	return false;
	 };
	 return true
};

	var h=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+3"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

}