document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.boxSizing = "border-box";
document.body.style.fontFamily = "'Roboto', sans-serif";
document.body.style.background = "linear-gradient(90deg, rgb(23, 20, 69) 0%, rgb(107, 107, 243) 0%, rgb(255, 255, 255) 100%)";

const root = document.getElementById("root");

const container = document.createElement("div");
container.style.padding = "20px";

const title = document.createElement("h1");
title.textContent = "MobileMinds";
title.setAttribute(
  "style",
  `
    text-align: center;
    margin-top: 0;
    color: white;  
    font-family: Arial, sans-serif;
    font-size: 3em;
    font-weight: bold;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
    padding: 20px 0;
    letter-spacing: 2px;
`
);

const searchContainer = document.createElement("div");
searchContainer.setAttribute(
  "style",
  `
    display: flex; 
    justify-content: center; 
    align-items: center; 
    gap: 10px; 
    margin: 20px 0;
  `
);

const searchBar = document.createElement("input");
searchBar.setAttribute("type", "text");
searchBar.setAttribute("placeholder", "Search products...");
searchBar.setAttribute(
  "style",
  `
    padding: 10px; 
    width: 300px; 
    border: 1px solid #ccc; 
    border-radius: 5px;
  `
);

const searchButton = document.createElement("button");
searchButton.textContent = "Search";
searchButton.setAttribute(
  "style",
  `
    padding: 10px 20px; 
    background-color:rgb(84, 67, 193); 
    color: white; 
    border: none; 
    border-radius: 5px; 
    cursor: pointer;
  `
);

const sortContainer = document.createElement("div");
sortContainer.setAttribute(
  "style",
  `
    display: flex; 
    justify-content: center; 
    margin-top: 10px;
    gap: 20px;
  `
);

const sortLabel = document.createElement("label");
sortLabel.textContent = "Sort by: ";
sortLabel.setAttribute(
  "style",
  `
    color: black; 
    font-size: 18px;
  `
);

const dropdown = document.createElement("select");
dropdown.setAttribute(
  "style",
  `
    padding: 4px; 
    border: none; 
    border-radius: 5px;
  `
);

const optionDefault = document.createElement("option");
optionDefault.value = "";
optionDefault.textContent = "Select";

const optionPrice = document.createElement("option");
optionPrice.value = "Price";
optionPrice.textContent = "Sort by Price";

const optionName = document.createElement("option");
optionName.value = "Name";
optionName.textContent = "Sort by Name";

const priceDropdown = document.createElement("select");
priceDropdown.setAttribute(
  "style",
  `
    padding: 4px; 
    border: none; 
    border-radius: 5px;
    display: none;
  `
);

const optionLow = document.createElement("option");
optionLow.value = "low";
optionLow.textContent = "Low to High";

const optionHigh = document.createElement("option");
optionHigh.value = "high";
optionHigh.textContent = "High to Low";

const nameDropdown = document.createElement("select");
nameDropdown.setAttribute(
  "style",
  `
    padding: 4px; 
    border: none; 
    border-radius: 5px;
    display: none;
  `
);

const optionAsc = document.createElement("option");
optionAsc.value = "asc";
optionAsc.textContent = "Asc to Desc";

const optionDesc = document.createElement("option");
optionDesc.value = "desc";
optionDesc.textContent = "Desc to Asc";


// Grid Container
const grid = document.createElement("div");
grid.style.display = "grid";
grid.style.gridTemplateColumns = "repeat(4, 1fr)";
grid.style.gap = "30px";
grid.style.marginTop = "20px";
grid.style.margin = "40px";

dropdown.appendChild(optionDefault);
dropdown.appendChild(optionPrice);
dropdown.appendChild(optionName);

priceDropdown.appendChild(optionLow);
priceDropdown.appendChild(optionHigh);

nameDropdown.appendChild(optionAsc);
nameDropdown.appendChild(optionDesc);

searchContainer.appendChild(searchBar);
searchContainer.appendChild(searchButton);

sortContainer.appendChild(sortLabel);
sortContainer.appendChild(dropdown);
sortContainer.appendChild(priceDropdown);
sortContainer.appendChild(nameDropdown);

container.appendChild(title);
container.appendChild(searchContainer);
container.appendChild(sortContainer);
container.appendChild(grid);

root.appendChild(container);


//getData
let finaldata = [];

async function getData(Callback) {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    finaldata = data.products;

    return Callback(finaldata);
  } catch (error) {
    console.error(error);
  }
}


