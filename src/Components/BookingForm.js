import React, { useState, useEffect } from 'react';
import DropDownGuests from './DropDownGuests';
import DropDownTime from './DropDownTime';
import DropDownOccasion from './DropDownOccasion';
import './BookingForm.css';

function BookingForm() {
    const [formData, setFormData] = useState({
        date: '',
        guests: '',
        time: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        occasion: ''
    });

    const [availableTimes, setAvailableTimes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const API_URL = "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js";

    useEffect(() => {
        console.log("Form data changed:", formData);
    }, [formData]);

    useEffect(() => {
        fetchAvailableTimes(formData.date);
    }, [formData.date]);

    const fetchAvailableTimes = (date) => {
        setIsLoading(true);
        fetch(`${API_URL}?date=${date}`)
            .then(response => response.json())
            .then(data => {
                setAvailableTimes(data.times);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching available times:', error);
                setIsLoading(false);
            });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formInputs = [
            formData.date,
            formData.guests,
            formData.time,
            formData.firstName,
            formData.lastName,
            formData.email,
            formData.phoneNumber,
            formData.occasion
        ];

        setFormData({
            date: '',
            guests: '',
            time: '',
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            occasion: ''
        }, () => {
            console.log("Form inputs:", formInputs);
        });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className="form-date">
                <label htmlFor="dateInput">Select Date:</label>
                <input
                    type="date"
                    id="dateInput"
                    name="date"
                    value={formData.date}
                    onChange={(event) => {
                        const selectedDate = event.target.value;
                        setFormData({ ...formData, date: selectedDate });
                    }}
                />
            </div>
            <div className="form-group">
                <div className="label-container">
                  <label>Select Guests #:</label>
                  <div className='guest-container'>
                    <DropDownGuests onSelect={(guests) => setFormData({...formData, guests})} />
                  </div>
                </div>
            </div>
            <div className="form-group">
                <div className="label-container">
                  <label>Select Time:</label>
                  <div className='time-container'>
                    <DropDownTime times={availableTimes} onSelect={(time) => setFormData({...formData, time})} />
                  </div>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="firstNameInput">First Name:</label>
                <input
                    type="text"
                    id="firstNameInput"
                    name="firstName"
                    placeholder='Enter first name'
                    value={formData.firstName}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="lastNameInput">Last Name:</label>
                <input
                    type="text"
                    id="lastNameInput"
                    name="lastName"
                    placeholder='Enter last name'
                    value={formData.lastName}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="emailInput">Email:</label>
                <input
                    type="email"
                    id="emailInput"
                    name="email"
                    placeholder='email@example.com'
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="phoneInput">Phone Number:</label>
                <input
                    type="tel"
                    id="phoneInput"
                    name="phoneNumber"
                    placeholder='(123) - 456 - 7890'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <div className="label-container">
                  <label>Select an Occasion:</label>
                  <div className='occasion-container'>
                    <DropDownOccasion onSelect={(occasion) => setFormData({...formData, occasion})} />
                  </div>
                </div>
            </div>
            <button className="submit" type="submit" disabled={isLoading}>Submit</button>
        </form>
    );
}

export default BookingForm;




