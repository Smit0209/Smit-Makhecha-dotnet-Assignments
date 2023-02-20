var customer: [string ,number ] []
customer = [["Steve", 10], ["Bill", 20], ["Jeff", 30]];
function findCustomersWithMostOrders(customer: [string, number][]): string[] {
    const orderCounts: {[name: string]: number} = {};
  
    for (const [name, orders] of customer) {
      orderCounts[name] = (orderCounts[name] || 0) + orders;
    }
  
    const maxOrders = Math.max(...Object.values(orderCounts));
  
    const topCustomers = Object.entries(orderCounts)
                            .filter(([_, orders]) => orders === maxOrders)
                            .map(([name, _]) => name);

    return topCustomers;
  }
  
  const topCustomers = findCustomersWithMostOrders(customer);
  console.log(`Customers with the most orders: ${topCustomers}`);

