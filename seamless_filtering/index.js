let ulElement = document.querySelector("ul");

const handleSearch = (_value, data) =>
  data && data.filter((value) => value.includes(_value));

const handleOnInput = (e) => {
  const { value } = e;
  let filteredElement = value && handleSearch(value, foods);
  filteredElement.length > 0
    ? handleFoodList(filteredElement)
    : handleFoodList(foods);
};

const handleFoodList = (foodItems) => {
  ulElement.innerHTML = "";
  foodItems &&
    foodItems.forEach((value) => {
      const liElement = `<li class="list-group-item list-group-item-action">${value}</li>`;
      ulElement.innerHTML += liElement;
    });
};
handleFoodList(foods);
