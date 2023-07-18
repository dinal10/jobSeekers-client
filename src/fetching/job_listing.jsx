import instance from "../lib/axios.jsx";

export async function jobListing() {
  try {
    const response = await instance.get("/job_listing");
    const data = response.data.job_listing;

    return data;
  } catch (err) {
    console.log(err);
  }
}
