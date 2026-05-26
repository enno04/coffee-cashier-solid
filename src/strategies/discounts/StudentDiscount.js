class StudentDiscount {
  apply(total) {
    return total - total * 0.05;
  }
}

module.exports = StudentDiscount;
