class QrisPayment {
  constructor(providerName = "QRIS") {
    this.providerName = providerName;
  }

  pay(amount) {
    return `Pembayaran ${this.providerName} sebesar Rp${amount} berhasil`;
  }

  getProvider() {
    return this.providerName;
  }
}

module.exports = QrisPayment;
