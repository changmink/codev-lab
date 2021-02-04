const login = document.querySelector(".menu__login")
console.log(login)
login.addEventListener('click', (event)=> {
    event.preventDefault();
    login.textContent = (login.textContent === "login")? "logout" : "login"
    window.open("./login.html", "_black", 'width=300px,height=300px,toolbars=no,scrollbars=no');
})