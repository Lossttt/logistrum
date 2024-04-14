import axios from 'axios';

const getParcelDetails  = async (parcelId) => {
    try {
        const response = await axios.get(`https://localhost:7016/api/ParcelBooking/${parcelId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching parcel:', error);
        throw error;
    }
};

export default getParcelDetails ;
