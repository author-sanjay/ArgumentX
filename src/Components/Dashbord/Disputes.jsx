/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOrders } from "../../Context/OrderContext";

const mockData = [
  {
    id: 1,
    productName: "Wireless Headphones",
    customer: "John Doe",
    status: "Shipped",
    quantity: 2,
    price: 120.0,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    productName: "Smartphone",
    customer: "Jane Smith",
    status: "Delivered",
    quantity: 1,
    price: 699.99,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    productName: "Gaming Laptop",
    customer: "Mark Lee",
    status: "Processing",
    quantity: 1,
    price: 1500.0,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    productName: "Bluetooth Speaker",
    customer: "Emily Clark",
    status: "Cancelled",
    quantity: 1,
    price: 49.99,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 5,
    productName: "Fitness Tracker",
    customer: "Robert Johnson",
    status: "Shipped",
    quantity: 3,
    price: 75.0,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 6,
    productName: "4K TV",
    customer: "Sarah Wilson",
    status: "Delivered",
    quantity: 1,
    price: 899.99,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 7,
    productName: "Drone Camera",
    customer: "Alex Martinez",
    status: "Processing",
    quantity: 1,
    price: 499.99,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 8,
    productName: "Electric Scooter",
    customer: "Sophia Brown",
    status: "Shipped",
    quantity: 1,
    price: 350.0,
    image: "https://via.placeholder.com/100",
  },
];

function Disputes({ admin }) {
  const navigate = useNavigate();
  const { setSelectedDispute } = useOrders();
  //
  const [data, setData] = useState(mockData);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Show 4 items per page

  const sortData = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setData(sortedData);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="flex flex-col">
      <div className="py-2 text-xl font-extralight">Disputes</div>
      <div className="divider mb-5 mt-0"></div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th
                onClick={() => sortData("productName")}
                className="cursor-pointer"
              >
                Product
              </th>
              <th onClick={() => sortData("status")} className="cursor-pointer">
                Status
              </th>
              <th
                onClick={() => sortData("quantity")}
                className="cursor-pointer"
              >
                User
              </th>
              <th onClick={() => sortData("price")} className="cursor-pointer">
                Price ($)
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((order) => (
              <tr key={order.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={order.image} alt={order.productName} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{order.productName}</div>
                    </div>
                  </div>
                </td>
                <td>{order.status}</td>
                <td>{order.customer}</td>
                <td>{order.price.toFixed(2)}</td>
                <th>
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => {
                      navigate("/dashboard/dispute");
                      setSelectedDispute(order);
                    }}
                  >
                    View
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-5">
        <button
          className="btn btn-xs"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn btn-xs"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Disputes;
