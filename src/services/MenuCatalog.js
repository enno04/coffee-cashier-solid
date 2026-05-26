const MenuItem = require("../models/MenuItem");

class MenuCatalog {
  constructor() {
    this.items = [
      new MenuItem("C001", "Americano", 15000),
      new MenuItem("C002", "Caffe Latte", 22000),
      new MenuItem("C003", "Cappuccino", 20000),
      new MenuItem("C004", "Caramel Macchiato", 26000),
      new MenuItem("C005", "Matcha Latte", 24000)
    ];
  }

  getAllItems() {
    return this.items;
  }

    getItemNames() {
    return this.items.map(item => item.name);
  }

    isMenuAvailable(code) {
    return this.items.some(item => item.code === code);
  }

  findByCode(code) {
    return this.items.find(item => item.code === code);
  }
}

module.exports = MenuCatalog;
