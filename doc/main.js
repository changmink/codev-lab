const login = document.querySelector(".menu__login")
console.log(login)
login.addEventListener('click', (event)=> {
    event.preventDefault();
    login.textContent = (login.textContent === "login")? "logout" : "login"
})