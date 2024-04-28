import React, { useState, useEffect } from "react";
import DashboardHeader from "../../components/DashboardHeader";
import { get } from "../../services/Api/ApiConfig";
import { calculateRange } from "../../services/Util/table-pagination";
import "../styles.css";

function ParcelBookings() {
  const [search, setSearch] = useState("");
  const [originalParcels, setOriginalParcels] = useState([]); // New state variable
  const [filteredParcels, setFilteredParcels] = useState([]); // New state variable
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);

  useEffect(() => {
    async function fetchParcels() {
      try {
        const response = await get("/parcelBooking");
        console.log("Parcels:", response);
        setOriginalParcels(response); // Store original parcels
        setFilteredParcels(response); // Initialize filtered parcels with original list
        setPagination(calculateRange(response, 10)); // Assuming you have a pagination function
      } catch (error) {
        console.error("Error fetching parcels:", error);
      }
    }
    fetchParcels();
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);
    if (value !== "") {
      const searchResults = originalParcels.filter(
        (parcel) =>
          parcel.name.toLowerCase().includes(value.toLowerCase()) ||
          parcel.address.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredParcels(searchResults); // Update filtered parcels
    } else {
      setPage(1);
      setFilteredParcels(originalParcels); // Reset filtered parcels to original list
    }
  };

  const handleChangePage = (newPage) => {
    setPage(newPage);
    // Fetch data for new page from API
  };

  return (
    <div className="dashboard-content">
      <DashboardHeader btnText="New Parcel Booking" />
      <div className="dashboard-content-container">
        <div className="dashboard-content-header">
          <h2>Parcel Bookings</h2>
          <div className="dashboard-content-search">
            <input
              type="text"
              value={search}
              placeholder="Search.."
              className="dashboard-content-input"
              onChange={handleSearch}
            />
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Postcode</th>
              <th>City</th>
              <th>Country</th>
              <th>Weight</th>
              <th>Length</th>
              <th>Height</th>
              <th>Width</th>
            </tr>
          </thead>
          <tbody>
            {filteredParcels.map((parcel, index) => (
              <tr key={index}>
                <td>{parcel.parcelId ? parcel.parcelId : "N/A"}</td>
                {/* Display 'N/A' if parcelId is empty */}
                <td>{parcel.name}</td>
                <td>{parcel.address}</td>
                <td>{parcel.postcode}</td>
                <td>{parcel.city}</td>
                <td>{parcel.country}</td>
                <td>{parcel.weight}</td>
                <td>{parcel.length}</td>
                <td>{parcel.height}</td>
                <td>{parcel.width}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="dashboard-content-footer">
          {pagination.map((item, index) => (
            <span
              key={index}
              className={item === page ? "active-pagination" : "pagination"}
              onClick={() => handleChangePage(item)}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ParcelBookings;
