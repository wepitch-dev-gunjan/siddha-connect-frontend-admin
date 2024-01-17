import React, { useState, useEffect } from 'react';

const opencageApiKey = 'c456e08fd5254dd4b07c7a68b57036ff';

const Location = () => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          // Store location coordinates

          setLocation({ latitude, longitude });

          // Fetch address based on coordinates
          await getAddressFromCoordinates(latitude, longitude);
          console.log(address);
        },
        (error) => {
          console.error(`Error getting location: ${error.message}`);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  // Function to fetch address from coordinates using OpenCage Geocoding API
  const getAddressFromCoordinates = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${opencageApiKey}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch address');
      }

      const data = await response.json();

      // Extract the formatted address from the response
      const formattedAddress =
        data.results && data.results.length > 0
          ? data.results[0].formatted
          : 'Address not available';

      // Store the address in the state
      setAddress(formattedAddress);
    } catch (error) {
      console.error('Error fetching address:', error.message);
    }
  };

  // Render the component with location and address information
  return (
    <div>
      {location ? (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          <p>Address: {address || 'Loading address...'}</p>
          {/* You can use the 'address' state as needed in your application */}
        </div>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
};

export default Location;
