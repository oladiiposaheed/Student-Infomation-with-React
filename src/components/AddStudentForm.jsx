import { useState } from "react";

// Receive onAddStudent function from App
function AddStudentForm({ onAddStudent }) {

    // State to hold form values
    const [formData, setFormData] = useState({
        // Student information
        name: '',
        email: '',
        gender: '',
        age: '',
        state: '',
        country: '',
        bloodGroup: '',
        genotype: '',
        department: '',
        subject: '',
    });

    // Handle typing in any field
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,         // Keep other fields unchanged
            [name]: value,       // Update this field
        });
    };

    // Called when user clicks "Add Student"
    const handleSubmit = (e) => {
        e.preventDefault();

        // Only add if both fields are filled
        if (formData.name.trim() && formData.email.trim()) {
            onAddStudent(formData);
            setFormData({
                name: '', email: '', gender: '', age: '', state: '', country: '',
                bloodGroup: '', genotype: '', department: '', subject: ''
            }); // Clear form
        }
    };
    return (
        <div>
            <h1 className="text-xl font-bold text-gray-800 mb-4">
                ➕ Add New Student
            </h1>
            <form onSubmit={handleSubmit}>

                {/* Name + Email fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-1">Full Name</label>
                        <input 
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter student name"
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-indigo-500 focus:outline-none"
                        />
                    </div>

                    {/* Email field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-1">Email</label>
                        <input 
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter student email"
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-indigo-500 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Gender + Age row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Gender</label>
                        <select name="gender" value={formData.gender} onChange={handleChange} 
                                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-indigo-500 focus:outline-none bg-white"
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Age</label>
                        <input type="number" name="age" value={formData.age} onChange={handleChange}
                            placeholder="Enter age" 
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-indigo-500 focus:outline-none"
                        />
                    </div>
                </div>

                {/* State + Country row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-1">State</label>
                        <input 
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            placeholder="Enter state"
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-indigo-500 focus:outline-none"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-1">Country</label>
                        <input 
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            placeholder="Enter country"
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-indigo-500 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Blood Group + Genotype row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Blood Group</label>
                        <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} 
                                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-indigo-500 focus:outline-none bg-white"
                        >
                            <option value="">Select Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Genotype</label>
                        <select name="genotype" value={formData.genotype} onChange={handleChange}
                            placeholder="Enter genotype" 
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-indigo-500 focus:outline-none"
                        >
                            <option value="">Select Genotype</option>
                            <option value="AA">AA</option>
                            <option value="AS">AS</option>
                            <option value="AC">AC</option>
                            <option value="SS">SS</option>
                        </select>
                    </div>
                </div>

                {/* Department + Subject row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Department</label>
                        <input type="text" name="department"  value={formData.department} onChange={handleChange}
                            placeholder="Enter department"
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-indigo-500 focus:outline-none"
                        />
                        
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Subject</label>
                        <input type="text" name="subject" value={formData.subject} onChange={handleChange}
                            placeholder="Enter subject" 
                            className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:border-indigo-500 focus:outline-none"
                        />
                    </div>
        

                </div>

                <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3
                              rounded-xl hover:bg-indigo-700 transition-colors">
                    Add Student
                </button>
            </form>
        </div>
    );
}

export default AddStudentForm;