import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [formData, setFormData] = useState({
    normalInput: "",
    focusInput: "",
    activeInput: "",
    errorInput: "",
    password: "",
    autocompleteInput: "",
    date: "",
    numberValue: 0,
  });

  const [errors, setErrors] = useState({
    emailError: false,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Email Validation for the error field
    if (name === "errorInput") {
      setErrors({
        ...errors,
        emailError: !/^\S+@\S+\.\S+$/.test(value),
      });
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Sample UI Form</h2>
      <div className="row g-4">
        {/* Normal Input */}
        <div className="col-md-4">
          <label className="form-label">Normal</label>
          <input
            type="text"
            className="form-control"
            name="normalInput"
            placeholder="Placeholder text"
            value={formData.normalInput}
            onChange={handleChange}
          />
        </div>

        {/* Focus Input */}
        <div className="col-md-4">
          <label className="form-label">Focus</label>
          <input
            type="text"
            className="form-control"
            name="focusInput"
            placeholder="Placeholder text"
            value={formData.focusInput}
            autoFocus
            onChange={handleChange}
          />
        </div>

        {/* Active Input */}
        <div className="col-md-4">
          <label className="form-label">Active</label>
          <input
            type="text"
            className="form-control"
            name="activeInput"
            placeholder="Placeholder text"
            value={formData.activeInput}
            onChange={handleChange}
          />
        </div>

        {/* Error Field */}
        <div className="col-md-4">
          <label className="form-label">Error</label>
          <input
            type="email"
            className={`form-control ${errors.emailError ? "is-invalid" : ""}`}
            name="errorInput"
            placeholder="Placeholder text"
            value={formData.errorInput}
            onChange={handleChange}
          />
          {errors.emailError && (
            <div className="invalid-feedback">Please provide a valid email address.</div>
          )}
        </div>

        {/* Date Field */}
        <div className="col-md-4">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        {/* Password Field */}
        <div className="col-md-4">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="***********"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {/* Autocomplete */}
        <div className="col-md-4">
          <label className="form-label">Autocomplete</label>
          <input
            type="text"
            className="form-control"
            name="autocompleteInput"
            placeholder="Search..."
            value={formData.autocompleteInput}
            onChange={handleChange}
          />
          {formData.autocompleteInput && (
            <ul className="list-group position-absolute w-50">
              <li className="list-group-item">UI design</li>
              <li className="list-group-item">UI design practice</li>
              <li className="list-group-item">UI pattern</li>
              <li className="list-group-item">Daily UI</li>
            </ul>
          )}
        </div>

        {/* Normal with Helper Text */}
        <div className="col-md-4">
          <label className="form-label">Normal</label>
          <input
            type="text"
            className="form-control"
            placeholder="Placeholder text"
          />
          <small className="form-text text-muted">
            Write any text that might help the user to fill the input.
          </small>
        </div>

        {/* Increment/Decrement Value */}
        <div className="col-md-4">
          <label className="form-label">Value</label>
          <div className="d-flex align-items-center">
            <button
              className="btn btn-outline-secondary"
              onClick={() =>
                setFormData({
                  ...formData,
                  numberValue: formData.numberValue - 1,
                })
              }
            >
              -
            </button>
            <input
              type="number"
              className="form-control text-center mx-2"
              value={formData.numberValue}
              readOnly
            />
            <button
              className="btn btn-outline-secondary"
              onClick={() =>
                setFormData({
                  ...formData,
                  numberValue: formData.numberValue + 1,
                })
              }
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
