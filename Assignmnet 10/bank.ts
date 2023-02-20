class BankAccount {
  private readonly accountNumber: string;
  private balance: number;
  
  constructor(accountNumber: string, initialBalance: number = 0) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited ${amount} successfully.`);
  }

  withdraw(amount: number): void {
    if (this.balance < amount) {
      console.log(`Insufficient balance. Current balance is ${this.balance}.`);
    } else {
      this.balance -= amount;
      console.log(`Withdrawn ${amount} successfully.`);
    }
  }

  transfer(amount: number, toAccount: BankAccount): void {
    if (this.balance < amount) {
      console.log(`Insufficient balance. Current balance is ${this.balance}.`);
    } else {
      this.balance -= amount;
      toAccount.deposit(amount);
      console.log(`Transferred ${amount} successfully to account ${toAccount.getAccountNumber()}.`);
    }
  }

  showBalance(): void {
    console.log(`Account balance is ${this.balance}.`);
  }

  getAccountNumber(): string {
    return this.accountNumber;
  }
}

class Bank {
  private readonly accounts: BankAccount[] = [];

  addAccount(account: BankAccount): void {
    this.accounts.push(account);
    console.log(`Account ${account.getAccountNumber()} added successfully.`);
  }

  getAccount(accountNumber: string): BankAccount {
    const account = this.accounts.find(acc => acc.getAccountNumber() === accountNumber);
    if (account) {
      return account;
    } else {
      console.log(`Account ${accountNumber} does not exist.`);
      return null;
    }
  }
}



const bank = new Bank();

const aliceAccount = new BankAccount("12345");
const bobAccount = new BankAccount("67890", 5000);

bank.addAccount(aliceAccount);
bank.addAccount(bobAccount);

aliceAccount.deposit(1000); 
aliceAccount.showBalance(); 

aliceAccount.withdraw(2000); 
bobAccount.showBalance(); 

aliceAccount.transfer(500, bobAccount); 

bobAccount.showBalance(); 
aliceAccount.showBalance();