class StudentDiscount {
  constructor() {
    this.discountRate = 0.05;
  }

  apply(total) {
    return total - total * this.discountRate;
  }

  getDescription() {
    return "Diskon mahasiswa 5%";
  }
}

module.exports = StudentDiscount;
