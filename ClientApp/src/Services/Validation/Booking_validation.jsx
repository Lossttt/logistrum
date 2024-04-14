const validateParcel = (parcelData) => {
    const errors = {};

    // Example validation rules:
    if (!parcelData.name) {
        errors.name = 'Name is required';
    }
    if (!parcelData.address) {
        errors.address = 'Address is required';
    }
    // Add more validation rules as needed

    return errors;
};

export default validateParcel;
