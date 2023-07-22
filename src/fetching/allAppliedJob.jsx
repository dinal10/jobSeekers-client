/* eslint-disable no-unused-vars */
import instance from "../lib/axios.jsx";

export async function fetchAllApplied() {
  try {
    const response = await instance.get("/job_application/allapply");
    const data = response.data;

    return data;
  } catch (err) {
    console.log(err);
  }
}
