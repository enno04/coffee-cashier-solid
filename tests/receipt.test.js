const ReceiptPrinter = require("../src/services/ReceiptPrinter");
const MenuCatalog = require("../src/services/MenuCatalog");

test("memformat angka menjadi format rupiah", () => {
    const printer = new ReceiptPrinter();

    const result = printer.formatCurrency(25000);

    expect(result).toBe("Rp25000");
});

test("membuat format baris item struk", () => {
    const printer = new ReceiptPrinter();
    const menu = {
        name: "Americano",
        price: 15000
    };

    const result = printer.formatItemLine(menu, 2);

    expect(result).toBe("Americano x 2 = Rp30000\n");
});

test("mencetak struk pesanan coffee", () => {
    const printer = new ReceiptPrinter("KOPI SENJA");
    const menuCatalog = new MenuCatalog();

    const orderItems = [
        { code: "C001", quantity: 2 },
        { code: "C002", quantity: 1 }
    ];

    const receipt = printer.print(
        orderItems,
        menuCatalog,
        52000,
        46800,
        "Pembayaran QRIS sebesar Rp46800 berhasil"
    );

    expect(receipt).toContain("=== STRUK KOPI SENJA ===");
    expect(receipt).toContain("Americano x 2 = Rp30000");
    expect(receipt).toContain("Caffe Latte x 1 = Rp22000");
    expect(receipt).toContain("Subtotal: Rp52000");
    expect(receipt).toContain("Total Akhir: Rp46800");
    expect(receipt).toContain("Pembayaran QRIS sebesar Rp46800 berhasil");
});