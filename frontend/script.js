   let formHandle = document.getElementById("loginForm")

   formHandle.addEventListener("submit", (e) => {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      alert(`Username: ${username}\nPassword: ${password}`);
   })

