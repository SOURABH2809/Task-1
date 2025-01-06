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

const addBtn = document.createElement("button");
addBtn.textContent = "Add Product";
addBtn.setAttribute(
  "style",
  `
    display: block;
    margin: 10px auto;
    padding: 10px 20px;
    font-size: 1em;
    font-weight: bold;
    background-color: rgb(84, 67, 193);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  `
);

const formContainer = document.createElement("div");
formContainer.setAttribute(
  "style",
  `
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    z-index: 1000;
  `
);

const form = document.createElement("form");
form.setAttribute(
  "style",
  `
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 400px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    gap: 10px;
  `
);

const IdLabel = document.createElement("label");
IdLabel.textContent = " Product Id :";
const IdInput = document.createElement("input");
IdInput.type = "number";
IdInput.style.borderRadius = "5px";
IdInput.style.padding = "5px";
IdInput.name = "Id";
IdInput.required = true;

const NameLabel = document.createElement("label");
NameLabel.textContent = "Product Name :";
const NameInput = document.createElement("input");
NameInput.style.borderRadius = "5px";
NameInput.style.padding = "5px";
NameInput.type = "text";
NameInput.name = "Name";
NameInput.required = true;

const DescriptionLabel = document.createElement("label");
DescriptionLabel.textContent = "Product Description :";
const DescriptionInput = document.createElement("input");
DescriptionInput.style.borderRadius = "5px";
DescriptionInput.style.padding = "5px";
DescriptionInput.type = "text";
DescriptionInput.name = "Description";
DescriptionInput.required = true;

const PriceLabel = document.createElement("label");
PriceLabel.textContent = "Product Price :";
const PriceInput = document.createElement("input");
PriceInput.style.borderRadius = "5px";
PriceInput.style.padding = "5px";
PriceInput.type = "number";
PriceInput.name = "Price";
PriceInput.required = true;

const QuantityLabel = document.createElement("label");
QuantityLabel.textContent = "Product Quantity :";
const QuantityInput = document.createElement("input");
QuantityInput.style.borderRadius = "5px";
QuantityInput.style.padding = "5px";
QuantityInput.type = "number";
QuantityInput.name = "Quantity";
QuantityInput.required = true;

const ImageLabel = document.createElement("label");
ImageLabel.textContent = "Product Image :";
const ImageInput = document.createElement("input");
ImageInput.style.borderRadius = "5px";
ImageInput.style.padding = "5px";
ImageInput.type = "link";
ImageInput.required = true;
ImageInput.name = "Image";

const submitBtn = document.createElement("button");
submitBtn.textContent = "Submit";
submitBtn.type = "submit";
submitBtn.setAttribute(
  "style",
  `
    margin-top: 10px;
    width:20%;
    margin-left:40%;
    padding: 5px;
    font-size: 15px;
    font-weight: bold;
    color: white;
    background-color: rgb(84, 67, 193);
    border: none;
    border-radius: 5px;
    cursor: pointer;
  `
);

