class ReceiptPrinter {
  constructor(shopName = "KOPI SENJA") {
    this.shopName = shopName;
  }

  formatCurrency(amount) {
    return `Rp${amount}`;
  }

  formatItemLine(menu, quantity) {
    const itemTotal = menu.price * quantity;
    return `${menu.name} x ${quantity} = ${this.formatCurrency(itemTotal)}\n`;
  }

  print(orderItems, menuCatalog, subtotal, total, paymentResult) {
    let receipt = `=== STRUK ${this.shopName} ===\n`;

      orderItems.forEach(order => {
      const menu = menuCatalog.findByCode(order.code);
      receipt += this.formatItemLine(menu, order.quantity);
    });

    receipt += `Subtotal: ${this.formatCurrency(subtotal)}\n`;
    receipt += `Total Akhir: ${this.formatCurrency(total)}\n`;
    receipt += paymentResult;

    return receipt;
  }
}

module.exports = ReceiptPrinter;
