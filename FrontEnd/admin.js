const adminModeContent = () => {

  const body = document.querySelector('body');
  const topBar = document.createElement('section');
  topBar.setAttribute('id', 'edit-bar');
  const topBarContainer = document.createElement('div');
  const editButton = document.createElement('p');
  editButton.textContent = "Mode édition";
  const editIcon = document.createElement('img');
  editIcon.src = "./assets/icons/edit-white.png";
  const publishButton = document.createElement('button');
  publishButton.textContent = "publier les changements";

  body.insertBefore(topBar, body.firstChild);
  topBar.appendChild(topBarContainer);
  editButton.insertBefore(editIcon, editButton.firstChild);
  topBarContainer.appendChild(editButton);
  topBarContainer.appendChild(publishButton);

  const portfolioTitle = document.querySelector(".portfolio-title");
  const modalLink = document.createElement('a');
  modalLink.classList.add('modal-trigger');
  const modalLinkText = document.createElement('p');
  modalLinkText.textContent = "modifier";
  const modalLinkIcon = document.createElement('img');
  modalLinkIcon.src = "./assets/icons/edit.png";

  modalLink.appendChild(modalLinkText);
  modalLinkText.insertBefore(modalLinkIcon, modalLinkText.firstChild);

  portfolioTitle.appendChild(modalLink);

  modalLink.addEventListener('click', modaleCreation)
};

document.addEventListener('DOMContentLoaded', () => {
  const idUser = JSON.parse(localStorage.getItem('authToken'));
  if (idUser) {
    adminModeContent();
  } else {
    console.log(idUser);
  }
});

const getProjetsModal = async() =>  {
  const response = await fetch("http://localhost:5678/api/works");
  const data = await response.json();

  const galleryModal = document.createElement("div");
  galleryModal.classList.add('gallery-modal')

  data.forEach((element) => {
    const article = document.createElement('figure');
    const imgElement = document.createElement('img');
    imgElement.src = element.imageUrl;
    const titleElement = document.createElement('figcaption');
    titleElement.textContent = "éditer"; 

      article.appendChild(imgElement);
      article.appendChild(titleElement);
      galleryModal.appendChild(article);
    });

  const modalBox = document.querySelector('.modal')
  const divLine = document.querySelector(".line")
  modalBox.insertBefore(galleryModal, divLine)

}

  const modaleCreation = () => {
    const body = document.querySelector('body')
    const modalBox = document.createElement('section')
    modalBox.classList.add('modal-box', 'modal-trigger', 'active')
  
    const modal = document.createElement('div')
    modal.classList.add('modal')
  
    const closeIcon = document.createElement('img')
    closeIcon.src = "./assets/icons/close.png"
    closeIcon.classList.add('icon-close', 'modal-trigger')
  
    const modalTitle = document.createElement('h3')
    modalTitle.textContent = "Galerie photo"
  
    const divLine = document.createElement('div')
    divLine.classList.add('line')
  
    const inputAddPhoto = document.createElement('input');
    inputAddPhoto.type = 'submit';
    inputAddPhoto.value = 'Ajouter une photo';
    inputAddPhoto.classList.add('button-add');
  
    const inputDeleteGallery = document.createElement('input');
    inputDeleteGallery.type = 'submit';
    inputDeleteGallery.value = 'Supprimer la galerie';
    inputDeleteGallery.classList.add('button-delete');
    
    body.appendChild(modalBox)
    modalBox.appendChild(modal)
    modal.appendChild(closeIcon)
    modal.appendChild(modalTitle)
    modal.appendChild(divLine)
    modal.appendChild(inputAddPhoto)
    modal.appendChild(inputDeleteGallery)

    getProjetsModal();
  }
  
  // toggleModal = () => {
  //   const modalBox = document.querySelector(".modal-box");
  //   modalBox.classList.toggle("active");
  // }
    // const modalTriggers = document.querySelectorAll(".modal-trigger");
    // console.log(modalTriggers)
  //   modaleTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal));
  // }

  // const introductionSection = document.getElementById('introduction');
  // const portfolioArticle = introductionSection.childNodes[2]
  // introductionSection.insertBefore(modalLink, portfolioArticle.nextSibling)