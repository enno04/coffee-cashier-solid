class QrisPayment {
  pay(amount) {
    return `Pembayaran QRIS sebesar Rp${amount} berhasil`;
  }
}

module.exports = QrisPayment;
