/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchJobDetail } from "../../fetching/jobDetail"

export default function JobDetail() {
  const { id } = useParams();
  const [jobDetail, setJobDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchJobDetail(id);
        setJobDetail(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching job detail:", error);
      }
    };
    setLoading(true);
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleApplyClick = () => {
    navigate(`/job-apply/${jobDetail.id}`);
  };

  const handleCompanyDetail = () => {
    navigate(`/companydetail/${id}`)
  }

  return (
    <div className="flex justify-center pb-60">
      <div className="min-w-[80%]">
        <div className="w-full">
          {/* Header */}
          <div className="mt-[40px]">
            <h2 className="font-normal">{jobDetail.CompanyProfile?.name}</h2>

            <h1 className="text-4xl font-semibold">{jobDetail.title}</h1>
            {/* Header End */}
          </div>

          {/* Apply */}
          <button
            onClick={() => handleApplyClick()}
            className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl mt-[20px]"
          >
            Apply
          </button>
          {/* Apply End */}

          {/* Job Information Card */}
          <div className="mt-[20px] p-3 border-black border-2 rounded-md">
            <div className="grid grid-cols-3 gap-4">
              {/* Type */}
              <div>
                <div className="flex flex-col items-center">
                  <h3 className="text-md font-bold">Type</h3>
                  <div>
                    {jobDetail.Types &&
                      jobDetail.Types.map((type) => (
                        <div key={type.id}>
                          <p>{type.title}</p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              {/* Location */}
              <div>
                <div className="flex flex-col items-center">
                  <h3 className="text-md font-bold">Location</h3>
                  <p>{jobDetail.location}</p>
                </div>
              </div>

              {/* Salary */}
              <div>
                <div className="flex flex-col items-center">
                  <h3 className="text-md font-bold">Salary</h3>
                  <p>
                    {jobDetail.salary_start} - {jobDetail.salary_end}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Job Information Card End */}

          {/* Description */}
          <h2 className="mt-10 mb-0 font-semibold">Job Description</h2>
          <div className="bg-black bg-opacity-20 rounded-md p-4 border-black border-opacity-80">
            <p>{jobDetail.description}</p>
          </div>
          {/* Description End */}

        {/* Requirement Card */}
        <h2 className="mb-0 mt-10 font-semibold">Job Requirements</h2>
        <div className=" p-3 border-black border-2 rounded-md">
            
            <div className="grid grid-cols-4 gap-4">
              {jobDetail.Skills &&
                jobDetail.Skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="min-w-[120px] mb-3 p-3 rounded-md"
                  >
                    <div className="flex flex-col items-center">
                      <h3 className="text-md font-bold">{skill.name}</h3>
                      <div>
                        <p>{skill.level}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {/* Requirement Card End */}

          {/* About Company */}
          <h2 className="mt-10 mb-0 font-semibold">
            About {jobDetail.CompanyProfile?.name}
          </h2>
          <h3 className="bg-black bg-opacity-20 rounded-md p-4 border-black border-opacity-80">
            {jobDetail.CompanyProfile?.description}
          </h3>
          <button
            onClick={handleCompanyDetail}
            className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl mt-[20px]"
          >
            Company Detail
          </button>
          {/* About Company End */}
        </div>
      </div>
    </div>
  );
}