const closeBtn = document.createElement("button");
closeBtn.textContent = "Close";
closeBtn.type = "button";
closeBtn.setAttribute(
  "style",
  `
    margin-top: 10px;
    align-item:center;
    margin-left:40%;
    width:20%;
    padding: 5px;
    font-size: 15px;
    font-weight: bold;
    color: white;
    background-color: red;
    border: none;
    border-radius: 5px;
    cursor: pointer;
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
    background-color: rgb(84, 67, 193); 
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
optionAsc.value = "Asc";
optionAsc.textContent = "Asc to Desc";

const optionDesc = document.createElement("option");
optionDesc.value = "Desc";
optionDesc.textContent = "Desc to Asc";

const grid = document.createElement("div");
grid.style.display = "grid";
grid.style.gridTemplateColumns = "repeat(4, 1fr)";
grid.style.gap = "30px";
grid.style.marginTop = "20px";
grid.style.margin = "40px";

const pagination = document.createElement("div");
pagination.setAttribute(
  "style",
  `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 20px 0;
  `
);

const prevButton = document.createElement("button");
prevButton.innerHTML = "←";
prevButton.disabled = true;
prevButton.setAttribute(
  "style",
  `
    padding: 10px 20px;
    border: none;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    background-color: rgb(84, 67, 193);
    font-size: 1.2em;
  `
);

const pageNumber = document.createElement("span");
pageNumber.textContent = "1";
pageNumber.setAttribute(
  "style",
  `
    font-size: 1.2em;
    font-weight: bold;
    border-radius : 5px;
    color: black;
    padding: 8px 16px;
    background-color: white;
  `
);

const nextButton = document.createElement("button");
nextButton.innerHTML = "→";
nextButton.setAttribute(
  "style",
  `
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: rgb(84, 67, 193);
    color: white;
    font-size: 1.2em;
  `
);

form.appendChild(IdLabel);
form.appendChild(IdInput);
form.appendChild(NameLabel);
form.appendChild(NameInput);
form.appendChild(DescriptionLabel);
form.appendChild(DescriptionInput);
form.appendChild(PriceLabel);
form.appendChild(PriceInput);
form.appendChild(QuantityLabel);
form.appendChild(QuantityInput);
form.appendChild(ImageLabel);
form.appendChild(ImageInput);

dropdown.appendChild(optionDefault);
dropdown.appendChild(optionPrice);
dropdown.appendChild(optionName);

priceDropdown.appendChild(optionLow);
priceDropdown.appendChild(optionHigh);

nameDropdown.appendChild(optionAsc);
nameDropdown.appendChild(optionDesc);

pagination.appendChild(prevButton);
pagination.appendChild(pageNumber);
pagination.appendChild(nextButton);

sortContainer.appendChild(sortLabel);
sortContainer.appendChild(dropdown);
sortContainer.appendChild(priceDropdown);
sortContainer.appendChild(nameDropdown);

searchContainer.appendChild(searchBar);
searchContainer.appendChild(searchButton);

form.appendChild(submitBtn);
form.appendChild(closeBtn);
formContainer.appendChild(form);

container.appendChild(title);

container.appendChild(addBtn);
container.appendChild(formContainer);

container.appendChild(searchContainer);
container.appendChild(sortContainer);
container.appendChild(grid);
container.appendChild(pagination);

root.appendChild(container);



//Fetch Data
let finaldata = [];
let currentPage = 1;
const productsPerPage = 8;

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

// Display Data
function displayProducts(products) {
  products.forEach((product) => {
    if (product.toggle === undefined) {
      product.toggle = true;
    }
  });

  grid.innerHTML = "";
  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;
  const Products = products
    .filter((product) => product.toggle !== false)
    .slice(start, end);

  if (Products.length === 0) {
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

  Products.forEach((product) => {
    if (!product.toggle) {
      return;
    }

    const card = document.createElement("div");
    card.setAttribute(
      "style",
      `
        border: 1px solid #ccc;
        border-radius: 15px;
        padding: 15px;
        text-align: center;
        background-color: white;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.34); 
        transition: all 0.3s ease-in-out;
        overflow: hidden;
        position: relative;
      `
    );

    const crossButton = document.createElement("button");
    crossButton.textContent = "✖";
    crossButton.setAttribute(
      "style",
      `
      position: absolute;
      top: 5px;
      right: 5px;
      color: white;
      border: none;
      border-radius: 50%;
      width: 20px;
      background-color:red;
      height: 20px;
      font-size: 12px;
      cursor: pointer;
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
      font-size: 13px; 
      background-color: #f8f9fa; 
      border-radius: 5px; 
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      text-align: center;
      margin:0;
    `
    );

    const PQContainer = document.createElement("div");
    PQContainer.setAttribute(
      "style",
      `
      justify-content: space-between; 
      align-items: center; 
      margin-top: 30px; 
      transition: all 0.3s ease-in-out;
    `
    );

    const price = document.createElement("p");
    price.textContent = `₹${product.price}`;
    price.setAttribute(
      "style",
      `
      font-weight: bold;
      padding-bottom: 10px;
      font-size: 15px;
      color: #333;
      margin: 0;
    `
    );

    const quantity = document.createElement("p");
    quantity.textContent = `Available: ${product.quantity}`;
    quantity.setAttribute(
      "style",
      `
      font-size: 15px;
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
    card.appendChild(crossButton);
    card.appendChild(img);

    card.appendChild(nameContainer);
    card.appendChild(dropdownContent);
    card.appendChild(PQContainer);
    card.appendChild(addToCartButton);

    grid.appendChild(card);

    crossButton.addEventListener("click", () => {
      product.toggle = false;
      displayProducts(products);
    });

    dropdownButton.addEventListener("click", () => {
      const isOpen = dropdownContent.style.display === "block";

      dropdownContent.style.display = isOpen ? "none" : "block";
      dropdownButton.textContent = isOpen ? "▼" : "▲";

      if (dropdownContent.style.display === "block") {
        PQContainer.style.display = "flex";
        PQContainer.style.marginTop = "none";
        price.style.fontSize = "14px";
        quantity.style.fontSize = "14px";
        price.style.paddingBottom = "none";
        nameContainer.style.marginBottom = "5px";
        img.style.height = "179px";
      } else {
        PQContainer.style.display = "block";
        PQContainer.style.marginTop = "30px";
        price.style.fontSize = "15px";
        quantity.style.fontSize = "15px";
        nameContainer.style.marginBottom = "25px";
        img.style.height = "200px";
      }
    });
  });

  pageNumber.textContent = currentPage;
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = end >= products.length;
}

