"use client"; // Add this line to mark the component as a client-side component

import React, { useState, useEffect } from "react";

const Membership = ({onBack}) => {
  const [members, setMembers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const mockMembers = [
      { name: "Ifra", batch: "2020", degree: "B.Tech" },
      { name: "Anaya", batch: "2019", degree: "MBA" },
      { name: "Kanishka", batch: "2021", degree: "M.Tech" },
      { name: "Jiya Sharma", batch: "2018", degree: "B.Tech" },
      { name: "Arshiya Garg", batch: "2018", degree: "BCA" },
      { name: "Juhi Khanna", batch: "2020", degree: "MCA" },
      { name: "Vania Goel", batch: "2022", degree: "B.Tech" },
      { name: "Aditi Mehta", batch: "2019", degree: "B.Arch" },
      { name: "Anusha Arora", batch: "2023", degree: "M.Tech" },
      { name: "Pulkita Gupta", batch: "2017", degree: "B.Tech+DMAM" },
      { name: "Arisha Rizwan", batch: "2021", degree: "BCA" },
      { name: "Noor Aisha", batch: "2016", degree: "MCA" },
      { name: "Riya Aggarwal", batch: "2024", degree: "B.Tech" },
      { name: "Shreya Batabyal", batch: "2018", degree: "M.Tech" },
      { name: "Aarya Soni", batch: "2020", degree: "B.Arch" },
      { name: "Sania Verma", batch: "2022", degree: "BCA" },
      { name: "Nishtha Mishra", batch: "2019", degree: "MCA" },
      { name: "Krikshita Sachdeva", batch: "2017", degree: "B.Tech" },
      { name: "Pawni", batch: "2023", degree: "B.Tech+DMAM" },
      { name: "Aditi Kumari", batch: "2016", degree: "B.Arch" },
      { name: "Anjali Gupta", batch: "2021", degree: "M.Tech" },
      { name: "Divya Chawla", batch: "2024", degree: "BCA" },
      { name: "Khushi Yadav", batch: "2018", degree: "MCA" },
      { name: "Poornima", batch: "2020", degree: "B.Tech" },
      { name: "Pragya", batch: "2022", degree: "B.Tech+DMAM" },
      { name: "Princy", batch: "2019", degree: "B.Arch" },
      { name: "Sanjana", batch: "2017", degree: "M.Tech" },
      { name: "Shilpi", batch: "2023", degree: "BCA" },
      { name: "Girisha Barodia", batch: "2016", degree: "MCA" },
      { name: "Hanshika Duhoon", batch: "2021", degree: "B.Tech" },
      { name: "Nimisha", batch: "2024", degree: "B.Tech+DMAM" },
      { name: "Harshita", batch: "2018", degree: "B.Arch" },
      { name: "Laavanya", batch: "2020", degree: "M.Tech" },
      { name: "Mehak Sharma", batch: "2022", degree: "BCA" },
      { name: "Nippu", batch: "2019", degree: "MCA" },
      { name: "Chahat Sharma", batch: "2016", degree: "B.Arch" },
      { name: "Akansha Pal", batch: "2021", degree: "M.Tech" },
      { name: "Anjana", batch: "2024", degree: "BCA" },
      { name: "Kasak Gupta", batch: "2018", degree: "MCA" },
      { name: "Diksha", batch: "2020", degree: "B.Tech" },
      { name: "Kiran", batch: "2022", degree: "B.Tech+DMAM" },
      { name: "Diksha Gupta", batch: "2019", degree: "B.Arch" },
      { name: "Jayeeta Shome", batch: "2017", degree: "M.Tech" },
      { name: "Riya Verma", batch: "2023", degree: "BCA" },
      { name: "Ritu Kumari", batch: "2016", degree: "MCA" },
      { name: "Riya Tanwar", batch: "2021", degree: "B.Tech" },
      { name: "Niharika", batch: "2024", degree: "B.Tech+DMAM" },
      { name: "Nisha", batch: "2018", degree: "B.Arch" },
      { name: "Tannu", batch: "2020", degree: "M.Tech" },
      { name: "Anjali", batch: "2022", degree: "BCA" },
      { name: "Ishita", batch: "2019", degree: "MCA" },
      { name: "Kashish", batch: "2017", degree: "B.Tech" },
      { name: "Mansi", batch: "2023", degree: "B.Tech+DMAM" },
      { name: "Mishka", batch: "2016", degree: "B.Arch" },
      { name: "Poonam Meena", batch: "2021", degree: "M.Tech" },
      { name: "Yogita", batch: "2024", degree: "BCA" },
      { name: "Anushree", batch: "2018", degree: "MCA" },
      { name: "Manisri", batch: "2020", degree: "B.Tech" },
      { name: "Sneha", batch: "2022", degree: "B.Tech+DMAM" },
      { name: "Vanshika", batch: "2019", degree: "B.Arch" },
      { name: "Sneha Garg", batch: "2017", degree: "M.Tech" },
      { name: "Swarnika", batch: "2023", degree: "BCA" },
      { name: "Tulsi", batch: "2016", degree: "MCA" },
      { name: "Yashasvi", batch: "2021", degree: "B.Tech" },
      { name: "Sanskriti Debnath", batch: "2024", degree: "B.Tech+DMAM" },
      { name: "Srinicca Ohri", batch: "2018", degree: "B.Arch" },
      { name: "Vanshika Jain", batch: "2020", degree: "M.Tech" }
    ];
    setMembers(mockMembers);
  }, []);
  

  // Filter members based on search term (name, batch, and degree)
  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(search.toLowerCase()) ||
    member.batch.toLowerCase().includes(search.toLowerCase()) ||
    member.degree.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen flex flex-col justify-between p-8">
      <div className="flex flex-col flex-grow">
        <h2 className="text-3xl font-bold text-center mb-8">Alumni Directory</h2>

        <input
          type="text"
          placeholder="Search by name, batch, or degree..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-3 rounded-lg mb-8 w-full lg:w-1/3 mx-auto block"
        />

        <div className="space-y-6">
          {filteredMembers.map((member, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md"
            >
              <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full font-semibold text-xl">
                {member.name[0]} {/* First letter of the name */}
              </div>
              <div className="ml-4 flex-grow">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.batch} - {member.degree}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={onBack} // Navigate back to the previous page
        className="bg-blue-500 text-white px-6 py-2 rounded-md mb-6 mx-auto block"
      >
        Back to Home
      </button>
    </div>
  );
};

export default Membership;
