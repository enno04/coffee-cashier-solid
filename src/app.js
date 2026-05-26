const MenuCatalog = require("./services/MenuCatalog");
const CashierService = require("./services/CashierService");
const ReceiptPrinter = require("./services/ReceiptPrinter");

const MemberDiscount = require("./strategies/discounts/MemberDiscount");
const QrisPayment = require("./strategies/payments/QrisPayment");

const menuCatalog = new MenuCatalog();
const discount = new MemberDiscount();
const payment = new QrisPayment();
const printer = new ReceiptPrinter("KOPI SENJA");

const cashier = new CashierService(menuCatalog, discount, payment, printer);

const orderItems = [
  { code: "C001", quantity: 2 },
  { code: "C002", quantity: 1 }
];

const result = cashier.checkout(orderItems);

console.log(result.receipt);
