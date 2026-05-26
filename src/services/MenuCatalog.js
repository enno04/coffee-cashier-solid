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

  findByCode(code) {
    return this.items.find(item => item.code === code);
  }
}

module.exports = MenuCatalog;
