$('#summernote').summernote({
    placeholder: '내용을 입력해 주세요.',
    tabsize: 2,
    height: 500,
    toolbar: [
      ['style', ['style']],
      ['font', ['bold', 'underline', 'clear']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['table', ['table']],
      ['insert', ['link', 'picture', 'video']],
      ['view', ['fullscreen', 'codeview', 'help']]
    ]
  });

const login = document.querySelector(".menu__login")
login.addEventListener('click', (event)=> {
    event.preventDefault();
    if(login.textContent === "Logout") {
        login.textContent = "Login"
        return
    }
    window.open("./login.html", "_black", 'width=300px,height=300px,toolbars=no,scrollbars=no');
})


  const saveButton = document.querySelector("#save")
  saveButton.addEventListener("click", () => {
      const content = {}
      content.main = $('#summernote').summernote('code')
      content.title = document.querySelector("#title").value
      content.team = document.querySelector("#team").value
      content.thumbnail = document.querySelector("#thumbnail").files[0]
      console.log(content)
  })
