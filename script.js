function HashStorage() {
  this.storage = {}

  this.addValue = function(key, value) {
    this.storage[key.toLowerCase()] = value;
  }

  this.getValue = function(key) {
    return (key.toLowerCase() in this.storage) ? this.storage[key.toLowerCase()] : undefined; 
  }

  this.deleteValue = function(key) {
    key = key.toLowerCase();
    if (key in this.storage) {
      delete this.storage[key];
      //Reflect.deleteProperty(this.storage, key);
      return true;
    }
    return false;
  }
  
  this.getKeys = function() {
    return Object.keys(this.storage);
  }
}

const coctailsStorage = new HashStorage()

coctailsStorage.addValue('пеликан', {
  'алкогольный': 'нет',
  'ингредиенты': ['Гренадин Monin 10мл', 'Клубничный сироп Monin 10мл', 'Персиковый сок 150мл', 'Лимонный сок 15мл', 'Банан 110г', 'Клубника 50г', 'Дробленый лед'],
  'рецепт': 'Положи в блендер очищенную и нарезанную половинку банана и клубнику 2 ягоды. Налей лимонный сок 15 мл, гренадин 10 мл, клубничный сироп 10 мл и персиковый сок 150 мл. Добавь в блендер совок дробленого льда и взбей. Перелей в хайбол. Укрась кружком банана и половинкой клубники на коктейльной шпажке.',
  'описание': 'Вам нравятся смузи? Тогда попробуйте этот ягодный, фруктовый и сладкий коктейль на основе сока, безалкогольный.',
});

coctailsStorage.addValue('черный русский', {
  'алкогольный': 'да',
  'ингредиенты': ['Водка Finlandia 50мл', 'Кофейный ликер 25мл', 'Лед в кубиках 120 г'],
  'рецепт': 'Наполни стакан кубиками льда доверху, затем налей кофейный ликер 25мл, водку 50мл и размешай коктейльной ложкой',
  'описание': 'Это простой микс из водки и кофейного ликёра. На вкус он сладковатый и, разумеется, кофейный. Считается, что именно с "Черного русского" началось шествие кофейного ликёра по рецептам коктейлей. Этот коктейль обрел мировую популярность благодаря фильму “Большой Лебовски”. К России эти коктейли имеют отдаленное отношение, а так называются из-за основного ингредиента – водки.',
});

coctailsStorage.addValue('б-52', {
  'алкогольный': 'да',
  'ингредиенты': ['Кофейный ликер Fruko Shulz 15мл', 'Айриш крим 15мл', 'Трипл сек Fruko Shulz 15мл'],
  'рецепт': 'Налей в стопку кофейный ликер 15 мл. Используя коктейльную ложку, уложи слой айриш крим 15 мл и слой ликера трипл сек 15 мл. Поджигай, вооружайся трубочками и угощай!',
  'описание': 'Хотите попробовать "Б-52"? Это крепкий сладкий шот на кофейном ликёре с добавлением айриш крима и трипл сека. На вкус он сладкий и сливочно-кофейный. Верхний слой шота поджигается, и коктейль нужно быстро выпить через трубочку: не только вкусно, но и зрелищно.',
});

coctailsStorage.addValue('маргарита', {
  'алкогольный': 'да',
  'ингредиенты': ['Серебряная текила 50мл', 'Трипл сек Fruko Shulz 25мл', 'Сахарный сироп 10мл', 'Лаймовый сок 30мл', 'Лайм 10г', 'Соль 2г', 'Лед в кубиках 200г'],
  'рецепт': 'Сделай на бокале для маргариты соленую окаемку. Налей в шейкер лаймовый сок 30 мл, сахарный сироп 10 мл, ликер трипл сек 25 мл и серебряную текилу 50 мл. Наполни шейкер кубиками льда и взбей. Перелей через стрейнер в охлажденный бокал для маргариты. Укрась кружком лайма.',
  'описание': 'Это солоноватый кислый коктейль на текиле с лаймовым соком. Бармены во всем мире очень любят создавать твисты на этот классический коктейль, но окаёмка из соли практически всегда остаётся неизменным украшением "Маргариты".',
});

