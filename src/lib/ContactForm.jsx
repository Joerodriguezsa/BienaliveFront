import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Form validation
    const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
        if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
        return newErrors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        }   else {
            console.log("Form submitted:", formData);
            setSubmitted(true);
            setFormData({ name: "", email: "", message: "" }); // Reset form
            setErrors({});
        }
    };

  return (
    <form id="contact_form" onSubmit={handleSubmit} noValidate>
        <div className="row">
            <div className="col-sm-6">
                <div className="mb-3">
                    <input className="form-control" type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Name" required />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
            </div>
            <div className="col-sm-6">
                <div className="mb-3">
                    <input className="form-control email" type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email" />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-6">
                <div className="mb-3">
                    <input className="form-control" type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Enter Subject" required />
                    {errors.subject && <p className="error">{errors.subject}</p>}
                </div>
            </div>
            <div className="col-sm-6">
                <div className="mb-3">
                    <input className="form-control" type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter Phone" required />
                    {errors.phone && <p className="error">{errors.phone}</p>}
                </div>
            </div>
        </div>
        <div className="mb-3">
            <textarea className="form-control" id="message" name="message" rows="7" value={formData.message} onChange={handleChange} placeholder="Enter Message" ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <div className="mb-3">
            <button className="theme-btn btn-style-one" type="submit"><span className="btn-title">Send message</span></button>
            <button type="reset" className="theme-btn btn-style-one"><span className="btn-title">Reset</span></button>
        </div>
    </form>
  );
};

export default ContactForm;