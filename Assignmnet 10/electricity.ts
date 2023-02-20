class Customer {
    private name: string;
    private unitConsumed: number;
    private totalBill: number;
  
    constructor(name: string, unitConsumed: number) {
      this.name = name;
      this.unitConsumed = unitConsumed;
      this.totalBill = this.calculateBill();
    }
  
    private calculateBill(): number {
      let bill = 0;
      if (this.unitConsumed <= 100) {
        bill = this.unitConsumed * 2.5;
      } else if (this.unitConsumed <= 300) {
        bill = 100 * 2.5 + (this.unitConsumed - 100) * 3.5;
      } else {
        bill = 100 * 2.5 + 200 * 3.5 + (this.unitConsumed - 300) * 4.0;
      }
      return bill;
    }
  
    public getName(): string {
      return this.name;
    }
  
    public getUnitConsumed(): number {
      return this.unitConsumed;
    }
  
    public getTotalBill(): number {
      return this.totalBill;
    }
  }
  
  class ElectricityCompany {
    private static customers: Customer[] = [];
  
    public static addCustomer(customer: Customer): void {
      this.customers.push(customer);
    }
  
    public static displayMostPaidCustomers(): void {
      const sortedCustomers = this.customers.sort((a, b) => b.getTotalBill() - a.getTotalBill());
      console.log("Customers who paid most bills:");
      sortedCustomers.slice(0, 3).forEach(c => {
        console.log(`Name: ${c.getName()}, Units Consumed: ${c.getUnitConsumed()}, Total Bill: ${c.getTotalBill()}`);
      });
    }
  
    public static displayCustomersByInitial(initials: string[]): void {
      console.log(`Customers whose name starts with ${initials.join(" or ")}:`);
      const filteredCustomers = this.customers.filter(c => initials.includes(c.getName()[0].toUpperCase()));
      filteredCustomers.forEach(c => {
        console.log(`Name: ${c.getName()}, Units Consumed: ${c.getUnitConsumed()}, Total Bill: ${c.getTotalBill()}`);
      });
    }
  
    public static displayCustomersByLength(length: number): void {
      console.log(`Customers whose name has exactly ${length} characters:`);
      const filteredCustomers = this.customers.filter(c => c.getName().length === length);
      filteredCustomers.forEach(c => {
        console.log(`Name: ${c.getName()}, Units Consumed: ${c.getUnitConsumed()}, Total Bill: ${c.getTotalBill()}`);
      });
    }
  }
  

  
  const customer1 = new Customer("Smit", 120);
  const customer2 = new Customer("Tej", 220);
  const customer3 = new Customer("Raj", 305);
  const customer4 = new Customer("Kupu", 80);
  const customer5 = new Customer("Nainil", 400);
  
  ElectricityCompany.addCustomer(customer1);
  ElectricityCompany.addCustomer(customer2);
  ElectricityCompany.addCustomer(customer3);
  ElectricityCompany.addCustomer(customer4);
  ElectricityCompany.addCustomer(customer5);
  
  ElectricityCompany.displayMostPaidCustomers();
  
  ElectricityCompany.displayCustomersByInitial(["S", "N"]);