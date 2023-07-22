/* eslint-disable no-unused-vars */
import instance from "../lib/axios.jsx";

export async function postJob(jobListingData) {
  try {
    const response = await instance.post("/job_listing", jobListingData);
    const data = response.data;

    return data;
  } catch (err) {
    console.log(err);
  }
}
