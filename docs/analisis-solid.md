# Analisis Penerapan SOLID

## Masalah pada Desain Awal

Jika seluruh fitur kasir dibuat dalam satu class besar, maka kode akan sulit dirawat. Contoh tanggung jawab yang seharusnya dipisah:

1. Menyimpan data menu.
2. Menghitung total harga.
3. Menghitung diskon.
4. Memproses pembayaran.
5. Mencetak struk.

Desain seperti itu melanggar Single Responsibility Principle karena satu class memiliki terlalu banyak alasan untuk berubah.

## Perbaikan

Project ini memisahkan fitur menjadi beberapa class:

| Class | Tanggung Jawab |
|---|---|
| MenuItem | Menyimpan data item menu |
| MenuCatalog | Menyediakan daftar menu |
| OrderCalculator | Menghitung subtotal dan total |
| ReceiptPrinter | Membuat struk |
| CashierService | Mengatur proses checkout |
| MemberDiscount | Menghitung diskon member |
| StudentDiscount | Menghitung diskon mahasiswa |
| CashPayment | Pembayaran tunai |
| QrisPayment | Pembayaran QRIS |
| DebitPayment | Pembayaran debit |

## Prinsip yang Digunakan

### SRP
Setiap class fokus pada satu tugas.

### OCP
Penambahan metode pembayaran atau diskon dapat dilakukan dengan membuat class baru.

### DIP
CashierService tidak membuat langsung object pembayaran, diskon, atau printer. Object tersebut diberikan dari luar melalui constructor.
