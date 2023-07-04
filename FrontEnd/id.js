const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const loginData = {
        email: event.target.querySelector("[name=email]").value,
        password: event.target.querySelector("[name=password]").value,
    };
fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginData)
    })
    .then(res => {
        if (res.ok) {
          window.location.href = 'http://127.0.0.1:5501/FrontEnd/index.html';
        } else {
          const errorMsg = document.querySelector('.error-msg');
          errorMsg.textContent = "Votre e-mail/mot de passe est incorrect";
        }
    })
});
