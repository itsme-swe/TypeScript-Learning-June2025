class BankAccount {
  private balance: number;

  constructor(public accountNumber: string, initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      throw new Error("Insufficient balance");
    } else {
      this.balance -= amount;
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

const userOne = new BankAccount("505123", 50000);

console.log(userOne.getBalance()); // 50000

userOne.deposit(1000);

userOne.withdraw(10000);

console.log(userOne.getBalance());  // 41000
