/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import convertToRupiah from "../lib/converty";

export default function JobCard({ job }) {
  const dateOnly = new Date(job.limit_date).toLocaleDateString();
  const navigate = useNavigate();
  const handleDetail = (id) => {
    navigate(`/job/${id}`);
  };

  return (
    <div className="w-full h-full py-1 px-1 rounded-xl">
      <div className="h-full group bg-white pb-4 pr-4 pt-1 pl-4 shadow-xl rounded-xl job-card">
        <div className="flex h-[100px] items-center gap-x-1">
          <img
            className="aspect-[2/2] w-16"
            src="https://idn-static-assets.s3-ap-southeast-1.amazonaws.com/school/10284.png"
            alt="Company Logo"
          />
          <div>
            <h3 className="text-sm font-bold text-black">
              {job.CompanyProfile?.name}
            </h3>

            <span className="text-sm text-black">{job.location}</span>
          </div>
        </div>
        <div className="py-1">
          <div className="flex justify-between">
            <h3 className="text-lg font-medium text-black">{job.title}</h3>
            <h3 className="text-sm text-black pr-3">{dateOnly}</h3>
          </div>
          <div className="my-1 text-sm text-black">
            {convertToRupiah(job.salary_start)} -{" "}
            {convertToRupiah(job.salary_end)}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleDetail(job.id)}
            type="button"
            className="font-medium bg-black text-white w-[30%] rounded-xl transition-all duration-300 group-hover:text-blue-500/80"
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );
}
