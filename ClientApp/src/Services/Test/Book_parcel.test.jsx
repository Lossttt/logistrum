import { render, screen, fireEvent } from '@testing-library/react';
import BookParcel from './BookingPage';

describe('BookParcel', () => {
  test('should call handleSubmit when button is clicked', () => {
    // Render the component
    render(<BookParcel />);

    // Mock the API response
    const mockResponse = { message: 'Parcel booked successfully' };
    jest.spyOn(Api, 'bookParcel').mockResolvedValue(mockResponse);

    // Fill in the form fields
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Delivery Date'), { target: { value: '2022-01-01' } });
    // Fill in other form fields...

    // Click the submit button
    fireEvent.click(screen.getByText('Submit'));

    // Assert that handleSubmit was called
    expect(Api.bookParcel).toHaveBeenCalledWith({
      name: 'John Doe',
      deliveryDate: '2022-01-01',
      // Include other form field values...
    });

    // Assert that the message state is updated
    expect(screen.getByTestId('message')).toHaveTextContent('Parcel booked successfully');
  });
});