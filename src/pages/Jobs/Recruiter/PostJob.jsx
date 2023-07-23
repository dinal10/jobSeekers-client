import { useEffect, useState } from "react";
import { postJob } from "../../../fetching/postJob";
import { findTypes } from "../../../fetching/type";
import { findSkills } from "../../../fetching/skills";
import { MultiSelect } from "react-multi-select-component";
import Swal from "sweetalert2";
import Loading from "../../../components/Loading";

let typeOptions = [];
let skillOptions = [];

export default function PostJob() {
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [salaryStart, setSalaryStart] = useState("");
  const [salaryEnd, setSalaryEnd] = useState("");
  const [limitDate, setLimitDate] = useState("");
  const [skillAttributes, setSkillAttributes] = useState([]);
  const [filterSkill, setFilterSkill] = useState([]);
  const [typeAttributes, setTypeAttributes] = useState([]);
  const [filterTypes, setFilterTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataTypes = await findTypes();
        const dataSkills = await findSkills();
        setTypeAttributes(dataTypes);
        setSkillAttributes(dataSkills);
        typeOptions = dataTypes.map((t) => ({ value: t.id, label: t.title }));
        skillOptions = dataSkills.map((s) => ({
          value: s.id,
          label: `${s.name} ${s.level}`,
        }));

        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobList:", error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const skill_attributes = filterSkill.map((skill) => {
        return {
          id: skill.value,
        };
      });
      const type_attributes = filterTypes.map((type) => {
        return {
          id: type.value,
        };
      });
      const response = await postJob({
        title,
        description,
        location,
        salary_start: salaryStart,
        salary_end: salaryEnd,
        limit_date: limitDate,
        skill_attributes,
        type_attributes,
      });
      console.log(response.data);

      console.log("Job listing created:", response.data);
      // Clear form fields after successful submission
      setTitle("");
      setDescription("");
      setLocation("");
      setSalaryStart("");
      setSalaryEnd("");
      setLimitDate("");
      setSkillAttributes([]);
      setTypeAttributes([]);
      Swal.fire({
        icon: "success",
        title: "Job Created",
        timer: 3000,
        timerProgressBar: false,
        onClose: () => {
          setSuccess(false);
        },
      });
    } catch (error) {
      setError(error.message);
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Submission failed!",
        text: error.message,
      });
      console.error("Error creating job listing:", error);
    }
  };

  return (

    <div className="flex justify-center bg-mint">
      <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-full max-w-lg">
        <h1 className="text-3xl font-bold my-8 text-center">Create New Job</h1>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-title"
              >
                Title
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Job Title"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-description"
              >
                Description
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="grid-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Job Description"
              />
            </div>
          </div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Location:
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white mt-2"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Salary Start:
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white mt-2"
              type="number"
              value={salaryStart}
              onChange={(e) => setSalaryStart(e.target.value)}
            />
          </label>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Salary End:
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white mt-2"
              type="number"
              value={salaryEnd}
              onChange={(e) => setSalaryEnd(e.target.value)}
            />
          </label>
          <label className="mt-4">
            Limit Date:
            <input
              type="date"
              value={limitDate}
              onChange={(e) => setLimitDate(e.target.value)}
              className="ml-4 mt-4"
            />
          </label>

          <div className="flex flex-col space-y-2 mt-4 w-full">
            <h2 className="text-left">Types</h2>
            <MultiSelect
              className="w-full"
              options={typeOptions}
              value={filterTypes}
              onChange={setFilterTypes}
              labelledBy="Select..."
            />
          </div>

          <div className="flex flex-col space-y-2 mt-4 w-full">
            <h2 className="text-left">Skills</h2>
            <MultiSelect
              className="w-full"
              options={skillOptions}
              value={filterSkill}
              onChange={setFilterSkill}
              labelledBy="Select..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md mt-8 hover:bg-gray-800 transition duration-300"
          >
            Create New Job
          </button>
        </form>
      </div>
    </div>
  );
}