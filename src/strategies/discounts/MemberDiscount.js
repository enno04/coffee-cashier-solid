class MemberDiscount {
  apply(total) {
    return total - total * 0.1;
  }
}

module.exports = MemberDiscount;
