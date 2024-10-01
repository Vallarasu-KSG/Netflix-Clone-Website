
const login2 = document.querySelectorAll(".Login2");
const signup2 = document.querySelectorAll(".signup");
// const forget2 = document.querySelectorAll(".forget");
const signuplink = document.querySelectorAll("#signuplink");
const signinlink = document.querySelectorAll("#signinlink");
// const forget = document.querySelectorAll(".forget2");
const returen2 = document.querySelectorAll("#return");

// Function to handle signup link click
function signup(event) {
  event.preventDefault();
  login2.forEach((element) => {
    element.style.visibility = "hidden";
  });
  signup2.forEach((element) => {
    element.style.visibility = "visible";
  });
  forget2.forEach((element) => {
    element.style.visibility = "hidden";
  });
}

// Function to handle signin link click
function signin(event) {
  event.preventDefault();
  login2.forEach((element) => {
    element.style.visibility = "visible";
  });
  signup2.forEach((element) => {
    element.style.visibility = "hidden";
  });
  forget2.forEach((element) => {
    element.style.visibility = "hidden";
  });
  forget.forEach((element) => {
    element.style.visibility = "visible";
  });
}

// Function to handle forgot password link click
// function ForgotPassword(event) {
//   event.preventDefault();
//   login2.forEach((element) => {
//     element.style.visibility = "hidden";
//   });
//   signup2.forEach((element) => {
//     element.style.visibility = "hidden";
//   });
//   forget2.forEach((element) => {
//     element.style.visibility = "visible";
//   });
//   forget.forEach((element) => {
//     element.style.visibility = "hidden";
//   });
  
// }

// function returen(event)
// {
//     event.preventDefault();
//     login2.forEach((element) => {
//       element.style.visibility = "hidden";
//     });
//     signup2.forEach((element) => {
//       element.style.visibility = "visible";
//     });
//     forget2.forEach((element) => {
//       element.style.visibility = "hidden";
//     });
//   }


// Add event listeners to signup and signin links
signuplink.forEach((element) => {
  element.addEventListener("click", signup);
});

signinlink.forEach((element) => {
  element.addEventListener("click", signin);
});

// Add event listener to forgot password link
// forget2.forEach((element) => {
//   element.addEventListener("click", ForgotPassword);
// });

// returen2.forEach((element) => {
//     element.addEventListener("click", returen);
//   });
// end


var emailarray=[];
var passwordarray=[];

function signinbtn()
{

    event.preventDefault();
    var email = document.getElementById("se").value;
    var password = document.getElementById("sp").value;
    // array strat from 0
    var i = emailarray.indexOf(email);
    if (emailarray.indexOf(email) == -1) // this if value irukkanu check pannum
    {
        if (email < 1) //this is nested if //this if register panna value ah kuthu irukkingalanu check pannum
        {
            alert("Email Required.");
            return;
        }
        alert(" Emial does not match. \n Please register your details go to sign-up-now");
        return;
    }
    else if (passwordarray[i] != password)
    {
        if (password < 1)
        {
            alert("Password Required.");
            return;
        }
        if (password.length < 8) {
            alert("Password should be at least 8 characters");
            return;
        }
        alert("Password does not match.");
        return;
    }
    else
    {
        
        alert(email + " Login Successful Welcome");
        window.open('index.html','_self');
        document.getElementById('se').value=" ";
        document.getElementById('sp').value=" ";
    }
}

function signupbtn()
{

    event.preventDefault();
    
    var email = document.getElementById("re").value;
    var password = document.getElementById("rp").value;
    var passwordRetype = document.getElementById("rrp").value;

    if (email < 1)
    {
        alert("Email required.");
        return;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
        if (!emailRegex.test(email)) 
        {
            alert("Invalid email format");
            return;
        }
    else if (password < 1)
    {
        alert("Password required.");
        return;
    }
    else if (password.length < 8) {
        alert("Password should be at least 8 characters");
        return;
    }
    else if (passwordRetype < 1)
    {
        alert("passwordRetype required.");
        return;
    }
    else if (password != passwordRetype)
    {
        alert("password does not match");
        return;
    }
    else if (emailarray.indexOf(email) == -1)
    {
        emailarray.push(email);
        passwordarray.push(password);
        alert(email + " Thank for registration.");

        // clear-value
        document.getElementById("re").value =" ";
        document.getElementById("rp").value =" ";
        document.getElementById("rrp").value =" ";
    }
}

function ForgotPassword()
{
    const a=prompt("Please enter the email")
    if(a || null)
    {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
        if (!emailRegex.test(a)) 
        {
            alert("Invalid email format");
            return;
        }
        alert(a + " Verification request sent to your email Check it in 24hr");
    }
    else
    {
        alert("You not enter the email");
    }
}