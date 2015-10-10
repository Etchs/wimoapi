module.exports = {
  attributes: {
    name: String,
    logo: {
      data: Buffer,
      fileName: String,
      width: Number,
      height: Number
    },
    deliveries: Number,
    shipped: Number,
    totalIncome: Number,
    rating: Number,
  }
}
