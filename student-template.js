"use strict";

// Практическая работа №7
// Тема: DOM и управление элементами страницы.
// Заполните только участки TODO.
// Имена функций и объект window.domLab не изменяйте.

// 1. Изменение текста заголовка.
// Найдите #main-title, запишите text в textContent и верните новый текст.
function changeTitle(text) {
  const title = document.querySelector("#main-title");
  title.textContent = text;
  return title.textContent;
}

// 2. Показать / скрыть информационный блок.
// Найдите #info-block и переключите класс hidden.
// Верните true, если после переключения блок видим, иначе false.
function toggleInfo() {
  const block = document.querySelector("#info-block");
  block.classList.toggle("hidden");
  return !block.classList.contains("hidden");
}

// 3. Изменение ссылки.
// Найдите #main-link.
// Запишите label в textContent, а url в атрибут href.
// Верните найденный элемент ссылки.
function updateLink(url, label) {
  const link = document.querySelector("#main-link");
  link.textContent = label;
  link.setAttribute("href", url);
  return link;
}

// 4. Динамический пункт списка.
// Создайте li со span и кнопкой "Удалить".
// span должен содержать text.
// Кнопка должна удалять созданный li по click.
// Добавьте li в #task-list и верните созданный li.
function addListItem(text) {
  const item = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  const button = document.createElement("button");
  button.textContent = "Удалить";
  button.addEventListener("click", () => {
    item.remove();
  });

  item.append(span, button);

  const list = document.querySelector("#task-list");
  list.append(item);

  return item;
}

// 5. Карточка товара.
// Верните article.product-card, внутри которого находятся:
// h3 с product.name и p с текстом "Цена: PRICE ₸".
function createProductCard(product) {
  const card = document.createElement("article");
  card.classList.add("product-card");

  const heading = document.createElement("h3");
  heading.textContent = product.name;

  const price = document.createElement("p");
  price.textContent = `Цена: ${product.price} ₸`;

  card.append(heading, price);
  return card;
}

// 6. Вывод массива товаров.
// Найдите #products, очистите его содержимое и для каждого объекта
// добавьте карточку через createProductCard().
// Верните количество отображённых карточек.
function renderProducts(products) {
  const container = document.querySelector("#products");
  container.replaceChildren();

  for (const product of products) {
    container.append(createProductCard(product));
  }

  return products.length;
}

window.domLab = {
  changeTitle,
  toggleInfo,
  updateLink,
  addListItem,
  createProductCard,
  renderProducts,
};