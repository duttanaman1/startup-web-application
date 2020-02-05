var chk = document.getElementById('checkme')
var btn = document.getElementById('blyat')
btn.disabled = true

chk.onclick = function(){
	btn.disabled = !btn.disabled
}
// alert('j')

function validatePersonalInfo(event){

    var _first = document.info.first_name.value;
    var _last = document.info.last_name.value;
    var _email = document.info.email.value; 
	var _password=document.info.password.value;
	var _confirm=document.info.confirm.value;
    var _dob=document.info.DOB.value;
    var _pin = document.info.pin.value;
     var _mobile = document.info.mobile.value;
    var _sex=document.info.sex.value;
	var _city=document.info.city.value;
	var _country=document.info.country.value;
	var _state=document.info.state.value;
	var _qualification=document.info.qualification.value;


      
	if(_first.toString() == ""){alert("Please enter a first name.");}
	else if(!checkalpha(_first))
	{
		alert("enter Correct First name");
	}
	else if(_last.toString() == ""){alert("Please enter a last name.");}
	else if(!checkalpha(_last))
	{
		alert("enter Correct last name");
	}
	else if(_email.toString() == ""){alert("Please enter your email.");}
	else if(!checkemail(_email)){
		alert("enter valid email")
	}
	else if(_password.toString() == ""){alert("Please enter your password.");}
	else if(_confirm.toString() !=_password.toString()){alert("Please confirm your password.");}

	else if(_mobile.toString() == ""){alert("Please enter your mobile number.");} 
	else if(!checkmobile(_mobile)){
	
		alert("mobile number is invalid." + _mobile);
	}
	else if(_dob.toString() == ""){alert("Please enter your Date of Birth.");}
	else if(_sex.toString() == ""){alert("Please enter your Gender.");}
	else if(_city.toString() == ""){alert("Please enter your city.");}
	else if(_country.toString() == ""){alert("Please enter your countyr.");}
	else if(_pin.toString() == ""){alert("Please enter your pin.");}
	else if(!checkpin()){
    	alert("Invalid pin Code" + _pin);
	}
	else if(_state.length()>2)
	{
		alert("invalid state");
	}
	else if(_qualification.toString() == ""){alert("Please enter your qualification.");}




    
	
	

		function checkalpha(str){
			var regexp=/^[a-zA-Z]+$/;
			return regexp.test(str);
		}
		function eighteen() {
			var Split = _dob.split("/");
			if (parseInt(Split[2]) < 2001){
				alert("You are not eligible for this");
				return false;
			}
			
		}
        function checkemail(str){
			var regexp=/^([\w\.\-]+){6,}@([\w\-]+)((\.(\w){2,3})+)$/;
			return regexp.test(str);
		}
    	function checkmobile(str){
			
			var regexp = /^[0-9]{10}$/; 
			return regexp.test(str);
    	}
		
		function checkpin(length=6)
    	{
    		var pinEntry = document.info.pin.value;
    		var pinNum = parseInt(pinEntry, 10);
    		if (document.info.pin.value.length == length)
    		{
    			if(pinNum != 0 && isNaN(pinNum) == false){
    			return true;
    			}
    			else
    			{
    				return false;
    			}
    		}
    		else
    		{
    		return false;
    		}
		}
	event.preventDefault()
}
