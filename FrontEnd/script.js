const getProjects = async(category = null) =>  {
  const response = await fetch("http://localhost:5678/api/works");
  const data = await response.json();

  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = "";

  data.forEach((element) => {
    if (category === null || category === "Tous" || element.category.name === category) {
      const article = document.createElement('figure');
      article.setAttribute('data-project-id', element.id);
      const imgElement = document.createElement('img');
      imgElement.src = element.imageUrl;
      const titleElement = document.createElement('figcaption');
      titleElement.innerText = element.title; 
      article.appendChild(imgElement);
      article.appendChild(titleElement);
      gallery.appendChild(article);
    }
  });
}

createFilterButtons = () => {
  fetch('http://localhost:5678/api/categories')
  .then((res) => res.json())
  .then((data) => {
    const categories = data.map(category => category.name);
    categories.unshift("Tous");

    categories.forEach((category) => {
      const button = document.createElement('button');
      button.innerText = category;
      button.addEventListener('click', () => {
        getProjects(category);
      });
    const filterButtonsContainer = document.getElementById('buttons-container');
    filterButtonsContainer.appendChild(button);
    });
  });
}

createFilterButtons();

getProjects();



































    





