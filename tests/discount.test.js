const NoDiscount = require("../src/strategies/discounts/NoDiscount");
const MemberDiscount = require("../src/strategies/discounts/MemberDiscount");
const StudentDiscount = require("../src/strategies/discounts/StudentDiscount");

test("menghitung total tanpa diskon", () => {
  const discount = new NoDiscount();

  const result = discount.apply(50000);

  expect(result).toBe(50000);
});

test("menghitung diskon member 10 persen", () => {
  const discount = new MemberDiscount();

  const result = discount.apply(50000);

  expect(result).toBe(45000);
});

test("menghitung diskon mahasiswa 5 persen", () => {
  const discount = new StudentDiscount();

  const result = discount.apply(50000);

  expect(result).toBe(47500);
});

test("menampilkan deskripsi diskon", () => {
  const noDiscount = new NoDiscount();
  const memberDiscount = new MemberDiscount();
  const studentDiscount = new StudentDiscount();

  expect(noDiscount.getDescription()).toBe("Tidak ada diskon");
  expect(memberDiscount.getDescription()).toBe("Diskon member 10%");
  expect(studentDiscount.getDescription()).toBe("Diskon mahasiswa 5%");
});