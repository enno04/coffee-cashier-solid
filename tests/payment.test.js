const CashPayment = require("../src/strategies/payments/CashPayment");
const QrisPayment = require("../src/strategies/payments/QrisPayment");
const DebitPayment = require("../src/strategies/payments/DebitPayment");

test("memproses pembayaran tunai", () => {
  const payment = new CashPayment();

  const result = payment.pay(50000);

  expect(result).toBe("Pembayaran tunai sebesar Rp50000 berhasil");
});

test("memproses pembayaran QRIS", () => {
  const payment = new QrisPayment();

  const result = payment.pay(75000);

  expect(result).toBe("Pembayaran QRIS sebesar Rp75000 berhasil");
});

test("memproses pembayaran debit", () => {
  const payment = new DebitPayment();

  const result = payment.pay(100000);

  expect(result).toBe("Pembayaran debit sebesar Rp100000 berhasil");
});

test("menampilkan provider pembayaran", () => {
  const cashPayment = new CashPayment();
  const qrisPayment = new QrisPayment();
  const debitPayment = new DebitPayment();

  expect(cashPayment.getProvider()).toBe("tunai");
  expect(qrisPayment.getProvider()).toBe("QRIS");
  expect(debitPayment.getProvider()).toBe("debit");
});

test("mengubah nama provider pembayaran QRIS", () => {
  const payment = new QrisPayment("QRIS BCA");

  const result = payment.pay(30000);

  expect(payment.getProvider()).toBe("QRIS BCA");
  expect(result).toBe("Pembayaran QRIS BCA sebesar Rp30000 berhasil");
});
