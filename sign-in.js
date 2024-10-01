






function signnnn() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Input validation
    if (!email) {
      alert("Please enter email or mobile number");
      return;
    }
  
    if (!password) {
      alert("Please enter password");
      return;
    }
  
    if (password.length < 8) {
      alert("Password should be at least 8 characters");
      return;
    }
  
    // Email format validation (basic)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email format");
      return;
    }
  
    // Sign-in logic here (e.g., API call)
    // Replace console.log with actual API call
    console.log('Sign-in attempted:', email, password);
  
    // Redirect to index.html
    window.open('index.html');
  
    // Clear inputs securely
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
  }
  


function ForgotPassword()
{
    const a=prompt("Please enter the email")
    if(a || null)
    {
        alert("Verification code sent to your email")
    }else
    {
        alert("You not enter the email")
    }
}