coctailsStorage.addValue('гоголь-моголь', {
  'алкогольный': 'нет',
  'ингредиенты': ['Желток перепелиного яйца 5шт.', 'Молоко 150мл', 'Нежирные сливки 50мл', 'Мед 20мл', 'Мускатный орех молотый 1г', 'Печенье 10г'],
  'рецепт': 'Смешай в питчере желтки перепелиных яиц 5 шт. и мед 20 мл. Налей нежирные сливки 50 мл и молоко 150 мл. Нагрей коктейль паром от кофемашины, не доводя до кипения. Перелей в бокал для ирландского кофе. Добавь щепотку мускатного ореха молотого и укрась печеньем.',
  'описание': 'Вам нравятся десертные горячие коктейли? Тогда попробуйте этот сливочный, пряный и сладкий коктейль на основе молока, безалкогольный. Выбор космонавтов',
});


const btnEnterDrinkRecipe = document.getElementById('btnEnterDrinkRecipe');
const btnGetDrinkInfo = document.getElementById('btnGetDrinkInfo');
const btnDelRecipe = document.getElementById('btnDelRecipe');
const btnGetListOfDrinks = document.getElementById('btnGetListOfDrinks');

function capitalizeWord(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function createDrinkInfoCard() {
  const drinkInfoCard = document.createElement('div');
  drinkInfoCard.classList.add('card');
  document.body.prepend(drinkInfoCard);
}

function enterDrinkRecipe() {
  const drinkCard = {};
  let ingridientsArray = [];
  let isItAllIngridients = true;
  const drinkName = prompt('Введите название напитка');
  if (drinkName === '' || drinkName === null) return;
  drinkCard['алкогольный'] = prompt('Этот напиток алкогольный? Введите да / нет');

  while (isItAllIngridients) {
    ingridientsArray.push(prompt('Введите ингредиенты напитка'));
    drinkCard['ингредиенты'] = ingridientsArray;
    isItAllIngridients = confirm(`Добавить в список еще один ингредиент для приготовления напитка ${drinkName}?`);
  }
  drinkCard['рецепт'] = prompt('Введите рецепт напитка');
  drinkCard['описание'] = prompt('Введите описание напитка');

  coctailsStorage.addValue(drinkName, drinkCard);
}
btnEnterDrinkRecipe.addEventListener('click', enterDrinkRecipe);


function buildIngredientsList(drink, node) {
  const ingredientsList = document.createElement('ul');
  coctailsStorage.getValue(drink)['ингредиенты'].forEach(ingredient => {
    let ingredientsListItem = document.createElement('li');
    ingredientsListItem.classList.add('ingredients-item');
    ingredientsListItem.textContent = ingredient;
    ingredientsList.append(ingredientsListItem);
  });
  node.append(ingredientsList);
}


function showRecipeDescriptionOnPage(drink, node) {
  const recipeTitle = document.createElement('h3');
  recipeTitle.textContent = 'Рецепт приготовления';
  node.append(recipeTitle);
  const recipeContent = document.createElement('p');
  recipeContent.textContent = coctailsStorage.getValue(drink)['рецепт'];
  recipeTitle.after(recipeContent);
}


function showDrinkDescriptionOnPage(drink, node) {
  const drinkDescriptionTitle = document.createElement('h3');
  drinkDescriptionTitle.textContent = 'Описание напитка';
  node.append(drinkDescriptionTitle);
  const drinkDescriptionContent = document.createElement('p');
  drinkDescriptionContent.textContent = coctailsStorage.getValue(drink)['описание'];
  drinkDescriptionTitle.after(drinkDescriptionContent);
}

function buildAvailableDrinksList(node) {
  const availableDrinksList = document.createElement('ul');
  coctailsStorage.getKeys().forEach(drink => {
    let availableDrinksListItem = document.createElement('li');
    availableDrinksListItem.classList.add('drinks-item');
    availableDrinksListItem.textContent = capitalizeWord(drink);
    availableDrinksList.append(availableDrinksListItem);
  });
  node.append(availableDrinksList);
}

function showDrinkRecipeOnPage() {
  const drinkName = prompt('Введите название напитка');
  let title = null;
  if (drinkName === '' || drinkName === null) return;
      if (document.body.contains(document.querySelector('.card'))) {
      document.querySelector('.card').remove();
    }
  createDrinkInfoCard();
  const drinkInfoCard = document.querySelector('.card');

  if (coctailsStorage.getKeys().includes(drinkName.toLowerCase())) {
    title = document.createElement('h2');
    title.innerHTML = `Коктейль <span>"${capitalizeWord(drinkName)}"</span> <span>(алкогольный: ${coctailsStorage.getValue(drinkName)['алкогольный']})</span>`;
    drinkInfoCard.append(title);
    const ingredientsTitle = document.createElement('h3');
    ingredientsTitle.textContent = `Необходимые ингредиенты:`;
    title.after(ingredientsTitle);
    buildIngredientsList(drinkName, drinkInfoCard);
    showRecipeDescriptionOnPage(drinkName, drinkInfoCard);
    showDrinkDescriptionOnPage(drinkName, drinkInfoCard);
  } else {
    title = document.createElement('h4');
    title.classList.add('alarm');
    title.innerHTML = `Напитка <span>"${capitalizeWord(drinkName)}"</span> в базе не существует. Повторите ввод.`;
    drinkInfoCard.append(title);
    setTimeout(() => drinkInfoCard.remove(), 3000);
  }
}
btnGetDrinkInfo.addEventListener('click', showDrinkRecipeOnPage);


function delDrinkRecipe() {
  const drinkNameToBeDeleted = prompt('Введите название напитка, рецепт которого вы хотите удалить');
  if (drinkNameToBeDeleted === '' || drinkNameToBeDeleted === null) return;
  if (!document.body.contains(document.querySelector('.card'))) {
    createDrinkInfoCard();
  } else if (document.body.contains(document.querySelector('.card'))) {
    document.querySelector('.card').remove();
    createDrinkInfoCard();
  }

  const drinkInfoCard = document.querySelector('.card');
  const drinkDeleteAlarm = document.createElement('h4');
  drinkDeleteAlarm.classList.add('alarm');
  if (coctailsStorage.deleteValue(drinkNameToBeDeleted)) {
    drinkDeleteAlarm.innerHTML = `Рецепт напитка <span>"${capitalizeWord(drinkNameToBeDeleted)}"</span> удален из базы.`;
    drinkInfoCard.append(drinkDeleteAlarm);
  } else if (!coctailsStorage.deleteValue(drinkNameToBeDeleted)) {
    drinkDeleteAlarm.innerHTML = `Напитка <span>"${capitalizeWord(drinkNameToBeDeleted)}"</span> в базе не существует. Повторите ввод.`;
    drinkInfoCard.append(drinkDeleteAlarm);
  };
  setTimeout(() => drinkInfoCard.remove(), 3000);
}
btnDelRecipe.addEventListener('click', delDrinkRecipe);


function showAllDrinkNames() {
  if (document.body.contains(document.querySelector('.card'))) {
    document.querySelector('.card').remove();
  } 
  createDrinkInfoCard();
  const drinkInfoCard = document.querySelector('.card');
  const drinksListTitle = document.createElement('h4');
  drinksListTitle.textContent = 'Вы можете выбрать рецепт для следующих напитков:';
  drinkInfoCard.append(drinksListTitle);
  document.body.prepend(drinkInfoCard);
  buildAvailableDrinksList(drinkInfoCard);
}
btnGetListOfDrinks.addEventListener('click', showAllDrinkNames);