import { useState } from 'react';
import './Form.css';
const Form = () => {
  const [form, setForm] = useState({
    name: '',
    age: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', form);
    setSubmitted(true);
  };
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <p style={{ color: 'green', marginTop: '10px' }}>Form Submitted Successfully!</p>
      )}
    </div>
  );
};
export default Form;
