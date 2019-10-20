function f1()
{
  alert("WELCOME TO CHITKARA UNIVERSITY");
}
function f2()
{
document.getElementById("user").style.background = "lightblue";
document.getElementById("user").style.color = "black";
}
function f3()
{
document.getElementById("pass").style.background = "lightblue";
document.getElementById("pass").style.color = "black";
}
function f4()
{
document.getElementById("user1").style.background = "lightblue";
document.getElementById("user1").style.color = "black";
}
function f5()
{
document.getElementById("pass1").style.background = "lightblue";
document.getElementById("pass1").style.color = "black";
}
function f6()
{
document.getElementById("pass2").style.background = "lightblue";
document.getElementById("pass2").style.color = "black";
}
function f7()
{
document.getElementById("pass3").style.background = "lightblue";
document.getElementById("pass3").style.color = "black";
}

function f9()
{
 var p = document.getElementById("user1").value;
  var q = document.getElementById("pass1").value;
   var r = document.getElementById("pass2").value;
  var s = document.getElementById("pass3").value;
if(p==""||q==""||r==""||s=="")
{
  alert("All the fields must be filled");
  return false;
}

else
{
alert("Are you sure, you wanna submit the details?");
}

}
function f10()
{
var email = prompt("enter your email");
}

function validateForm() {
  var x = document.getElementById("user").value;
  var y = document.getElementById("pass").value;
  if (x == "") {
    alert("Username must be filled out");
    return false;
  }
 
    if(y=="")
    {
 alert("password must be filled out");
    return false;
    }
    else
  {
    alert("You are successfully logged in!");
  }
}