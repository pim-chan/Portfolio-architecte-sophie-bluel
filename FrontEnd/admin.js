// export const showAdminContent = {
    
// }

// const modaleBox = document.querySelector(".modal-box");
// const modaleTriggers = document.querySelectorAll(".modal-trigger");

// modaleTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal));

// function toggleModal(){
//     modaleBox.classList.toggle("active")
// }

document.addEventListener('DOMContentLoaded', function() {
    const idUser = localStorage.getItem('authToken');
    if (idUser === `{"userId":1,"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4ODY2MTI0MSwiZXhwIjoxNjg4NzQ3NjQxfQ.6FIKJDV21THRBezjBvcQV-1hT0Jam5YUCWDT1gTiEFk"}`) {
          const editBar = document.getElementById("edit-bar");
          const editBarContainer = document.createElement('div')
          const editBarText = document.createElement('p');
          editBarText.textContent = "Mode édition";
          const editIcon = document.createElement('img');
          editIcon.src = "./assets/icons/edit-white.png"
          const editBarButton = document.createElement('button');
          editBarButton.textContent = "publier les changements";

          editBar.appendChild(editBarContainer)
          editBarText.insertBefore(editIcon, editBarText.firstChild);
          editBarContainer.appendChild(editBarText)
          editBarContainer.appendChild(editBarText)
          editBarContainer.appendChild(editBarButton)

        }
    })

