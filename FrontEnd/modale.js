export const addProject = () => {

    const arrowLeft = document.createElement('img');
    arrowLeft.src = "./assets/icons/arrow-left.svg"
    arrowLeft.classList.add('icon-arrow-left');
  
    const modalEditGallery = document.querySelector('.modal-edit-gallery')
    arrowLeft.addEventListener('click', () => {
      modalAddProjectForm.style.display = "none";
      modalEditGallery.style.removeProperty('display')
    });
  
    const modalAddProjectForm = document.createElement('form');
    modalAddProjectForm.classList.add('add-photo-form')
  
    const modalAddProjectTitle = document.createElement('h3');
    modalAddProjectTitle.textContent = "Ajout photo";
  
  // Input File
    const addImgContainer = document.createElement('div');
    addImgContainer.classList.add('add-photo-container');
  
    const addImgIcon = document.createElement('img');
    addImgIcon.src = "./assets/icons/add-photo.svg";
    
    const addImgButton = document.createElement('label');
    addImgButton.setAttribute('for', 'add-photo-input');
    addImgButton.classList.add('add-photo-button');
    addImgButton.innerHTML = "+ Ajouter photo";
  
    const inputAddImg = document.createElement('input');
    inputAddImg.type = "file";
    inputAddImg.setAttribute('id', 'add-photo-input');
  
    const addPhotoText = document.createElement('p');
    addPhotoText.textContent = "jpg, png : 4mo max";
    addPhotoText.classList.add('add-photo-text');
  
    inputAddImg.addEventListener('change',(e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
    
      reader.onload = function(event) {
        const dataURL = event.target.result;
  
        const imagePreview = document.createElement('img');
        imagePreview.classList.add('img-preview')
        
        imagePreview.src = dataURL;
  
        addImgContainer.innerHTML = '';
        addImgContainer.appendChild(imagePreview);
      };
      reader.readAsDataURL(file);
    });
  
  // Input Title
    const inputTitleContainer = document.createElement('div');
    inputTitleContainer.classList.add('input-text-container', 'input-category-container');
  
    const inputTitleLabel = document.createElement('label');
    inputTitleLabel.textContent = "Titre"
    inputTitleLabel.setAttribute('for', 'add-photo-input-title');
    inputTitleLabel.classList.add('add-photo-input-text');
  
    const inputTitle = document.createElement('input');
    inputTitle.type = "text";
    inputTitle.setAttribute('id', 'add-photo-input-title');
  
  
  // Input Category
    const inputCategoryContainer = document.createElement('div');
    inputCategoryContainer.classList.add('input-text-container', 'input-title-container');
  
    const inputCategoryLabel = document.createElement('label');
    inputCategoryLabel.textContent = "Catégorie";
    inputCategoryLabel.setAttribute('for', 'add-photo-input-category');
    inputCategoryLabel.classList.add('add-photo-input-text');
  
    const inputCategory = document.createElement('select');
    inputCategory.setAttribute('id', 'add-photo-input-category');
  
    fetch('http://localhost:5678/api/categories')
        .then(response => response.json())
        .then(data => {
          data.forEach(category => {
            const option = document.createElement('option');
            option.value = category.name; 
            option.textContent = category.name;
            inputCategory.appendChild(option);
          });
      })
      .catch(error => {
        console.error('Erreur lors de la requête GET :', error);
      });
  
  //Div Line 
    const divLine = document.createElement('div');
    divLine.classList.add('line', 'add-photo-content-line')
  
  // Input Submit 
    const inputSubmitProject = document.createElement('input');
    inputSubmitProject.type = 'submit';
    inputSubmitProject.value = 'Valider';
    inputSubmitProject.classList.add('input-submit', 'input-submit-add-photo');
  
    modalAddProjectForm.appendChild(arrowLeft)
    modalAddProjectForm.appendChild(modalAddProjectTitle);
    modalAddProjectForm.appendChild(addImgContainer);
    addImgContainer.appendChild(addImgIcon);
    addImgContainer.appendChild(addImgButton);
    addImgContainer.appendChild(inputAddImg);
    addImgContainer.appendChild(addPhotoText);
  
    modalAddProjectForm.appendChild(inputTitleContainer)
    inputTitleContainer.appendChild(inputTitleLabel)
    inputTitleContainer.appendChild(inputTitle)
    
    modalAddProjectForm.appendChild(inputCategoryContainer)
    inputCategoryContainer.appendChild(inputCategoryLabel)
    inputCategoryContainer.appendChild(inputCategory)
  
    modalAddProjectForm.appendChild(divLine)
    modalAddProjectForm.appendChild(inputSubmitProject)
  
    const checkFormValidity = () => {
    const inputs = [inputAddImg, inputTitle, inputCategory];
    const isFormValid = inputs.every(input => input.value !== '');
    inputSubmitProject.style.backgroundColor = isFormValid ? '#1D6154' : '';
    };
  
    inputAddImg.addEventListener('input', checkFormValidity);
    inputTitle.addEventListener('input', checkFormValidity);
    inputCategory.addEventListener('input', checkFormValidity);
  
    inputSubmitProject.addEventListener('click', (event) => {
      event.preventDefault();
  
    if (inputAddImg.files.length === 0 || inputTitle.value === '' || inputCategory.value === '') {
      alert("Veuillez remplir tous les champs du formulaire.");
      return;
    }
  
    const formData = new FormData();
    formData.append('photo', inputAddImg.files[0]);
    formData.append('title', inputTitle.value);
    formData.append('category', inputCategory.value);
  
    const token = localStorage.getItem('authToken')
    fetch('http://localhost:5678/api/works', {
      method: 'POST',
      body: formData,
      Accept: '*/*',
      Authorization: `Bearer ${token}`
    })
    .then(response => {
      if (response.ok) {
        alert('Formulaire envoyé avec succès.');
      } else {
        alert('Erreur lors de l\'envoi du formulaire.');
      }
    })
    .catch(error => {
      console.error('Erreur lors de l\'envoi de la requête POST :', error);
    });
  });
  
    return modalAddProjectForm;
  }

