class MemberDiscount {
  constructor() {
    this.discountRate = 0.1;
  }

  apply(total) {
    return total - total * this.discountRate;
  }

  getDescription() {
    return "Diskon member 10%";
  }
}

module.exports = MemberDiscount;
