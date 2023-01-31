class Main {
  constructor() {
    this.fruits = ['banane', 'fraise', 'pomme', 'framboise'];
    this.container = document.querySelector('.js-container');
    this.button = document.querySelector('.js-add');

    this.init();
  }

  init() {
    this.button.addEventListener('click', this.addFruit.bind(this));
  }

  addFruit() {
    const number = Math.floor(Math.random() * this.fruits.length);
    console.log(number);
    const p = document.createElement('p');
    p.innerText = `Le fruit du jour est la ${this.fruits[number]}!`
    this.container.appendChild(p);
  }
}

new Main();

/*

class Main {
  constructor() {
    this.button = document.querySelector('.js-button');

    this.init();
  }

  init() {
    this.button.addEventListener('click', this.onClick.bind(this));
  }

  onClick() {

  }
}
new Main();

*/