import React, { useState } from 'react';
import getParcelDetails  from '../Services/Api/getParcelDetails';

function ParcelDetailsPage() {
    const [parcelId, setParcelId] = useState('');
    const [parcelDetails, setParcelDetails] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const details = await getParcelDetails(parcelId);
            setParcelDetails(details);
            setError('');
        } catch (error) {
            console.error('Error fetching parcel details:', error);
            setParcelDetails(null);
            setError('An error occurred while fetching parcel details.');
        }
    };

    return (
        <div>
            <h1>Parcel Details</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="parcelId">Enter Parcel ID:</label>
                <input 
                    type="text" 
                    id="parcelId" 
                    value={parcelId} 
                    onChange={(e) => setParcelId(e.target.value)} 
                />
                <button type="submit">Get Details</button>
            </form>
            {error && <p>{error}</p>}
            {parcelDetails && (
                <div>
                    <h2>Parcel ID: {parcelDetails.id}</h2>
                    <p>Name: {parcelDetails.name}</p>
                    <p>Delivery Date: {parcelDetails.deliveryDate}</p>
                    <p>Address: {parcelDetails.address}</p>
                    <p>Postcode: {parcelDetails.postcode}</p>
                    {/* Add more details as needed */}
                </div>
            )}
        </div>
    );
}

export default ParcelDetailsPage;
