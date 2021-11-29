
// Checking the RegEx for dob 
function dateOfBirth(){
    var dob = document.getElementById("dob").value ;
    var regx1 = /([0-1])([0-9])-([0-1])([0-9])-([1-2])([9-0])([0-9])([0-9])$/
    if(regx1.test(dob))
    {
       document.getElementById("lbltext1").value="Valid";
    document.getElementById("lbltext1").style.visibility="visible";
    document.getElementById("lbltext1").style.color="green"
    
} 
else{
    document.getElementById("lbltext1").value="Invalid";
    document.getElementById("lbltext1").style.visibility="visible";
    document.getElementById("lbltext1").style.color="red";
document.getElementById("dob").style.border="2px solid red";

}

// Checking the RegEx for mobile number

var phone = document.getElementById("mobile").value;
var regx2 = /[6-9]\d{9}$/
if(regx2.test(phone))
{
    document.getElementById("lbltext2").value="Valid";
    document.getElementById("lbltext2").style.visibility="visible";
    document.getElementById("lbltext2").style.color="green"
    
} 
else{
    document.getElementById("lbltext2").value="Invalid";
    document.getElementById("lbltext2").style.visibility="visible";
    document.getElementById("lbltext2").style.color="red";
document.getElementById("mobile").style.border="2px solid red";

}

// Checking the RegEx for email id
var email = document.getElementById("mail").value;
var regx3 = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$/
if(regx3.test(email)){
    var email1 = document.getElementById("lbltext3").value="Valid";
    document.getElementById("lbltext3").style.visibility="visible";
    document.getElementById("lbltext3").style.color="green"
    
} 
else{
    var email1 = document.getElementById("lbltext3").value="Invalid";
    document.getElementById("lbltext3").style.visibility="visible";
    document.getElementById("lbltext3").style.color="red";
    document.getElementById("mail").style.border="2px solid red";
    
}

// Checking the RegEx for pincode
var pincode = document.getElementById("code").value;
var regx4 = /^6[0-9]{5}$/
if(regx4.test(pincode)){
    document.getElementById("lbltext4").value="Valid";
    document.getElementById("lbltext4").style.visibility="visible";
    document.getElementById("lbltext4").style.color="green"
    
} 
else{
    document.getElementById("lbltext4").value="Invalid";
    document.getElementById("lbltext4").style.visibility="visible";
    document.getElementById("lbltext4").style.color="red";
document.getElementById("code").style.border="2px solid red";

}}
function submitCheck(){
var checking= document.getElementById("check").value
if(Boolean(checking))
{
    document.getElementById("currentaddress")= document.getElementById("permanentAddress")
}
}