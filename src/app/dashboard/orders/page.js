// src/app/dashboard/orders/page.js
'use client';
import { useState } from 'react';

// Dummy data for orders
const dummyOrders = [
  { id: 'ORD001', customer: 'Karim Rahman', total: 2059, status: 'Pending' },
  { id: 'ORD002', customer: 'Fatima Begum', total: 7560, status: 'Shipped' },
  { id: 'ORD003', customer: 'Jamal Uddin', total: 12060, status: 'Delivered' },
];

export default function OrdersPage() {
  const [orders, setOrders] = useState(dummyOrders);

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(prevOrders => 
      prevOrders.map(order => 
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manage Orders</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="p-2 border-b">Order ID</th>
              <th className="p-2 border-b">Customer</th>
              <th className="p-2 border-b">Total</th>
              <th className="p-2 border-b">Status</th>
              <th className="p-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td className="p-2 border-b">{order.id}</td>
                <td className="p-2 border-b">{order.customer}</td>
                <td className="p-2 border-b">Tk {order.total.toFixed(2)}</td>
                <td className="p-2 border-b">{order.status}</td>
                <td className="p-2 border-b">
                  <select 
                    value={order.status}
                    onChange={(e) => handleStatusChange(order.id, e.target.value)}
                    className="p-1 border rounded bg-white text-gray-900"
                  >
                    <option>Pending</option>
                    <option>Ready to Ship</option>
                    <option>Shipped</option>
                    <option>Delivered</option>
                    <option>Cancelled</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}