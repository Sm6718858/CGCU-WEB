let formHandle = document.querySelector(".loginForm");

formHandle.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const phone = document.getElementById("phone").value.trim();

  try{
    const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password, phone})
      });
      console.log(res);
  
    const data = await res.json();

    console.log(data);
    
    if(data.success){
        localStorage.setItem("email", email);
        // alert("Signup Successfull Babu")
        console.log(window.location.href);
        // setTimeout(()=>{
        //   window.location.href = "dashboard.html";
        // },1000);
    }
    else {
      alert("Signup failed. Try again.");
    }
  }
  catch(error){
    console.log("Error hae bhai error check kro");
  }

});