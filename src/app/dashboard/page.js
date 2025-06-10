// src/app/dashboard/page.js
export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500">Total Sales</h3>
          <p className="text-3xl font-bold">Tk 1,50,000</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500">Pending Orders</h3>
          <p className="text-3xl font-bold">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500">Shipped Orders</h3>
          <p className="text-3xl font-bold">45</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500">Delivered Orders</h3>
          <p className="text-3xl font-bold">120</p>
        </div>
      </div>
      {/* More charts and data would go here */}
    </div>
  );
}