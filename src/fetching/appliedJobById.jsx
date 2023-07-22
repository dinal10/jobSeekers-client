/* eslint-disable no-unused-vars */
import instance from "../lib/axios.jsx";

export async function fetchAppliedById(id) {
  try {
    const response = await instance.get(`/job_application/allapply/${id}`);
    const data = response.data;

    return data;
  } catch (err) {
    console.log(err);
  }
}
