
function validatePersonalInfo(){
    var _first = document.info.first_name.value;
	var _last = document.info.last_name.value;
    var _mobile = document.info.mobile.value;
    var _email = document.info.email.value; 
	var _password=document.info.password.value;
	var _nationality=document.info.nationality.value;
	var _sex=document.info.gender.value;
	var _qualification=document.info.Description.value;
	var _user_id=document.info.user_id.value;
	var _password_user=document.info.password_user.value;
	var _zip = document.info.zip.value;	
	var _dob =document.info.dob.value;

      
    if(_first.toString() == ""){alert("Please enter a first name.");}
	else if(_last.toString() == ""){alert("Please enter a last name.");}
    else if(_mobile.toString() == ""){alert("Please enter your mobile number.");} 
    else if(_email.toString() == ""){alert("Please enter your email.");}
	else if(_password.toString() == ""){alert("Please enter your password.");}
	else if(_nationality.toString() == ""){alert("Please confirm your nationality.");}
	else if(_sex.toString() == ""){alert("Please enter your Gender.");}
	else if(_qualification.toString() == ""){alert("Please enter your qualification.");}
	else if(_user_id.toString() == ""){alert("Please enter your user id.");}
	else if(_password_user.toString() == ""){alert("Please enter your password.");}
	else if(_zip.toString() == ""){alert("Please enter your zip.");}
	else if (_dob.toString() == ""){alert("Please enter your date of birth.");}

	else if(!checkalpha(_first))
	{
		alert("enter Correct First name");
	}
	else if(!checkalpha(_last))
	{
		alert("enter Correct last name");
	}
	else if(!checkZip){
    	alert("Invalid Zip Code" + validZip);
	}
    else if(!checkmobile(_mobile)){
		alert("mobile number is invalid." + validmobile);
	}	
	else if(!checkemail(_email)){
		alert("enter valid email")
	}
	eighteen();

		function checkalpha(str){
			var regexp=/^[a-zA-Z]+$/;
			return regexp.test(str);
		}
		function eighteen() {
			var Split = _dob.split("/");
			if (parseInt(Split[2]) > 2001){
				alert("You are not eligible for this");
			}
			
		}
        function checkemail(str){
			var regexp=/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
			return regexp.test(str);
		}
    	function checkmobile(str){
			var regexp = /^\d{10}$/; 
			return regexp.test(str);
    	}
		
		function checkZip(length=5)
    	{
    		var zipEntry = document.info.zip.value;
    		var zipNum = parseInt(zipEntry, 10);
    		if (document.info.zip.value.length == length)
    		{
    			if(zipNum != 0 && isNaN(zipNum) == false){
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
	}