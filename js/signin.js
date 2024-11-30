
  
  
  function setCookie(user, token) {
    // alert("called")
    console.log(user);
    const d = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    // document.cookie=`email=${email} ; ${expires}`
    document.cookie = `user=${user} ; ${expires}`;
    document.cookie = `token=${token} ; ${expires}`;
  
  }
  
  
  
  
  
  const loginUser = async (email, password) => {
    try {
      document.querySelector("#login").innerHTML = "proccessing...";
      const response = await fetch(
        "https://fuelsoilservices-backend.glitch.me/api/user/login",
        // "http://localhost:5000/api/user/login",
  
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email, password }),
        },
      );
      const result = await response.json();
      console.log(result);
      if (result.error) {
        document.querySelector(".errMessage").innerHTML = result.errMessage;
        document.querySelector("#login").innerHTML = "try again";
        return;
      }
      document.querySelector("#login").innerHTML = "success";
      setCookie(result.message.user, result.token);
      window.location.href="inactive-account.html"
    } catch (err) {
      document.querySelector(".errMessage").innerHTML = err.message;
      document.querySelector("#login").innerHTML = "try again";
    }
  };
  
 
  

  //response gotten
  
  // loginUser("email@gmail.com","password")
  
  // function getCookie(cname) {
  //   let name = cname + "=";
  //   let decodedCookie = decodeURIComponent(document.cookie);
  //   let ca = decodedCookie.split(';');
  //   for (let i = 0; i < ca.length; i++) {
  //       let c = ca[i];
  //       while (c.charAt(0) == ' ') {
  //           c = c.substring(1);
  //       }
  //       if (c.indexOf(name) == 0) {
  //           return c.substring(name.length, c.length);
  //       }
  //   }
  //   return "";
  // }
  
    document.querySelector("#login").onclick = () => {
      event.preventDefault();
      const email = document.querySelector("#email");
      const password = document.querySelector("#password");
      if (!email.value)
        return (document.querySelector(".errMessage").innerHTML =
          "Email is required");
      if (!password.value)
        return (document.querySelector(".errMessage").innerHTML =
          "Password is required");
      if (password.value.length < 8)
        return (document.querySelector(".errMessage").innerHTML =
          "Password must be greater than 8 characters");
  
      document.querySelector(".errMessage").innerHTML = "";
  
      loginUser(email.value, password.value);
    };
  
    document.querySelectorAll("input").forEach((input) => {
      document.querySelector(".errmessage2").innerHTML = "";
      input.onkeyup = () => (input.style.border = "0.1px solid #fff");
    });
    document.querySelector("select").onchange = () =>
      (document.querySelector("select").style.border = "0.1px solid #fff");
 
  

  

  
  