// Pagination Button - Event Listeners
prevButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayProducts(filteredArray.length > 0 ? filteredArray : finaldata);
  }
});

nextButton.addEventListener("click", () => {
  if (
    currentPage * productsPerPage <
    (filteredArray.length > 0 ? filteredArray.length : finaldata.length)
  ) {
    currentPage++;
    displayProducts(filteredArray.length > 0 ? filteredArray : finaldata);
  }
});

// Form - Event Listeners
addBtn.addEventListener("click", () => {
  formContainer.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  formContainer.style.display = "none";
});

//Form Submit - Event Listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const productData = {
    id: IdInput.value,
    name: NameInput.value,
    description: DescriptionInput.value,
    price: parseFloat(PriceInput.value),
    quantity: parseInt(QuantityInput.value),
    image: ImageInput.value,
  };

  finaldata.push(productData);
  console.log("All products:", finaldata);
  alert("Product Added Successfully");

  form.reset();
  formContainer.style.display = "none";
});

let filteredArray = [...finaldata];

// Search - Event Listener
searchButton.addEventListener("click", () => {
  const searchValue = searchBar.value.toLowerCase();

  filteredArray = finaldata.filter((product) =>
    product.name.toLowerCase().includes(searchValue)
  );

  // Price Sorting - Event Listeners
  const PriceSort = priceDropdown.value;
  if (PriceSort === "low") {
    filteredArray.sort((a, b) => a.price - b.price);
  } else if (PriceSort === "high") {
    filteredArray.sort((a, b) => b.price - a.price);
  }

  // Name Sorting - Event Listeners
  const NameSort = nameDropdown.value;
  if (NameSort === "Asc") {
    filteredArray.sort((a, b) => a.name.localeCompare(b.name));
  } else if (NameSort === "Desc") {
    filteredArray.sort((a, b) => b.name.localeCompare(a.name));
  }

  currentPage = 1;
  displayProducts(filteredArray);
});

dropdown.addEventListener("change", (e) => {
  const selectedValue = e.target.value;
  priceDropdown.style.display = selectedValue === "Price" ? "block" : "none";
  nameDropdown.style.display = selectedValue === "Name" ? "block" : "none";
});

// Price Sorting - Event Listeners
priceDropdown.addEventListener("change", () => {
  if (filteredArray.length > 0) {
    filteredArray = [...filteredArray];
  } else {
    filteredArray = [...finaldata];
  }

  const PriceSort = priceDropdown.value;
  if (PriceSort === "low") {
    filteredArray.sort((a, b) => a.price - b.price);
  } else if (PriceSort === "high") {
    filteredArray.sort((a, b) => b.price - a.price);
  }

  currentPage = 1;
  displayProducts(filteredArray);
});

// Name Sorting - Event Listeners
nameDropdown.addEventListener("change", () => {
  if (filteredArray.length > 0) {
    filteredArray = [...filteredArray];
  } else {
    filteredArray = [...finaldata];
  }

  const NameSort = nameDropdown.value;
  if (NameSort === "Asc") {
    filteredArray.sort((a, b) => a.name.localeCompare(b.name));
  } else if (NameSort === "Desc") {
    filteredArray.sort((a, b) => b.name.localeCompare(a.name));
  }

  currentPage = 1;
  displayProducts(filteredArray);
});

//Added Responsiveness
const Mobile = window.matchMedia("(max-width: 550px)");
const Tablet = window.matchMedia("(min-width: 550px) and (max-width: 900px)");
const Laptop = window.matchMedia("(min-width: 900px) and (max-width: 1380px)");
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
