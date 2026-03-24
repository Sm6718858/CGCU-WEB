let formHandle = document.querySelector(".signupForm");

formHandle.addEventListener("submit", async (e) => {
  e.preventDefault();


  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const phone = document.getElementById("phone").value.trim();

  try {
    const res = await fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password, phone })
    });

    const data = await res.json();
    if (data.success) {
      window.location.href = "login.html";
    } else {
      alert(data.message);
    }

  } catch (error) {
    console.error("ERROR:", error);
    alert("Backend connect nahi ho raha babu");
  }
});