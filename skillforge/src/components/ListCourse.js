import React, { useEffect, useState } from 'react';
import axios from 'axios';

const List = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("logging in usereffect")
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/courses/');
        console.log("loffing response")
        console.log(response)
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {data ? (
        <div>
          {/* Render your data here */}
          <p>Data: {JSON.stringify(data)}</p>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default List;
