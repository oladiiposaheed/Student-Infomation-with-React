import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddStudentForm from "./components/AddStudentForm";
import TableView from "./components/TableView";

function App() {

  const [viewMode, setViewMode] = useState('card');   // State: 'card' or 'table'
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem('student-info-data');
    return saved ? JSON.parse(saved) : [];
  });       // State: Load students from localStorage, or start empty

  const [searchTerm, setSearchTerm] = useState('');   // Search state
  const [filterGender, setFilterGender] = useState('');
  const [filterBloodGroup, setFilterBloodGroup] = useState('');
  const [filterGenotype, setFilterGenotype] = useState('');

  // Save students to localStorage whenever the list changes
  useEffect(() => {
    localStorage.setItem('student-info-data', JSON.stringify(students));
  }, [students]);

  // Function to switch view
  const toggleView = () => {
    if (viewMode == 'card') {
      setViewMode('table');
    } else {
      setViewMode('card');
    }
  };

  const addStudent = (studentData) => {
    // studentData = { name: "xyz", email: "xyz@example.com" }
    const newStudent = {
      ...studentData,
      id: Date.now(),
      photo: `https://ui-avatars.com/api/?name=${studentData.name}&size=200&background=1b5e20&color=fff&bold=true`,
    };

    // Add to array (immutable — create new array)
    setStudents([...students, newStudent])
  };

  // Delete student function by ID
  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  }

  // Filter students based on search
  const filteredStudents = students.filter(student => {
    const matchesSearch = 
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.state.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesGender = filterGender ? student.gender === filterGender : true;
    const matchesBlood = filterBloodGroup ? student.bloodGroup === filterBloodGroup : true;
    const matchesGenotype = filterGenotype ? student.genotype === filterGenotype : true;
  
    return matchesSearch && matchesGender && matchesBlood && matchesGenotype;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 p-6 md:p-10">
      
      <div className="max-w-7xl mx-auto">

        {/* Pass viewMode and toggleView to Header */}
        <Header viewMode={viewMode} onToggleView={toggleView} />

        {/* Add form here */}
        <AddStudentForm onAddStudent={addStudent} />

        {/* Display Student list */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            📋 Students ({filteredStudents.length})
          </h2>

          {/* Quick stats badges */}
          <div className="flext gap-3 mb-4 flex-wrap">
            <span className="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-medium">
              👥 Total: {students.length}
            </span>
            <span className="text-sm bg-pink-100 text-pink-700 px-3 py-1 rounded-full font-medium">
              👩 Female: {students.filter(s => s.gender === 'Female').length}
            </span>
            <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
              👨 Male: {students.filter(s => s.gender === 'Male').length}
            </span>
          </div>

          {/* Search + Filters bar */}
          <div className="bg-white rounded-2xl shadow-md p-4 mb-4">
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="🔍 Search by name, department, or state..."
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-indigo-500 focus:outline-none"
            />

            {/* Filter dropdowns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <select value={filterGender} onChange={(e) => setFilterGender(e.target.value)}
                className="boder-2 border-gray-300 rounded-lg px-3 py-2 focus:border-indigo-500 focus:outline-none bg-white"
              >
                <option value="">All Genders</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <select value={filterBloodGroup} onChange={(e) => setFilterBloodGroup(e.target.value)}
                className="border-2 border-gray-300 rounded-lg px-3 py-2 focus:border-indigo-500 focus:outline-none bg-white"  
              >
                <option value="">All Blood Groups</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>

              <select
                value={filterGenotype} onChange={(e) => setFilterGenotype(e.target.value)}
                className="border-2 border-gray-300 rounded-lg px-3 py-2 focus:border-indigo-500 focus:outline-none bg-white"
              >
                <option value="">All Genotype</option>
                <option value="AA">AA</option>
                <option value="AS">AS</option>
                <option value="SS">SS</option>
                <option value="AC">AC</option>
              </select>
            </div>
          </div>

          {students.length === 0 ? (
            // Empty state — no students yet
            <p className="text-gray-400 text-center py-8">
              No students added yet. Use the form above.
            </p>
          ) : viewMode === 'card' ? (
            // Card view
            <div className="space-y-3">
              {filteredStudents.map(student => (
                <div key={student.id} className="flex items-center gap-4 bg-gray-100 p-4 rounded-xl">
                  {/* Avatar */}
                  <img 
                    src={student.photo} alt={student.name}
                    className="w-12 h-12 rounded-full" 
                  />
                  {/* Student details */}
                  <div className="flex-1">
                    <p className="font-bold text-gray-500 text-lg">{student.name}</p>
                    <p className="text-gray-500 text-sm">{student.email}</p>
                    <div className="flex gap-2 mt-3 flex-wrap">
                      <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">
                        {student.gender || 'N/A'}
                      </span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.4 rounded-full">
                        {student.age ? `Age: ${student.age}` : 'N/A' }
                      </span>
                      <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">
                        {student.department || 'N/A'}
                      </span>
                      <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">
                        {student.bloodGroup || 'N/A'}
                      </span>
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                        {student.genotype || 'N/A'}
                      </span>
                    </div>
                  </div>

                  {/* Delete student button */}
                  <button
                    onClick={() => deleteStudent(student.id)}
                    className="bg-red-100 text-rose-600 px-3 py-1 rounded-lg hover:bg-red-200 text-sm transition-colors"
                  >
                    🗑️
                  </button>

                  {/* ID */}
                  <span className="text-xs text-gray-400">#{student.id}</span>
                </div>
              ))}
            </div>
          ) : (
            // Table view
            <TableView students={filteredStudents} onDelete={deleteStudent} />
          )}
        </div>

        {/* Show current view mode */}
        <p className="text-center text-gray-500 py-10">
          Current view: <strong>{viewMode}</strong>
        </p>
      </div>
    </div>
  );
}

export default App;