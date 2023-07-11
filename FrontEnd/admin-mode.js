const addPhotoContent = () => {

  const arrowLeft = document.createElement('img');
  arrowLeft.src = "./assets/icons/arrow-left.svg"
  arrowLeft.classList.add('icon-arrow-left');
  arrowLeft.addEventListener('click', () => {
    modalContentForm.classList.add('content-form-slide-right')
    setTimeout(() => {
      modalContentForm.classList.add('none');
      setTimeout(() => {
        const modalGallery = document.querySelector('.modal-content')
        modalGallery.classList.remove('modal-content-slide', 'none');
      }, 0);
    }, 300);
  });

  const modalContentForm = document.createElement('form');
  modalContentForm.classList.add('add-photo-form')

  const modalTitle2 = document.createElement('h3');
  modalTitle2.textContent = "Ajout photo";

// Input File

  const addPhotoContainer = document.createElement('div');
  addPhotoContainer.classList.add('add-photo-container');

  const addPhotoIcon = document.createElement('img');
  addPhotoIcon.src = "./assets/icons/add-photo.svg";
  
  const addPhotoButton = document.createElement('label');
  addPhotoButton.setAttribute('for', 'add-photo-input');
  addPhotoButton.classList.add('add-photo-button');
  addPhotoButton.innerHTML = "+ Ajouter photo";

  const addPhotoInputFile = document.createElement('input');
  addPhotoInputFile.type = "file";
  addPhotoInputFile.setAttribute('id', 'add-photo-input');

  const addPhotoText = document.createElement('p');
  addPhotoText.textContent = "jpg, png : 4mo max";
  addPhotoText.classList.add('add-photo-text');

// Input Title
  const inputTitleContainer = document.createElement('div');
  inputTitleContainer.classList.add('input-text-container', 'input-category-container');

  const inputLabelTitle = document.createElement('label');
  inputLabelTitle.textContent = "Titre"
  inputLabelTitle.setAttribute('for', 'add-photo-input-title');
  inputLabelTitle.classList.add('add-photo-input-text');

  const InputTitle = document.createElement('input');
  InputTitle.type = "text";
  InputTitle.setAttribute('id', 'add-photo-input-title');


// Input Category
  const inputCategoryContainer = document.createElement('div');
  inputCategoryContainer.classList.add('input-text-container', 'input-title-container');

  const inputLabelCategory = document.createElement('label');
  inputLabelCategory.textContent = "Catégorie"
  inputLabelCategory.setAttribute('for', 'add-photo-input-category');
  inputLabelCategory.classList.add('add-photo-input-text');

  const InputCategory = document.createElement('input');
  InputCategory.type = "text";
  InputCategory.setAttribute('id', 'add-photo-input-category');

//Div Line 
  const divLine = document.createElement('div');
  divLine.classList.add('line', 'add-photo-content-line')

// Input Submit 
  const inputAddPhoto = document.createElement('input');
  inputAddPhoto.type = 'submit';
  inputAddPhoto.value = 'Valider';
  inputAddPhoto.classList.add('input-submit', 'input-submit-add-photo');

  modalContentForm.appendChild(arrowLeft)
  modalContentForm.appendChild(modalTitle2);
  modalContentForm.appendChild(addPhotoContainer);
  addPhotoContainer.appendChild(addPhotoIcon);
  addPhotoContainer.appendChild(addPhotoButton);
  addPhotoContainer.appendChild(addPhotoInputFile);
  addPhotoContainer.appendChild(addPhotoText);

  modalContentForm.appendChild(inputTitleContainer)
  inputTitleContainer.appendChild(inputLabelTitle)
  inputTitleContainer.appendChild(InputTitle)
  
  modalContentForm.appendChild(inputCategoryContainer)
  inputCategoryContainer.appendChild(inputLabelCategory)
  inputCategoryContainer.appendChild(InputCategory)

  modalContentForm.appendChild(divLine)
  modalContentForm.appendChild(inputAddPhoto)

  return modalContentForm;
}

