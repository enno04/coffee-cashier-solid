  constructor(menuCatalog, discountStrategy, paymentMethod, receiptPrinter) {
    this.menuCatalog = menuCatalog;
    this.discountStrategy = discountStrategy;
    this.paymentMethod = paymentMethod;
    this.receiptPrinter = receiptPrinter;
    this.orderCalculator = new OrderCalculator(menuCatalog, discountStrategy);
  }

  getPaymentProvider() {
    return this.paymentMethod.getProvider();
  }

  checkout(orderItems) {
