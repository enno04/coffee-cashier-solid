const MenuCatalog = require("../src/services/MenuCatalog");
const CashierService = require("../src/services/CashierService");
const ReceiptPrinter = require("../src/services/ReceiptPrinter");

const MemberDiscount = require("../src/strategies/discounts/MemberDiscount");
const StudentDiscount = require("../src/strategies/discounts/StudentDiscount");
const NoDiscount = require("../src/strategies/discounts/NoDiscount");

const CashPayment = require("../src/strategies/payments/CashPayment");
const QrisPayment = require("../src/strategies/payments/QrisPayment");

test("menghitung total pesanan tanpa diskon", () => {
  const cashier = new CashierService(
    new MenuCatalog(),
    new NoDiscount(),
    new CashPayment(),
    new ReceiptPrinter()
  );

  const result = cashier.checkout([
    { code: "C001", quantity: 2 },
    { code: "C002", quantity: 1 }
  ]);

  expect(result.subtotal).toBe(52000);
  expect(result.total).toBe(52000);
});

test("menghitung total pesanan dengan diskon member", () => {
  const cashier = new CashierService(
    new MenuCatalog(),
    new MemberDiscount(),
    new QrisPayment(),
    new ReceiptPrinter()
  );

  const result = cashier.checkout([
    { code: "C001", quantity: 2 },
    { code: "C002", quantity: 1 }
  ]);

  expect(result.subtotal).toBe(52000);
  expect(result.total).toBe(46800);
  expect(result.paymentResult).toBe("Pembayaran QRIS sebesar Rp46800 berhasil");
});

test("menghitung total pesanan dengan diskon mahasiswa", () => {
  const cashier = new CashierService(
    new MenuCatalog(),
    new StudentDiscount(),
    new CashPayment(),
    new ReceiptPrinter()
  );

  const result = cashier.checkout([
    { code: "C003", quantity: 2 }
  ]);

  expect(result.subtotal).toBe(40000);
  expect(result.total).toBe(38000);
});

test("menampilkan error jika kode menu tidak ditemukan", () => {
  const cashier = new CashierService(
    new MenuCatalog(),
    new NoDiscount(),
    new CashPayment(),
    new ReceiptPrinter()
  );

  expect(() => {
    cashier.checkout([{ code: "X999", quantity: 1 }]);
  }).toThrow("Menu dengan kode X999 tidak ditemukan");
});
