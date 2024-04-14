import React, { useState } from 'react';
import submitParcel from './parcelService';

function BookingForm() {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        postcode: '',
        city: '',
        country: '',
        weight: 0,
        length: 0,
        height: 0,
        width: 0,
    });

    const [errors, setErrors] = useState({});

    const handleParcelSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await submitParcel(formData);
            // Handle successful submission, e.g., display a success message
            console.log('Parcel booked successfully:', response);
        } catch (error) {
            // Handle error, e.g., display an error message
            console.error('Error booking parcel:', error);
            if (error.response && error.response.data.errors) {
                setErrors(error.response.data.errors);
            }
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className="App d-flex align-items-center">
            <main className="form-signin w-100 m-auto">
                <form onSubmit={handleParcelSubmit} method="post">
                    <img className="mb-4" src="#" alt="" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Please provide parcel details</h1>

                    <h1 className="h5 mb-3 fw-normal">Address details</h1>
                    <div className="form-floating">
                        <input
                            type="text"
                            className={`form-control ${errors && errors.name ? 'is-invalid' : ''}`}
                            id="floatingInput"
                            placeholder="John Doe"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="floatingInput">Name</label>
                        {errors && errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>
                    <div className="form-floating">
                        <input
                            type="text"
                            className={`form-control ${errors && errors.address ? 'is-invalid' : ''}`}
                            id="floatingAddress"
                            placeholder="Rivium Boulevard 201"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="floatingAddress">Address</label>
                        {errors && errors.address && <div className="invalid-feedback">{errors.address}</div>}
                    </div>
                    <div className="form-floating">
                        <input
                            type="text"
                            className={`form-control ${errors && errors.postcode ? 'is-invalid' : ''}`}
                            id="floatingPostcode"
                            placeholder="2909 LK"
                            name="postcode"
                            value={formData.postcode}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="floatingPostcode">Postcode</label>
                        {errors && errors.postcode && <div className="invalid-feedback">{errors.postcode}</div>}
                    </div>
                    <div className="form-floating">
                        <input
                            type="text"
                            className={`form-control ${errors && errors.city ? 'is-invalid' : ''}`}
                            id="floatingCity"
                            placeholder="Capelle aan den IJssel"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="floatingCity">City</label>
                        {errors && errors.city && <div className="invalid-feedback">{errors.city}</div>}
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className={`form-control ${errors && errors.country ? 'is-invalid' : ''}`}
                            id="floatingCountry"
                            placeholder="NL"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="floatingCountry">Country (2 letter ISO-code)</label>
                        {errors && errors.country && <div className="invalid-feedback">{errors.country}</div>}
                    </div>

                    <h1 className="h5 mb-3 fw-normal">Parcel details</h1>
                    <div className="form-floating">
                        <input
                            type="number"
                            className={`form-control ${errors && errors.weight ? 'is-invalid' : ''}`}
                            id="floatingWeight"
                            placeholder="0"
                            name="weight"
                            value={formData.weight}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="floatingWeight">Weight (KG)</label>
                        {errors && errors.weight && <div className="invalid-feedback">{errors.weight}</div>}
                    </div>
                    <div className="form-floating">
                        <input
                            type="number"
                            className={`form-control ${errors && errors.length ? 'is-invalid' : ''}`}
                            id="floatingLength"
                            placeholder="0"
                            name="length"
                            value={formData.length}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="floatingLength">Length (CM)</label>
                        {errors && errors.length && <div className="invalid-feedback">{errors.length}</div>}
                    </div>
                    <div className="form-floating">
                        <input
                            type="number"
                            className={`form-control ${errors && errors.height ? 'is-invalid' : ''}`}
                            id="floatingHeight"
                            placeholder="0"
                            name="height"
                            value={formData.height}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="floatingHeight">Height (CM)</label>
                        {errors && errors.height && <div className="invalid-feedback">{errors.height}</div>}
                    </div>
                    <div className="form-floating">
                        <input
                            type="number"
                            className={`form-control ${errors && errors.width ? 'is-invalid' : ''}`}
                            id="floatingWidth"
                            placeholder="0"
                            name="width"
                            value={formData.width}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="floatingWidth">Width (CM)</label>
                        {errors && errors.width && <div className="invalid-feedback">{errors.width}</div>}
                    </div>

                    <button className="w-100 btn btn-lg btn-primary mt-5" type="submit">Book parcel</button>
                    <p className="mt-5 mb-3 text-muted">{/* Display message here */}</p>
                </form>
            </main>
        </div>
    );
}

export default BookingForm;
