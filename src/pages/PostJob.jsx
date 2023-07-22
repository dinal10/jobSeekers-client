import { useEffect, useState } from "react";
import { postJob } from "../fetching/postJob";
import { findTypes } from "../fetching/type";
import { findSkills } from "../fetching/skills";
import { MultiSelect } from "react-multi-select-component";

let typeOptions = [];
let skillOptions = [];

export default function PostJob() {
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

  console.log(title);
  console.log(description);
  console.log(location);
  console.log(salaryStart);
  console.log(salaryEnd);
  console.log(limitDate);
  //   console.log(skillAttributes);
  console.log(filterSkill);
  //   console.log(typeAttributes);
  console.log(filterTypes);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataTypes = await findTypes();
        const dataSkills = await findSkills();
        setTypeAttributes(dataTypes);
        setSkillAttributes(dataSkills);
        typeOptions.push(
          ...dataTypes.map((t) => ({ value: t.id, label: t.title }))
        );
        skillOptions.push(
          ...dataSkills.map((s) => ({
            value: s.id,
            label: `${s.name} ${s.level}`,
          }))
        );
      } catch (error) {
        console.error("Error fetching jobList:", error);
      }
    };
    fetchData();
  }, []);

  //   const handleSkillChange = (event, index) => {
  //     const newSkillAttributes = [...skillAttributes];
  //     newSkillAttributes[index] = { id: event.target.value };
  //     setSkillAttributes(newSkillAttributes);
  //   };

  //   const handleTypeChange = (event, index) => {
  //     const newTypeAttributes = [...typeAttributes];
  //     newTypeAttributes[index] = { id: event.target.value };
  //     setTypeAttributes(newTypeAttributes);
  //   };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await postJob({
        title,
        description,
        location,
        salary_start: salaryStart,
        salary_end: salaryEnd,
        limit_date: limitDate,
        skill_attributes: skillAttributes,
        type_attributes: typeAttributes,
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
    } catch (error) {
      console.error("Error creating job listing:", error);
    }
  };

  return (
    <div>
      <h1>Create Job Listing</h1>
      <form onSubmit={handleSubmit}>
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
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-description"
        >
          Location:
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-description"
        >
          Salary Start:
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            type="number"
            value={salaryStart}
            onChange={(e) => setSalaryStart(e.target.value)}
          />
        </label>
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-description"
        >
          Salary End:
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            type="number"
            value={salaryEnd}
            onChange={(e) => setSalaryEnd(e.target.value)}
          />
        </label>
        <label>
          Limit Date:
          <input
            type="date"
            value={limitDate}
            onChange={(e) => setLimitDate(e.target.value)}
          />
        </label>

        <div className="flex flex-col space-y-2 w-80">
          <h2 className="text-center">Types</h2>
          <MultiSelect
            className="w-full"
            options={typeOptions}
            value={filterTypes}
            onChange={setFilterTypes}
            labelledBy="Select..."
          />
        </div>

        <div className="flex flex-col space-y-2 w-80">
          <h2 className="text-center">Skills</h2>
          <MultiSelect
            className="w-full"
            options={skillOptions}
            value={filterSkill}
            onChange={setFilterSkill}
            labelledBy="Select..."
          />
        </div>

        <button type="submit">Create Job Listing</button>
      </form>
    </div>
  );
}
