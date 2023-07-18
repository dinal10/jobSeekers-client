import { Component } from "react";
import { jobListing } from "../fetching/job_listing";

class JobListing extends Component {
  state = {
    jobListings: [],
  };

  async componentDidMount() {
    try {
      const data = await jobListing();
      this.setState({ jobListings: data.slice(0, 6) });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { jobListings } = this.state;
    return (
      <>
        <h4 className="text-3xl text-center fonat-semibold text-blueGray-700">
          Job Listing
        </h4>

        <div className="mx-auto grid grid-cols-3 gap-5 py-20 container place-items-end px-20">
          {jobListings.map((jobListing) => (
            <div
              className="w-full h-full max-w-xs shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
              key={jobListing.id}
            >
              <div className="">
                <div className="group bg-gray-900 p-4">
                  <div className=""></div>
                  <div className="flex items-center gap-x-2">
                    <img
                      className="aspect-[2/2] w-16"
                      src="https://idn-static-assets.s3-ap-southeast-1.amazonaws.com/school/10284.png"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-50">
                        {jobListing.CompanyProfile.name}
                      </h3>
                      <span className="text-xs text-gray-300">
                        {jobListing.location}
                      </span>
                    </div>
                  </div>
                  <div className="my-4">
                    <h3 className="text-2xl font-medium text-gray-200">
                      {jobListing.title}
                    </h3>

                    <div className="mt-2 text-sm text-gray-400">
                      {jobListing.salary_start} - {jobListing.salary_end}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      type="submit"
                      className="font-medium text-blue-500 transition-all duration-300 group-hover:text-blue-500/80"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default JobListing;
