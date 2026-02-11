export default function Dashboard_NGO() {
  return (
    <>
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <input
          placeholder="Search"
          className="px-4 py-2 border rounded-lg text-sm"
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {[
          { label: "Total Projects", value: 120 },
          { label: "Active Applications", value: 45 },
          { label: "Completed Projects", value: 75 },
        ].map((item) => (
          <div key={item.label} className="bg-white p-6 rounded-xl border">
            <p className="text-sm text-gray-500">{item.label}</p>
            <p className="text-2xl font-semibold">{item.value}</p>
          </div>
        ))}
      </div>
       {/* Recent Applications */} 
       <div className="bg-white rounded-xl border p-6"> 
        <h2 className="font-medium mb-4">Recent Applications</h2>
         <table className="w-full text-sm"> 
          <thead className="text-gray-500 border-b"> 
            <tr> <th className="text-left py-2">Applicant Name</th>
             <th className="text-left py-2">Project</th> <th className="text-left py-2">Status</th> <th className="text-left py-2">Date Submitted</th> 
             </tr> </thead>
              <tbody className="divide-y">
                 {[ { name: "Emily Carter", project: "Green Valley Housing", status: "Pending", date: "2024-07-20", }, { name: "Liam Foster", project: "Urban Renewal Initiative", status: "Approved", date: "2024-07-15", }, ].map((row) => ( <tr key={row.name}> <td className="py-3">{row.name}</td>
                  <td className="text-green-700">{row.project}</td> 
                  <td> <span className="px-3 py-1 rounded-full bg-gray-100 text-xs"> {row.status} </span> </td> 
                  <td className="text-gray-500">{row.date}</td> </tr> ))} </tbody> </table> </div>
    </>
  );
}
