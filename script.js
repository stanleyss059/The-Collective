let showAlt = false;
let swapped = false;

function SignUp() {
  document.getElementById("body").innerHTML = `
    <div class="main">
      <div class="textcontainer">
        <p class="welcometxt">Welcome to <span class="highlight"><i>"The Collective"</i></span></p>
        <p class="subtxt">We are happy you decided to come back</p>
        <button id="swapBtn" type="button" onclick="changecontent()">Login</button>
      </div>
      <form class="container">
        <p class="CAcc">Create Account</p>
        <div class="social-login">
          <button class="icon-btn"><img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" /></button>
          <button class="icon-btn"><img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" /></button>
          <button class="icon-btn"><img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook" /></button>
        </div>
        <input type="text" placeholder="Username">
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">
        <input type="password" placeholder="Confirm Password">
        <button type="submit">Sign Up</button>
      </form>
    </div>
  `;
}

function Login() {
  document.getElementById("body").innerHTML = `
    <div class="main">
      <form class="container">
        <p class="CAcc">Login</p>
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">
        <div class="forgot-password"><a href="#">Forgot Password?</a></div>
        <button class="Login" type="submit">Login</button>
      </form>

      <div class="textcontainer">
        <p class="welcometxt">Welcome to <span class="highlight"><i>"The Collective"</i></span></p>
        <p class="subtxt">If you don't have an Account, please create one here</p>
        <button id="swapBtn" type="button" onclick="changecontent()">Sign Up</button>
      </div>
    </div>
  `;
}

function changecontent() {
  const body = document.getElementById("body");

  // fade-out effect
  body.style.opacity = 0;

  setTimeout(() => {
    showAlt ? SignUp() : Login();
    showAlt = !showAlt;

    // Swap gradient colors
    swapped = !swapped;
    body.style.background = swapped
      ? "linear-gradient(to right, white, #2E8BC0)"
      : "linear-gradient(to right, #2E8BC0, white)";

    // fade-in effect
    body.style.opacity = 1;
  }, 400);
}
