

// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
  console.log(e,"div is active")
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const list = await response.json();
  const faqContainer = document.getElementById("faq");

list.forEach((item) => {
  
  const titleDiv = document.createElement("div");
  titleDiv.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("active")
    console.log("div is active", event.target)  });
  titleDiv.setAttribute("class", "title");
  titleDiv.innerHTML = `<p class="titleText">${item.title + "?"}</p>`;

  const descDiv = document.createElement("div");
  descDiv.setAttribute("class", "description");
  descDiv.innerHTML = item.body;

  faqContainer.appendChild(titleDiv);
  titleDiv.appendChild(descDiv)

})

  
}
getPosts()



