import { useState } from "react";

const usersMockData = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    secondaryEmail: "john.secondary@example.com",
    phoneNumber: "+1-123-456-7890",
    secondaryPhoneNumber: "+1-987-654-3210",
    billingAddress: "123 Main Street, New York, NY, USA",
    shippingAddress: "456 Elm Street, Brooklyn, NY, USA",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    secondaryEmail: "jane.secondary@example.com",
    phoneNumber: "+44-7890-123456",
    secondaryPhoneNumber: "+44-7654-321890",
    billingAddress: "78 High Road, London, UK",
    shippingAddress: "22 Baker Street, London, UK",
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    secondaryEmail: "michael.secondary@example.com",
    phoneNumber: "+61-400-123-456",
    secondaryPhoneNumber: "+61-450-654-321",
    billingAddress: "12 Kangaroo Lane, Sydney, Australia",
    shippingAddress: "89 Harbour Street, Sydney, Australia",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    secondaryEmail: "emily.secondary@example.com",
    phoneNumber: "+91-9876543210",
    secondaryPhoneNumber: "+91-9123456789",
    billingAddress: "A-45, Sector 12, New Delhi, India",
    shippingAddress: "B-67, Sector 22, New Delhi, India",
  },
  {
    id: 5,
    name: "Robert Brown",
    email: "robert.brown@example.com",
    secondaryEmail: "robert.secondary@example.com",
    phoneNumber: "+49-152-12345678",
    secondaryPhoneNumber: "+49-152-87654321",
    billingAddress: "123 Hauptstrasse, Berlin, Germany",
    shippingAddress: "456 Nebenstrasse, Munich, Germany",
  },
  {
    id: 6,
    name: "Sophia Wilson",
    email: "sophia.wilson@example.com",
    secondaryEmail: "sophia.secondary@example.com",
    phoneNumber: "+81-70-1234-5678",
    secondaryPhoneNumber: "+81-80-8765-4321",
    billingAddress: "3-5-7 Roppongi, Tokyo, Japan",
    shippingAddress: "1-2-3 Shibuya, Tokyo, Japan",
  },
  {
    id: 7,
    name: "Chris Martinez",
    email: "chris.martinez@example.com",
    secondaryEmail: "chris.secondary@example.com",
    phoneNumber: "+55-11-91234-5678",
    secondaryPhoneNumber: "+55-21-98765-4321",
    billingAddress: "Av. Paulista, 1234, São Paulo, Brazil",
    shippingAddress: "Rua das Flores, 567, Rio de Janeiro, Brazil",
  },
];

function UsersList() {
  const [data, setData] = useState(usersMockData);
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
      <div className="py-2 text-xl font-extralight">Users</div>
      <div className="divider mb-5 mt-0"></div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th
                onClick={() => sortData("productName")}
                className="cursor-pointer"
              >
                Avatar
              </th>
              <th onClick={() => sortData("status")} className="cursor-pointer">
                Name
              </th>
              <th
                onClick={() => sortData("quantity")}
                className="cursor-pointer"
              >
                Email
              </th>
              <th onClick={() => sortData("price")} className="cursor-pointer">
                Phone Number
              </th>
              <th onClick={() => sortData("price")} className="cursor-pointer">
                Address
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((user) => (
              <tr key={user.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={user.image} alt={user.name} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{user.name}</div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.billingAddress}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">Details</button>
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

export default UsersList;