const modaleCreation = async (addPhotoGallery) => {
  const body = document.querySelector('body');
  const modalBox = document.createElement('section');
  modalBox.classList.add('modal-box');

  const modalBoxOverlay = document.createElement('div')
  modalBoxOverlay.classList.add('modal-box-overlay', 'modal-trigger')

  const modal = document.createElement('div');
  modal.classList.add('modal');

  const modalContent = document.createElement('div')
  modalContent.classList.add('modal-content')

  const closeIcon = document.createElement('img');
  closeIcon.src = "./assets/icons/icon-close.svg";
  closeIcon.classList.add('icon-close', 'modal-trigger');

  const modalTitle = document.createElement('h3');
  modalTitle.textContent = "Galerie photo";

  const divLine = document.createElement('div');
  divLine.classList.add('line');

  const inputAddPhoto = document.createElement('input');
  inputAddPhoto.type = 'submit';
  inputAddPhoto.value = 'Ajouter une photo';
  inputAddPhoto.classList.add('input-submit', 'button-add');
  inputAddPhoto.addEventListener('click', () => {
    modalContent.classList.add('modal-content-slide')
    setTimeout(() => {
      modalContent.classList.add('none');
      setTimeout(() => {
        const modalAddPhoto = addPhotoContent()
        modal.appendChild(modalAddPhoto)
      }, 0);
    }, 300);
  });

  const inputDeleteGallery = document.createElement('input');
  inputDeleteGallery.type = 'submit';
  inputDeleteGallery.value = 'Supprimer la galerie';
  inputDeleteGallery.classList.add('button-delete');
  inputDeleteGallery.addEventListener('click', () => {
    galleryModal.innerHTML = ""
  })

  body.appendChild(modalBox);
  modalBox.appendChild(modalBoxOverlay)
  modalBox.appendChild(modal);
  modal.appendChild(modalContent)
  modal.appendChild(closeIcon);
  modalContent.appendChild(modalTitle);
  modalContent.appendChild(divLine);
  modalContent.appendChild(inputAddPhoto);
  modalContent.appendChild(inputDeleteGallery);

  const galleryModal = await getProjetsModal();
  modalContent.insertBefore(galleryModal, divLine);

  closeModal(modalBox);
};


const closeModal = (modalBox) => {
  const modalTriggers = document.querySelectorAll('.modal-trigger');
  modalTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      modalBox.classList.add('close-modal');
    });
  });
};

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
  const modalLinkText = document.createElement('p');
  modalLinkText.textContent = "modifier";
  const modalLinkIcon = document.createElement('img');
  modalLinkIcon.src = "./assets/icons/edit.png";

  modalLink.appendChild(modalLinkText);
  modalLinkText.insertBefore(modalLinkIcon, modalLinkText.firstChild);
  portfolioTitle.appendChild(modalLink);

  modalLink.addEventListener('click', modaleCreation);
};

document.addEventListener('DOMContentLoaded', () => {
  const idUser = JSON.parse(localStorage.getItem('authToken'));
  if (idUser) {
    adminModeContent();
  }
});

const getProjetsModal = async () => {
  const galleryModal = document.createElement("div");
  galleryModal.innerHTML = '';
  galleryModal.classList.add('gallery-modal');

  const response = await fetch("http://localhost:5678/api/works");
  const data = await response.json();

  data.forEach((element) => {
    const projectContainer = document.createElement('figure');
    projectContainer.classList.add('project-container');
    const imgElement = document.createElement('img');
    imgElement.src = element.imageUrl;
    imgElement.classList.add('gallery-modal-img');
    const titleElement = document.createElement('figcaption');
    titleElement.textContent = "éditer";
    const iconDelete = document.createElement('img');
    iconDelete.src = './assets/icons/trash-can.svg';
    iconDelete.classList.add('modal-img-icon', 'trash-can-icon');

    iconDelete.addEventListener('click', () => {
      projectContainer.remove();
    });

    projectContainer.appendChild(iconDelete);
    projectContainer.appendChild(imgElement);
    projectContainer.appendChild(titleElement);
    galleryModal.appendChild(projectContainer);
  });

  const firstProject = galleryModal.childNodes[0];
  const firstIconDelete = firstProject.firstChild;
  const iconMove = document.createElement('img');
  iconMove.src = './assets/icons/move.svg';
  iconMove.classList.add('modal-img-icon', 'move-icon');
  firstProject.insertBefore(iconMove, firstIconDelete);

  return galleryModal;
};

