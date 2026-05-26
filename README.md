# Coffee Cashier SOLID

Aplikasi kasir coffee sederhana untuk latihan penerapan prinsip SOLID dan unit testing.

## Fitur

- Menampilkan menu coffee
- Menghitung subtotal pesanan
- Menghitung diskon customer
- Memproses pembayaran
- Mencetak struk sederhana
- Unit testing menggunakan Jest

## Struktur Folder

```text
src/
├── models/
│   └── MenuItem.js
├── services/
│   ├── MenuCatalog.js
│   ├── OrderCalculator.js
│   ├── ReceiptPrinter.js
│   └── CashierService.js
├── strategies/
│   ├── discounts/
│   │   ├── NoDiscount.js
│   │   ├── MemberDiscount.js
│   │   └── StudentDiscount.js
│   └── payments/
│       ├── CashPayment.js
│       ├── QrisPayment.js
│       └── DebitPayment.js
└── app.js
```

## Prinsip SOLID yang diterapkan

### 1. Single Responsibility Principle
Setiap class memiliki tanggung jawab masing-masing.

- `MenuCatalog` mengelola data menu.
- `OrderCalculator` menghitung total pesanan.
- `ReceiptPrinter` membuat struk.
- `CashierService` mengatur proses checkout.

### 2. Open Closed Principle
Diskon dan pembayaran dibuat dalam class terpisah. Jika ingin menambahkan jenis diskon atau metode pembayaran baru, cukup membuat class baru tanpa mengubah class utama.

### 3. Dependency Inversion Principle
`CashierService` menerima object dependency dari luar melalui constructor, sehingga tidak bergantung langsung pada implementasi konkret.

## Cara Menjalankan

Install dependency:

```bash
npm install
```

Jalankan program:

```bash
npm start
```

Jalankan unit test:

```bash
npm test
```

## Contoh Output

```text
=== STRUK KOPI SENJA ===
Americano x 2 = Rp30000
Caffe Latte x 1 = Rp22000
Subtotal: Rp52000
Total Akhir: Rp46800
Pembayaran QRIS sebesar Rp46800 berhasil
```
