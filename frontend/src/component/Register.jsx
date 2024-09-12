import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handlesubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        try {
            const res = (await axios.post("http://localhost:4000/users/register", formData)).data;
            console.log(res);
        } catch (error) {
            console.log("register error", error);
        }
    };

    return (
        <>
            <form onSubmit={handlesubmit}>
                <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nameInput"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="emailInput"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="passwordInput" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="passwordInput"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
}

export default Register;
