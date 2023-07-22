import { useEffect, useState } from "react";
import { fetchAllJob } from "../../fetching/jobApplyById";
import ApplyCard from "../../components/ApplyCard";

export default function JobApplications() {
  const [applications, setApplications] = useState([]);
  console.log(applications);

  useEffect(() => {
    const fetchJobApplications = async () => {
      try {
        const response = await fetchAllJob();
        setApplications(response);
      } catch (error) {
        console.error("Error fetching job applications:", error);
      }
    };

    fetchJobApplications();
  }, []);

  return (
    <div className="bg-mint">
      <h1 className="text-4xl text-center font-semibold text-black">
        Your Applications
      </h1>
      <div className="mx-auto grid grid-cols-3 gap-5 py-10 container place-items-end px-20">
        {applications.map((application) => (
          <ApplyCard key={application.id} applications={application} />
        ))}
      </div>
    </div>
  );
}
