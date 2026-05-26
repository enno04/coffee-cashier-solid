class OrderCalculator {
  constructor(menuCatalog, discountStrategy) {
    this.menuCatalog = menuCatalog;
    this.discountStrategy = discountStrategy;
  }

    validateOrderItems(orderItems) {
    if (!Array.isArray(orderItems) || orderItems.length === 0) {
      throw new Error("Pesanan tidak boleh kosong");
    }
  }

  calculateSubtotal(orderItems) {
    this.validateOrderItems(orderItems);

    return orderItems.reduce((total, order) => {
      const menu = this.menuCatalog.findByCode(order.code);

      if (!menu) {
        throw new Error(`Menu dengan kode ${order.code} tidak ditemukan`);
      }

      return total + menu.price * order.quantity;
    }, 0);
  }

  calculateTotal(orderItems) {
    const subtotal = this.calculateSubtotal(orderItems);
    return this.discountStrategy.apply(subtotal);
  }
}

module.exports = OrderCalculator;
