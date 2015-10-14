module.exports = {
  attributes: {
    name: String,
    logo: {
      data: Buffer,
      fileName: String,
      width: Number,
      height: Number
    },
    deliveries: {
      type: Number,
      default: 0
    },
    shipped: {
      type: Number,
      default: 0
    },
    totalIncome: {
      type: Number,
      default: 0
    },
    rating: {
      type: Number,
      default: 0
    },
  }
}
