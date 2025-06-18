import React, { useState } from "react";
import axios from "axios";

function AddProducts() {
  const [formData, setFormData] = useState({
    id: 2,
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const saveDatatoDB = async () => {
    const data = await axios
      .post("http://localhost:3400/product/saveproduct", {...formData,id:formData.id+Math.random()})
      .catch((error) => {
        console.log(error);
      });
    console.log("Data saved to the database:", data);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // You can handle actual submission logic here (e.g., send to API)
    saveDatatoDB();
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "600px", margin: "auto" }}>
      <h2>Add Product Form</h2>
      <div>
        <label className="mx-4 my-4">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="mx-4 my-4">Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="mx-4 my-4">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="mx-4 my-4">Category</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="mx-4 my-4">Image URL</label>
        <input
          type="url"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddProducts;
