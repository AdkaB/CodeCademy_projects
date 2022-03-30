const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
  get appetizers () {
    return this._courses.appetizers;
  },
  get mains () {
    return this._courses.mains;
  },
  get desserts () {
    return this._courses.desserts;
  },
  set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
  },
  set mains (mains) {
    this._courses.mains = mains;
  },
  set desserts (desserts) {
    this._courses.desserts = desserts;
  },
  get courses () {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random()*dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal () {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = Math.floor(appetizer.price + main.price + dessert.price);
    return `You ordered: ${appetizer.name}, ${main.name}, ${dessert.name}. The price for your menu is ${totalPrice}.`
  }
  };
  
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.30);
  menu.addDishToCourse('appetizers', 'Bread and butter', 3.50);
  menu.addDishToCourse('appetizers', 'Fries', 3.80);
  
  menu.addDishToCourse('mains', 'Chicken with rice', 7.80);
  menu.addDishToCourse('mains', 'Salmon and salad', 10.90);
  menu.addDishToCourse('mains', 'Tofu and potatoes', 6.50);
  
  menu.addDishToCourse('desserts', 'Cake', 3.20);
  menu.addDishToCourse('desserts', 'Ice cream', 2.30);menu.addDishToCourse('desserts', 'Coffee', 1.80);
  
  const meal = menu.generateRandomMeal();
  
  console.log(meal);