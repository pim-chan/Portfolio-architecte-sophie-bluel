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
  .then(res => res.ok ? res.json() : Promise.reject(new Error("Erreur de requête")))
  .then(data => {
    const authToken = JSON.stringify(data); 
    localStorage.setItem("authToken", authToken);
    window.location.href = 'http://127.0.0.1:5501/FrontEnd/index.html';
  })
  .catch(error => {
    const errorMsg = document.createElement('p')
    errorMsg.textContent = "Votre e-mail/mot de passe est incorrect";
    errorMsg.classList.add('error-msg')
    const loginForm = document.querySelector('.login-form')
    const loginButton = loginForm.childNodes[3];
    loginForm.insertBefore(errorMsg, loginButton.nextSibling)
  });
})


