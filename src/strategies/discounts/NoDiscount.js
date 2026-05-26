class NoDiscount {
  constructor() {
    this.discountRate = 0;
  }

  apply(total) {
    return total;
  }

  getDescription() {
    return "Tidak ada diskon";
  }
}

module.exports = NoDiscount;
