import React, { useState } from 'react'
import axios from "axios"

function Fetch() {
  let endpoint = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);

  // const fetchData = () => {
  //   fetch(endpoint)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }

  const fetchData = () => {
    axios.get(endpoint).then((response) => {
      console.log(response.data);
      setData(response.data)
    })

  }

  return (
    <div>
      <h1>Fetch</h1>
      <button className='bg-green-700 rounded-md' onClick={fetchData}>Fetch</button>
      {data.map((item, index) => (
        <div key={index}>
          {item.name}</div>
      ))};
    </div>
  );
};

export default Fetch