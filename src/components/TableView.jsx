function TableView({ students, onDelete }) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left">
                {/* Table header */}
                <thead>
                    <tr className="bg-gray-100 text-gray-600 text-sm">
                    <th className="p-3">Photo</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Gender</th>
                    <th className="p-3">Age</th>
                    <th className="p-3">State</th>
                    <th className="p-3">Blood Grp</th>
                    <th className="p-3">Genotype</th>
                    <th className="p-3">Department</th>
                    <th className="p-3">Subject</th>
                    <th className="p-3">Action</th>
                </tr>
                </thead>

                {/* Table body */}
                <tbody>
                    {students.map(student => (
                        <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="p-3">
                                <img src={student.photo} alt={student.name} 
                                    className="w-10 h-10 rounded-full" />
                            </td>
                            <td className="p-3 font-semibold text-gray-800">{student.name}</td>
                            <td className="p-3 text-gray-500 text-sm">{student.email}</td>
                            <td className="p-3 text-sm">{student.gender || '-'}</td>
                            <td className="p-3 text-sm">{student.age || '-'}</td>
                            <td className="p-3 text-sm">{student.state || '-'}</td>
                            <td className="p-3 text-sm">{student.bloodGroup || '-'}</td>
                            <td className="p-3 text-sm">{student.genotype || '-'}</td>
                            <td className="p-3 text-sm">{student.department || '-'}</td>
                            <td className="p-3 text-sm">{student.subject || '-'}</td>
                            <td className="p-3">
                                <button
                                    onClick={() => onDelete(student.id)}
                                    className="bg-red-100 text-red-600 px-2 py-1 rounded-lg hover:bg-red-200 text-xs"
                                >
                                    🗑️
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableView;