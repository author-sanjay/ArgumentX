import axios from "axios";
import { useEffect, useState } from "react";

function QRList() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Show 4 items per page

  useEffect(() => {
    axios
      .get("https://677101d82ffbd37a63cdf907.mockapi.io/qr")
      .then((qrData) => {
        setData(qrData.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDownload = (url, fileName) => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="flex flex-col">
      <div className="py-2 text-xl font-extralight">QR Codes</div>
      <div className="divider mb-5 mt-0"></div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="cursor-pointer">QR Code</th>
              <th className="cursor-pointer">AR Model</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item.qrUrl} alt={`QR Code ${item.id}`} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.arModelName}</td>
                <td>
                  <div className="flex w-1/2 justify-between">
                    <button className="btn btn-ghost btn-xs">Delete</button>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => handleDownload(item.qrUrl, `QR_Code_${item.id}.png`)}
                    >
                      Download
                    </button>
                  </div>
                </td>
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

export default QRList;
