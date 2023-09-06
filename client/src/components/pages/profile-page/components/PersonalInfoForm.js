import React, { useState } from 'react';

export default function PersonalInfoForm() {
  const [formData, setFormData] = useState({
    userName: '',
    userAvatar: null,
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    occupation: '',
    country: '',
    streetAddress: '',
    city: '',
    stateProvince: '',
    zipPostalCode: '',
    emergencyContact: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      userAvatar: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to the server or handle it accordingly
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-4">
        <label htmlFor="userName">Username</label>
        <input type="text" id="userName" name="userName" value={formData.userName} onChange={handleChange} />
      </div>
      <div className="mb-4">
        <label htmlFor="userAvatar">Avatar</label>
        <input type="file" id="userAvatar" name="userAvatar" onChange={handleFileChange} />
      </div>
      {/* ... other fields like firstName, lastName, etc. */}
      <div className="mb-4">
        <label htmlFor="userName">First Name</label>
        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
      </div>
      <div className="mb-4">
        <label htmlFor="userName">Last Name</label>
        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
      </div>
      <div className="mb-4">
        <label htmlFor="userName">Age</label>
        <input type="text" id="age" name="age" value={formData.age} onChange={handleChange} />
      </div>
      <div className="mb-4">
        <label htmlFor="userName">Gender</label>
        <input type="text" id="gender" name="gender" value={formData.gender} onChange={handleChange} />
      </div>
      <div className="mb-4">
        <label htmlFor="userName">Occupation</label>
        <input type="text" id="occupation" name="occupation" value={formData.occupation} onChange={handleChange} />
      </div>
      <div className="mb-4">
        <label htmlFor="userName">Country</label>
        <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} />
      </div>
      <div className="mb-4">
        <label htmlFor="userName">Street Address</label>
        <input type="text" id="streetAddress" name="streetAddress" value={formData.streetAddress} onChange={handleChange} />
      </div>
      <div className="mb-4">
        <label htmlFor="userName">City</label>
        <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} />
      </div>
      <div className="mb-4">
        <label htmlFor="userName">State/Province</label>
        <input type="text" id="stateProvince" name="stateProvince" value={formData.stateProvince} onChange={handleChange} />
      </div>
      <div className="mb-4">
        <label htmlFor="userName">ZIP/Postal Code</label>
        <input type="text" id="zipPostalCode" name="zipPostalCode" value={formData.zipPostalCode} onChange={handleChange} />
      </div>
      <div className="mb-4">
        <label htmlFor="emergencyContact">Emergency Contact</label>
        <input type="text" id="emergencyContact" name="emergencyContact" value={formData.emergencyContact} onChange={handleChange} />
      </div>
      <button type="submit">Update</button>
    </form>
  );
}