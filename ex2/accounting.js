
class Account {
  constructor(name) {
      this.name = name
      this.balance = 0
}
  credit(amount) {
      this.balance += amount
  }
  describe() {
      return `Account owner: ${this.name}, Balance: $${this.balance}`
  }
}
module.exports = Account
