class BankAccount {
    accountNumber;
    balance;
    constructor(accountNumber, initialBalance = 0) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} successfully.`);
    }
    withdraw(amount) {
        if (this.balance < amount) {
            console.log(`Insufficient balance. Current balance is ${this.balance}.`);
        }
        else {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} successfully.`);
        }
    }
    transfer(amount, toAccount) {
        if (this.balance < amount) {
            console.log(`Insufficient balance. Current balance is ${this.balance}.`);
        }
        else {
            this.balance -= amount;
            toAccount.deposit(amount);
            console.log(`Transferred ${amount} successfully to account ${toAccount.getAccountNumber()}.`);
        }
    }
    showBalance() {
        console.log(`Account balance is ${this.balance}.`);
    }
    getAccountNumber() {
        return this.accountNumber;
    }
}
class Bank {
    accounts = [];
    addAccount(account) {
        this.accounts.push(account);
        console.log(`Account ${account.getAccountNumber()} added successfully.`);
    }
    getAccount(accountNumber) {
        const account = this.accounts.find(acc => acc.getAccountNumber() === accountNumber);
        if (account) {
            return account;
        }
        else {
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
