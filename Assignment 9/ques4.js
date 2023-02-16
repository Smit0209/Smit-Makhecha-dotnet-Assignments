var customer;
customer = [["Steve", 10], ["Bill", 20], ["Jeff", 30]];
function findCustomersWithMostOrders(customer) {
    const orderCounts = {};
    // Count the number of orders for each customer
    for (const [name, orders] of customer) {
        orderCounts[name] = (orderCounts[name] || 0) + orders;
    }
    // Find the maximum number of orders placed by any customer
    const maxOrders = Math.max(...Object.values(orderCounts));
    // Filter the customers who placed the most orders
    const topCustomers = Object.entries(orderCounts)
        .filter(([_, orders]) => orders === maxOrders)
        .map(([name, _]) => name);
    // Return the names of the top customers
    return topCustomers;
}
// Call the function and log the result
const topCustomers = findCustomersWithMostOrders(customer);
console.log(`Customers with the most orders: ${topCustomers}`);
