const OrderCalculator = require("./OrderCalculator");

class CashierService {
  constructor(menuCatalog, discountStrategy, paymentMethod, receiptPrinter) {
    this.menuCatalog = menuCatalog;
    this.discountStrategy = discountStrategy;
    this.paymentMethod = paymentMethod;
    this.receiptPrinter = receiptPrinter;
    this.orderCalculator = new OrderCalculator(menuCatalog, discountStrategy);
  }

  checkout(orderItems) {
    const subtotal = this.orderCalculator.calculateSubtotal(orderItems);
    const total = this.orderCalculator.calculateTotal(orderItems);
    const paymentResult = this.paymentMethod.pay(total);
    const receipt = this.receiptPrinter.print(
      orderItems,
      this.menuCatalog,
      subtotal,
      total,
      paymentResult
    );

    return {
      subtotal,
      total,
      paymentResult,
      receipt
    };
  }
}

module.exports = CashierService;
