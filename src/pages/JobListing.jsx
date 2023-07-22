import { useState, useEffect } from "react";
import { jobListing } from "../fetching/job_listing";
import { findTypes } from "../fetching/type";
import { findSkills } from "../fetching/skills";
import { getAllCompanyProfile } from "../fetching/companyprofile";
import { useStore } from "../modules/store";
import JobCard from "../components/JobCard";
import { MultiSelect } from "react-multi-select-component"; // multiple select
import Select from "react-select"; // single select

let locations = [];

function JobListing() {
  const setJobList = useStore((state) => state.setJobList);
  const jobList = useStore((state) => state.jobList);
  console.log(jobList);
  const [types, setTypes] = useState([]);
  const [typesOptions, setTypesOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [skills, setSkills] = useState([]);
  const [q, setQ] = useState("");

  const [filterTypes, setFilterTypes] = useState([]);
  const [filterSalary, setFilterSalary] = useState(0);
  const [companies, setCompanies] = useState([]);
  const [companiesOption, setCompaniesOption] = useState([]);
  const [skillOptions, setSkillOptions] = useState([]);
  const [filterSkill, setFilterSkill] = useState([]);
  const [filterLocations, setFilterLocations] = useState([]);
  const [filterCompany, setFilterCompany] = useState("");
  const [page, setPage] = useState(jobList.currentPage || 1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await jobListing();
        const dataTypes = await findTypes();
        const dataSkills = await findSkills();
        const dataCompany = await getAllCompanyProfile();
        setJobList(data);
        setTypes(dataTypes);
        setSkills(dataSkills);
        setCompanies(dataCompany);
        setSkillOptions(
          dataSkills.map((s) => ({
            value: s.id,
            label: `${s.name} ${s.level}`,
          }))
        );
        setTypesOptions(
          dataTypes.map((t) => ({ value: t.id, label: t.title }))
        );
        setCompaniesOption(
          dataCompany.map((company) => ({
            value: company.id,
            label: company.name,
          }))
        );
        locations = data.map((el) => el.location);
        locations = [...new Set(locations)];
        locations = locations.map((el) => {
          return {
            value: el,
            label: el,
          };
        });
        setFilterCompany(""); // Reset filterCompany state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobList:", error);
        setLoading(false);
      }
    };
    setLoading(true);
    fetchData();
  }, []);

  const refetchData = async (params) => {
    try {
      const data = await jobListing(params);
      setJobList(data);
    } catch (err) {
      console.error("Error fetching jobList:", err);
    }
  };

  const handleSearch = async () => {
    let params = {};

    if (q) params.q = q;
    refetchData(params);
  };

  if (loading) {
    return <>Loading....</>;
  }

  const handleSearchFilter = async () => {
    let params = {};
    if (filterTypes.length !== 0) {
      params.type_ids = filterTypes.map((el) => el.value);
    }

    if (filterSalary !== 0) {
      params.salary_start = filterSalary * 1000000;
    }

    if (filterSkill.length !== 0) {
      params.skill_ids = filterSkill.map((el) => el.value);
    }

    if (filterLocations.length !== 0) {
      params.locations = filterLocations.map((el) => el.value);
    }

    if (filterCompany || filterCompany.length !== 0) {
      params.company_id = filterCompany.value;
    }

    setQ("");
    refetchData(params);
  };

  const resetFilter = async () => {
    setFilterTypes([]);
    setFilterSalary(0);
    setFilterSkill([]);
    setFilterLocations([]);
    setFilterCompany("");
    setQ("");
    refetchData({});
  };

  const handleChangePage = async (el) => {
    let params = {
      page: +el,
    };
    setPage(+el);
    refetchData(params);
  };

  const InitPagination = () => {
    const pageNumbers = [];

    for (let i = 0; i < jobList.totalPages; i++) {
      pageNumbers.push(i + 1);
    }

    return (
      <div className="container flex justify-center mx-auto">
        <ul className="flex">
          {pageNumbers.map((el, idx) => {
            return (
              <li key={idx}>
                {page === +el ? (
                  <button
                    onClick={(e) => handleChangePage(el)}
                    className="h-10 px-5 text-white bg-black border border-r-0 border-gray-600 "
                  >
                    {el}
                  </button>
                ) : (
                  <button
                    onClick={(e) => handleChangePage(el)}
                    className="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 "
                  >
                    {el}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <>
      {/* Header */}
      <h1 className="text-5xl text-center font-semibold text-blueGray-700">
        Jobs
      </h1>

      <div className="mt-[20px] flex justify-center">
        {/* Search */}

        <input
          className="w-7/12 rounded-full border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          type="text"
          name="q"
          placeholder="Cari..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />

        <button
          onClick={handleSearch}
          type="button"
          className="btn bg-black text-white btn rounded-full px-4 py-2 mx-2"
        >
          SEARCH
        </button>
      </div>
      {/* Header End */}

      {/* Filterisation */}

      <div className="flex px-10 py-10 gap-x-2 justify-center">
        <div className="flex flex-col space-y-2 w-80">
          <h2 className="text-center">Companies</h2>
          <Select
            options={companiesOption}
            value={filterCompany}
            onChange={setFilterCompany}
          />
        </div>

        <div className="flex flex-col space-y-2 w-80">
          <h2 className="text-center">Types</h2>
          <MultiSelect
            className="w-full"
            options={typesOptions}
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

        <div className="flex flex-col space-y-2 w-80">
          <h2 className="text-center">Locations</h2>
          <MultiSelect
            className="w-full"
            options={locations}
            value={filterLocations}
            onChange={setFilterLocations}
            labelledBy="Select..."
          />
        </div>
      </div>

      <div className="flex justify-center py-10">
        <div className="flex flex-col space-y-2 w-80">
          <h2 className="text-center">Salary (In Million Rp)</h2>
          <input
            value={filterSalary}
            onChange={(e) => setFilterSalary(+e.target.value)}
            type="range"
            className="w-full"
            min="2"
            max="12"
            step="2"
          />
          <ul className="flex justify-between w-full px-[10px]">
            <li className="flex justify-center relative">
              <span className="absolute">2</span>
            </li>
            <li className="flex justify-center relative">
              <span className="absolute">4</span>
            </li>
            <li className="flex justify-center relative">
              <span className="absolute">6</span>
            </li>
            <li className="flex justify-center relative">
              <span className="absolute">8</span>
            </li>
            <li className="flex justify-center relative">
              <span className="absolute">10</span>
            </li>
            <li className="flex justify-center relative">
              <span className="absolute">12</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleSearchFilter}
          className="bg-black text-white btn rounded-full px-4 py-2 mx-2 btn"
          type="button"
        >
          Apply Filter
        </button>

        <button
          onClick={resetFilter}
          className="bg-black text-white btn rounded-full px-4 py-2 mx-2 btn"
          type="button"
        >
          Reset Filter
        </button>
      </div>

      <div className="mx-auto grid grid-cols-3 gap-5 py-20 container place-items-end px-20">
        {jobList.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      <InitPagination />
    </>
  );
}

export default JobListing;
