import { post } from "../Api/ApiConfig";

// Function to handle parcel submission
async function submitParcel (parcelData) {
    try {
        const response = await post('/ParcelBooking', parcelData);
        console.log('Parcel booked:', response.data);
        return response.data; // return the respons data if needed...
    } catch (error) {
        console.error('Error booking parcel:', error);
        throw error;
    }
}

export default submitParcel;