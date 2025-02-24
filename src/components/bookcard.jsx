// write the book component code here
import React from "react";

const BookCard = ({ image, name, genre, author }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "15px", margin: "10px", borderRadius: "8px", textAlign: "center", width: "250px" }}>
      <img src={image} alt={name} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "5px" }} />
      <h2>Charlie and the chocolate factory</h2>
      <p><strong>Family/Fantasy</strong> {genre}</p>
      <p><strong>Roald Dahl</strong> {author}</p>
    </div>
  );
};

export default BookCard;

