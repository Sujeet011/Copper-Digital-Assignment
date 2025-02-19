import React, { useEffect, useState } from "react";
import { fetchCancerData } from "../services/api";
import { Link } from "react-router-dom";

const CancerList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCancerData().then((records) => {
      setData(records);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Cancer Data Records</h1>
      <table border="1" style={{ width: "100%", textAlign: "center" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Diagnosis</th>
            <th>Radius Mean</th>
            <th>Texture Mean</th>
            <th>Perimeter Mean</th>
            <th>Area Mean</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.diagnosis}</td>
              <td>{record.radius_mean}</td>
              <td>{record.texture_mean}</td>
              <td>{record.perimeter_mean}</td>
              <td>{record.area_mean}</td>
              <td>
                <Link to={`/cancer/${record.id}`} style={{ color: "blue" }}>
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CancerList;
