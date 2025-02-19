import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCancerById } from "../services/api";
import { Link } from "react-router-dom";

const CancerDetails = () => {
  const { id } = useParams();
  const [record, setRecord] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCancerById(id).then((data) => {
      setRecord(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!record) {
    return <h2>Record not found</h2>;
  }

  return (
    <div>
      <h1>Details for ID: {record.id}</h1>
      <p><strong>Diagnosis:</strong> {record.diagnosis}</p>
      <p><strong>Radius Mean:</strong> {record.radius_mean}</p>
      <p><strong>Texture Mean:</strong> {record.texture_mean}</p>
      <p><strong>Perimeter Mean:</strong> {record.perimeter_mean}</p>
      <p><strong>Area Mean:</strong> {record.area_mean}</p>
      <p><strong>Compactness Mean:</strong> {record.compactness_mean}</p>
      <Link to="/" style={{ color: "blue" }}>Back to List</Link>
    </div>
  );
};

export default CancerDetails;
