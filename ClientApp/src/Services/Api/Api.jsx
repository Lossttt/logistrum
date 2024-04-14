import axios from 'axios';

const Api = {
    bookParcel: async (parcelData) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/ParcelBooking`, parcelData);
            return response.data;
        } catch (error) {
            console.error('Error booking parcel:', error);
            throw error;
        }
    }
};

export default Api;
