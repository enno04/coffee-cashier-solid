class ReceiptPrinter {
  constructor(shopName = "KOPI SENJA") {
    this.shopName = shopName;
  }

  print(orderItems, menuCatalog, subtotal, total, paymentResult) {
    let receipt = `=== STRUK ${this.shopName} ===\n`;

    orderItems.forEach(order => {
      const menu = menuCatalog.findByCode(order.code);
      const itemTotal = menu.price * order.quantity;
      receipt += `${menu.name} x ${order.quantity} = Rp${itemTotal}\n`;
    });

    receipt += `Subtotal: Rp${subtotal}\n`;
    receipt += `Total Akhir: Rp${total}\n`;
    receipt += paymentResult;

    return receipt;
  }
}

module.exports = ReceiptPrinter;
