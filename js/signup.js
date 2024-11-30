
function setCookie(user, token) {
  // alert("called")
  console.log(user);
  const d = new Date();
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  // document.cookie=`email=${email} ; ${expires}`
  document.cookie = `user=${user} ; ${expires}`;
  document.cookie = `token=${token} ; ${expires}`;

 window.location.replace("/inactive-account.html")
}




// const loginUser = async (email, password) => {
//   try {
//     document.querySelector("#login").innerHTML = "proccessing...";
//     const response = await fetch(
//       "/api/user/login",
//       // "http://localhost:5000/api/user/login",

//       {
//         method: "POST",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       },
//     );
//     const result = await response.json();
//     console.log(result);
//     if (result.error) {
//       document.querySelector(".errMessage").innerHTML = result.errMessage;
//       document.querySelector("#login").innerHTML = "try again";
//       return;
//     }
//     document.querySelector("#login").innerHTML = "success";
//     setCookie( result.message.user, result.token);
//     window.location.replace("/dashboard.html");
//   } catch (err) {
//     document.querySelector(".errMessage").innerHTML = err.message;
//     document.querySelector("#login").innerHTML = "try again";
//   }
// };






const registerUser = async (userInfo) => {
  try {
    document.querySelector("#register").innerHTML = "proccessing...";
    const response = await fetch(
      "https://fuelsoilservices-backend.glitch.me/api/newuser/register",
      {
        method: "POST",
        body: userInfo,
      },
    );
    const result = await response.json();
    console.log(result);
    if (result.error) {
      document.querySelector(".errMessage").innerHTML = result.errMessage;
      document.querySelector("#register").innerHTML = "try again";
      return;
    }
    document.querySelector("#register").innerHTML = "success";
    return setCookie(result.message.user, result.token);
  } catch (err) {
    
      document.querySelector(".errMessage").innerHTML = err.message;
    document.querySelector("#register").innerHTML = "try again";
  err.message == "Unexpected token < in JSON at position 0"
    ? (document.querySelector(".errMessage").innerHTML =
        "Please make sure what you are trying to submit is an image and try again")
    : (document.querySelector(".errMessage").innerHTML = err.message);

  
  }
};



// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelector("#login").onclick = () => {
//     event.preventDefault();
//     const email = document.querySelector("#email");
//     const password = document.querySelector("#password");
//     if (!email.value)
//       return (document.querySelector(".errMessage").innerHTML =
//         "Email is required");
//     if (!password.value)
//       return (document.querySelector(".errMessage").innerHTML =
//         "Password is required");
//     if (password.value.length < 8)
//       return (document.querySelector(".errMessage").innerHTML =
//         "Password must be greater than 8 characters");

//     document.querySelector(".errMessage").innerHTML = "";

//     loginUser(email.value, password.value);
//   };




//     const getCookie = (cname) => {
//       let name = cname + "=";
//       let decodedCookie = decodeURIComponent(document.cookie);
//       let ca = decodedCookie.split(";");
//       for (let i = 0; i < ca.length; i++) {
//         let c = ca[i];
//         while (c.charAt(0) == " ") {
//           c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//           return c.substring(name.length, c.length);
//         }
//       }
//       // return "";
//       window.location.href = "/login.html";
//     };

// let user = getCookie("user");
// let token_01 = getCookie("token_01");


  document.querySelector("#register").onclick = () => {
    event.preventDefault();
    let errorColor = "2px solid red";

    const first_name = document.querySelector("#first_name");
    const last_name = document.querySelector("#last_name");
    const email = document.querySelector("#email");
    const phone_number = document.querySelector("#phone_number");
    const government_id=document.querySelector("#government_id")
    const country=document.querySelector("#country");
    const street_address=document.querySelector("#street_address")
    const city=document.querySelector("#city")
    let password = document.querySelector("#password");
    let password2 = document.querySelector("#password_confirm");

    if (!first_name.value) return (first_name.style.border = errorColor);
    if (!last_name.value) return (last_name.style.border = errorColor);
    if (!email.value) return (email.style.border = errorColor);
    if (!phone_number.value) return (phone_number.style.border = errorColor);
    if (!government_id.files[0]) return (government_id.style.border = errorColor);
    if (!country.value) return (country.style.border = errorColor);
    if (!street_address.value) return (street_address.style.border = errorColor);
    if (!city.value) return (city.style.border = errorColor);
    if (!password.value) return (password.style.border = errorColor);
    if (!password2.value) return (password2.style.border = errorColor);
    if (password.value != password2.value)
      return (document.querySelector(".errMessage").innerHTML =
        "password must match");
    if (password.value.length < 8)
      return (document.querySelector(".errMessage").innerHTML =
        "Password must be greater than 8 characters");
   
    const formdata = new FormData();
    formdata.append("first_name", first_name.value);
    formdata.append("last_name", last_name.value);
    formdata.append("email", email.value);
    formdata.append("phone_number", phone_number.value);
    formdata.append("government_id", government_id.files[0]);
    formdata.append("country", country.value);
    formdata.append("street_address", street_address.value);
    formdata.append("city", city.value);
    formdata.append("password", password.value);
    registerUser(formdata);
  };

  document.querySelectorAll("input").forEach((input) => {
   
    input.onchange = () =>{
       (input.style.border = "0.5px solid #fff");
       document.querySelector(".errMessage").innerHTML = "";

    }

  })


  document.querySelectorAll("select").forEach((select) => {
   
    select.onchange = () =>{
       (select.style.border = "0.5px solid #fff");

    }
    
  })

  // const signUpButton = document.getElementById("signUp");
  // const signInButton = document.getElementById("login");
  // const container = document.getElementById("container");



  // signInButton.addEventListener("click", () => {
  //   container.classList.remove("right-panel-active");
  // });

  // document.addEventListener("DOMContentLoaded",()=>{


