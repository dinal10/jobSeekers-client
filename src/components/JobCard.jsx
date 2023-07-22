/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export default function JobCard({ job }) {
  const navigate = useNavigate();
  const handleDetail = (id) => {
    navigate(`/job/${id}`);
  };

  return (
    <div className="w-full h-full max-w-xs shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="h-full group bg-black p-4 rounded-xl job-card">
        <div className="flex h-[40%] items-center gap-x-2">
          <img
            className="aspect-[2/2] w-16"
            src="https://idn-static-assets.s3-ap-southeast-1.amazonaws.com/school/10284.png"
            alt="Company Logo"
          />
          <div>
            <h3 className="text-md font-bold text-white">
              {job.CompanyProfile?.name}
            </h3>
            <span className="text-xs text-white">{job.location}</span>
          </div>
        </div>
        <div className="my-4">
          <h3 className="text-lg font-medium text-white">{job.title}</h3>
          <div className="mt-2 text-sm text-white">
            {job.salary_start} - {job.salary_end}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleDetail(job.id)}
            type="button"
            className="font-medium bg-white text-black w-full rounded-xl transition-all duration-300 group-hover:text-blue-500/80"
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );
}
