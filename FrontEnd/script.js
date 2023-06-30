async function getProjets(categoryFilter = null) {
  const response = await fetch("http://localhost:5678/api/works");
  const data = await response.json();

  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = "";

  data.forEach((element) => {
    if (categoryFilter === null || categoryFilter === "Tous" || element.category.name === categoryFilter) {
      const article = document.createElement('figure');
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

function createFilterButtons() {
  fetch('http://localhost:5678/api/categories')
  .then((res) => res.json())
  .then((data) => {
    const categories = data.map(element => element.name);
    categories.unshift("Tous");

    const filterButtonsContainer = document.getElementById("filter-buttons");

    categories.forEach((category) => {
      const button = document.createElement("button");
      button.innerText = category;
      button.addEventListener("click", () => {
        getProjets(category);
      });
    filterButtonsContainer.appendChild(button);
    });
  });
}

createFilterButtons();

getProjets();

























    





