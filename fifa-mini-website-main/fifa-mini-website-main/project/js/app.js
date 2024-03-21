const d_username = "Varun@proj.ca";
const d_password = "123";

// cookies
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
var name = cname + "=";
var ca = document.cookie.split(';');
for(var i=0; i<ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
}
return "";
}



// login buton
$(document).ready(function(){
    $("#login_btn").click(function(){ 
        let email = $("#input_email_login").val();
        let password = $("#input_password_login").val();

        try{
            if((email == "") || (password == "")){
                alert("Please enter the Email and Password");
            }
            else if(email == d_username && password == d_password){
                alert("Success");
                window.open("./index_login.html", "_self",true);
                setCookie("Email: ", email, 1 ); // setting cookie
            }
            else{
                alert("Try Again\nEmail: Varun@proj.ca and Password: 123");
            }  
        }
        catch (err){
            console.log(err);
        }    
    }); 
});


// logout buton
$(document).ready(function(){
    $("#signout_btn").click(function(){ 
        window.open("./index.html", "_self",true);  
        setCookie("Email: ", email, -1 ); // setting cookie
    }); 
});


// sign up 
$(document).ready(function(){
    $("#signup_btn").click(function(){ 
        let email = $("#signup-email").val();
        let password = $("#signup-password").val();

        try{
            if((email == "") || (password == "")){
                alert("Please enter the Email and Password");
            }
            else if(email == d_username && password == d_password){
                alert("Success");
                window.open("./index.html", "_self",true);
                setCookie("Email: ", email, 1 ); // setting cookie
            }
            else{
                alert("Please enter Email: Varun@proj.ca and Password: 123");
            }  
        }
        catch (err){
            console.log(err);
        }    
    }); 
});


// on load time 
function startTime(){
    let d = new Date();
   setCookie("startTime: ", d.getTime(),1);
}

// calculating  newsletter submission time
$(document).ready(function(){
    $("#subscribe").click(function(){ 
        let email = $("#sub-email").val();
        let name = $("#sub-name").val();
        let submit_time = new Date();

        try{
            if((email == "") || (name == "")){
                alert("Please enter the Email and Name");
            }
            else {
                setCookie("submit: ", submit_time.getTime(), 1 ); // setting cookie
                alert('Success');

                alert("You spend " + (parseInt(etCookie('submit')) - parseInt(getCookie('startTime'))) + " sec");
            } 
        }
        catch (err){
            console.log(err);
        }    
    }); 
});