//displayData
function displayProducts(products) {
  grid.innerHTML = "";

  if (products.length === 0) {
    const errorDiv = document.createElement("div");
    errorDiv.setAttribute(
      "style",
      `
      text-align: center; 
      color: white; 
      font-size: 1.5em; 
      font-weight: bold; 
      text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5); 
      width: 100%;
    `
    );

    const errorMessage = document.createElement("h3");
    errorMessage.textContent = "No items found!!";

    errorDiv.appendChild(errorMessage);
    grid.appendChild(errorDiv);
    return;
  }

  products.forEach((product) => {
    const card = document.createElement("div");
    card.setAttribute(
      "style",
      `
      border: 1px solid #ccc; 
      border-radius: 15px; 
      padding: 15px; 
      text-align: center; 
      position: relative; 
      background-color: white; 
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.34); 
      transition: all 0.3s ease-in-out;
      overflow: hidden;
    `
    );

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    img.setAttribute(
      "style",
      `
      width: 80%;
      height: 200px;
      object-fit: cover;
      margin-bottom: 10px;
      `
    );

    const nameContainer = document.createElement("div");
    nameContainer.setAttribute(
      "style",
      `
      display: flex; 
      justify-content: center; 
      align-items: center; 
      margin-bottom: 20px;
      font-size:15px;
    `
    );

    const name = document.createElement("h3");
    name.textContent = product.name;
    name.style.margin = "0";

    const dropdownButton = document.createElement("button");
    dropdownButton.textContent = "▼";
    dropdownButton.setAttribute(
      "style",
      `
      margin-left: 10px;
      border: none; 
      font-size: 0.8em; 
      cursor: pointer; 
      border-radius: 5px; 
      background-color: lightgrey;
    `
    );

    const dropdownContent = document.createElement("div");
    dropdownContent.textContent = product.description;
    dropdownContent.setAttribute(
      "style",
      `
      display: none; 
      padding: 2px; 
      font-size: 12px; 
      background-color: #f8f9fa; 
      border-radius: 5px; 
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      text-align: left;
      margin:0;
    `
    );

    const PQContainer = document.createElement("div");
    PQContainer.setAttribute(
      "style",
      `
      display: flex; 
      justify-content: space-between; 
      align-items: center; 
      margin-top: 10px; 
      transition: all 0.3s ease-in-out;
    `
    );

    const price = document.createElement("p");
    price.textContent = `₹${product.price}`;
    price.setAttribute(
      "style",
      `
      font-weight: bold;
      color: #333;
      margin: 0;
    `
    );

    const quantity = document.createElement("p");
    quantity.textContent = `Available: ${product.quantity}`;
    quantity.setAttribute(
      "style",
      `
      font-size: 0.9em;
      color: #555;
      margin: 0;
    `
    );

    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.setAttribute(
      "style",
      `
      background-color: rgb(25, 184, 62); 
      color: white; 
      border: none; 
      padding: 5px 7px; 
      cursor: pointer; 
      border-radius: 5px; 
      margin-top: 10px;
    `
    );

    nameContainer.appendChild(name);
    nameContainer.appendChild(dropdownButton);

    PQContainer.appendChild(price);
    PQContainer.appendChild(quantity);

    card.appendChild(img);
    card.appendChild(nameContainer);
    card.appendChild(dropdownContent);
    card.appendChild(PQContainer);
    card.appendChild(addToCartButton);

    grid.appendChild(card);

    dropdownButton.addEventListener("click", () => {
      const isOpen = dropdownContent.style.display === "block";
      dropdownContent.style.display = isOpen ? "none" : "block";
      dropdownButton.textContent = isOpen ? "▼" : "▲";
    });

  });
}


//Event Listeners
dropdown.addEventListener("change", (e) => {
  const selectedValue = e.target.value;
  priceDropdown.style.display = selectedValue === "Price" ? "block" : "none";
  nameDropdown.style.display = selectedValue === "Name" ? "block" : "none";
});

searchButton.addEventListener("click", () => {
  const searchTerm = searchBar.value.toLowerCase();
  const filteredProducts = finaldata.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );
  displayProducts(filteredProducts);
});

priceDropdown.addEventListener("change", () => {
  const selectedSort = priceDropdown.value;
  const sortedProducts = [...finaldata];

  if (selectedSort === "low") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (selectedSort === "high") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  displayProducts(sortedProducts);
});

nameDropdown.addEventListener("change", () => {
  const selectedSort = nameDropdown.value;
  const sortedProducts = [...finaldata];

  if (selectedSort === "Asc") {
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (selectedSort === "Desc") {
    sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
  }

  displayProducts(sortedProducts);
});


//Added Responsiveness
const Mobile = window.matchMedia("(max-width: 550px)");
const Tablet = window.matchMedia(
  "(min-width: 550px) and (max-width: 900px)"
);
const Laptop = window.matchMedia(
  "(min-width: 900px) and (max-width: 1380px)"
);
const Desktop = window.matchMedia("(min-width: 1400px)");

function adjustGridLayout() {
  if (Mobile.matches) {
    grid.style.gridTemplateColumns = "repeat(1, 1fr)";
  } else if (Tablet.matches) {
    grid.style.gridTemplateColumns = "repeat(2, 1fr)";
  } else if (Laptop.matches) {
    grid.style.gridTemplateColumns = "repeat(3, 1fr)";
  } else if (Desktop.matches) {
    grid.style.gridTemplateColumns = "repeat(4, 1fr)";
  }
}

adjustGridLayout();
Mobile.addEventListener("change", adjustGridLayout);
Tablet.addEventListener("change", adjustGridLayout);
Laptop.addEventListener("change", adjustGridLayout);
Desktop.addEventListener("change", adjustGridLayout);

getData(displayProducts);
