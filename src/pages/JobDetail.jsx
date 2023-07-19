/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchJobDetail } from "../fetching/jobDetail";

export default function JobDetail() {
  const { id } = useParams();
  const [jobDetail, setJobDetail] = useState({});
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="flex justify-center">
      <div className="min-w-[80%]">
        <div className="w-full ">
          {/* Header */}
          <div className="mt-[40px]">
            <h2 className="font-normal">{jobDetail.CompanyProfile?.name}</h2>

            <h1 className="text-4xl font-semibold">{jobDetail.title}</h1>
            {/* Header End */}
          </div>

          {/* Apply */}
          <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-[20px]">
            Apply
          </button>
          {/* Apply End */}

          {/* Job Information */}
          <div className="ml-[10px] mt-[20px] flex gap-4">
            {/* Type */}
            <div className="min-w-[120px] mb-3 p-3 border-black border-2 rounded-md">
              <div className="flex flex-col  items-center">
                <h3 className="text-md font-bold">Type</h3>
                <div className="">
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
            <div className="min-w-[120px] mb-3 p-3 border-black border-2 rounded-md">
              <div className="flex flex-col  items-center">
                <h3 className="text-md font-bold">Location</h3>
                <p>{jobDetail.location}</p>
              </div>
            </div>

            {/* Salary */}
            <div className="min-w-[120px] mb-3 p-3 border-black border-2 rounded-md">
              <div className="flex flex-col  items-center">
                <h3 className="text-md font-bold">Salary</h3>
                <p>
                  {jobDetail.salary_start} - {jobDetail.salary_end}
                </p>
              </div>
            </div>
          </div>
          {/* Job Information End */}

          {/* Description */}
          <h2 className="mt-[20px] mb-[5px] font-medium">Job Description</h2>
          <div className="bg-black  bg-opacity-20 rounded-md p-4 border-black border-opacity-80 ">
            <p>{jobDetail.description}</p>
          </div>
          {/* Description End */}

          {/* Requirement */}
          <h2 className="mt-[20px] mb-[5px] font-medium">Job Requirements</h2>
          <div className="ml-[10px] mt-[20px] flex gap-4">
            {jobDetail.Skills &&
              jobDetail.Skills.map((skill) => (
                <div
                  key={skill.id}
                  className="min-w-[120px] mb-3 p-3 border-black border-2 rounded-md"
                >
                  <div className="flex flex-col  items-center">
                    <h3 className="text-md font-bold">{skill.name}</h3>
                    <div className="">
                      <p>{skill.level}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {/* Requirement End */}

          {/* About Company */}
          <h2 className="mt-[20px] mb-[5px] font-medium">
            About {jobDetail.CompanyProfile?.name}
          </h2>
          <h3 className="bg-black  bg-opacity-20 rounded-md p-4 border-black border-opacity-80 ">
            {jobDetail.CompanyProfile?.description}
          </h3>
          {/* About Company End */}
        </div>
      </div>
    </div>
  );
}
