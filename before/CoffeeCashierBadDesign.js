class CoffeeCashierBadDesign {
  constructor() {
    this.menu = [
      { code: "C001", name: "Americano", price: 15000 },
      { code: "C002", name: "Caffe Latte", price: 22000 },
      { code: "C003", name: "Cappuccino", price: 20000 }
    ];
  }

  checkout(orderItems, customerType, paymentType) {
    let subtotal = 0;

    orderItems.forEach(order => {
      const menu = this.menu.find(item => item.code === order.code);
      subtotal += menu.price * order.quantity;
    });

    let total = subtotal;

    if (customerType === "member") {
      total = total - total * 0.1;
    } else if (customerType === "student") {
      total = total - total * 0.05;
    }

    let paymentResult = "";

    if (paymentType === "cash") {
      paymentResult = `Pembayaran tunai sebesar Rp${total} berhasil`;
    } else if (paymentType === "qris") {
      paymentResult = `Pembayaran QRIS sebesar Rp${total} berhasil`;
    } else if (paymentType === "debit") {
      paymentResult = `Pembayaran debit sebesar Rp${total} berhasil`;
    }

    let receipt = "=== STRUK KOPI SENJA ===\n";

    orderItems.forEach(order => {
      const menu = this.menu.find(item => item.code === order.code);
      receipt += `${menu.name} x ${order.quantity}\n`;
    });

    receipt += `Total: Rp${total}\n`;
    receipt += paymentResult;

    return receipt;
  }
}

module.exports = CoffeeCashierBadDesign;
