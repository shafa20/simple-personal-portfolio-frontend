import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://api.restful-api.dev/objects')
      .then(response => {
        setData(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
    
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            {item.data ? (
              <div>
                <p>Color: {item.data.color}</p>
                <p>Capacity: {item.data.capacity}</p>
              </div>
            ) : (
              <p>No additional data available</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiData;
