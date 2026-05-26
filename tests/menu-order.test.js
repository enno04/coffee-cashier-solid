const MenuCatalog = require("../src/services/MenuCatalog");
const OrderCalculator = require("../src/services/OrderCalculator");
const NoDiscount = require("../src/strategies/discounts/NoDiscount");
const MemberDiscount = require("../src/strategies/discounts/MemberDiscount");

test("menampilkan daftar nama menu coffee", () => {
  const menuCatalog = new MenuCatalog();

  const menuNames = menuCatalog.getItemNames();

  expect(menuNames).toContain("Americano");
  expect(menuNames).toContain("Caffe Latte");
  expect(menuNames).toContain("Cappuccino");
});

test("mengecek menu tersedia berdasarkan kode menu", () => {
  const menuCatalog = new MenuCatalog();

  expect(menuCatalog.isMenuAvailable("C001")).toBe(true);
  expect(menuCatalog.isMenuAvailable("X999")).toBe(false);
});

test("menghitung subtotal pesanan tanpa diskon", () => {
  const menuCatalog = new MenuCatalog();
  const discount = new NoDiscount();
  const calculator = new OrderCalculator(menuCatalog, discount);

  const orderItems = [
    { code: "C001", quantity: 2 },
    { code: "C002", quantity: 1 }
  ];

  const subtotal = calculator.calculateSubtotal(orderItems);

  expect(subtotal).toBe(52000);
});

test("menghitung total pesanan dengan diskon member", () => {
  const menuCatalog = new MenuCatalog();
  const discount = new MemberDiscount();
  const calculator = new OrderCalculator(menuCatalog, discount);

  const orderItems = [
    { code: "C001", quantity: 2 },
    { code: "C002", quantity: 1 }
  ];

  const total = calculator.calculateTotal(orderItems);

  expect(total).toBe(46800);
});

test("menampilkan error jika pesanan kosong", () => {
  const menuCatalog = new MenuCatalog();
  const discount = new NoDiscount();
  const calculator = new OrderCalculator(menuCatalog, discount);

  expect(() => {
    calculator.calculateSubtotal([]);
  }).toThrow("Pesanan tidak boleh kosong");
});