export const modaleCreation = async () => {
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
  
    const inputSubmitProject = document.createElement('input');
    inputSubmitProject.type = 'submit';
    inputSubmitProject.value = 'Ajouter une photo';
    inputSubmitProject.classList.add('input-submit', 'button-add');
    inputSubmitProject.addEventListener('click', () => {
      modalContent.style.display = "none";
      const addPhotoGallery = addProject()
      modal.appendChild(addPhotoGallery)
    })
  
    const inputDeleteGallery = document.createElement('input');
    inputDeleteGallery.type = 'submit';
    inputDeleteGallery.value = 'Supprimer la galerie';
    inputDeleteGallery.classList.add('button-delete');
  
    body.appendChild(modalBox);
    modalBox.appendChild(modalBoxOverlay)
    modalBox.appendChild(modal);
    modal.appendChild(modalContent)
    modal.appendChild(closeIcon);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(divLine);
    modalContent.appendChild(inputSubmitProject);
    modalContent.appendChild(inputDeleteGallery);
  
    const galleryModal = await getProjetsModal();
    modalContent.insertBefore(galleryModal, divLine);
  
    closeModal(modalBox);
  };
  
  
export const closeModal = (modalBox) => {
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    modalTriggers.forEach((trigger) => {
      trigger.addEventListener('click', () => {
        modalBox.classList.add('close-modal');
      });
    });
  };

export const getProjetsModal = async () => {
    const galleryModal = document.createElement("div");
    galleryModal.innerHTML = '';
    galleryModal.classList.add('gallery-modal');
  
    const response = await fetch("http://localhost:5678/api/works");
    const data = await response.json();
  
    data.forEach((element) => {
      const projectContainer = document.createElement('figure');
      projectContainer.setAttribute('data-project-id', element.id);
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
        const projectId = element.id; 
        const confirmDelete = confirm("Êtes-vous sûr de vouloir supprimer ce projet ?");
        if (confirmDelete) {
          deleteProject(projectId, token);
        }
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
  
  
export const deleteProject = async (projectId, token) => {
    const token = localStorage.getItem('authToken')
  try {
    const response = await fetch(`http://localhost:5678/api/works/${projectId}`, {
      method: 'DELETE',
      Accept: '*/*',
      Authorization: `Bearer ${token}`
    });

    if (response.ok) {
      console.log('Projet supprimé avec succès');
      const projectElement = document.querySelector(`[data-project-id="${projectId}"]`);
      if (projectElement) {
        projectElement.remove();
      }v
    } else {
      console.error('Une erreur s\'est produite lors de la suppression du projet');
    }
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la suppression du projet', error);
  }
};