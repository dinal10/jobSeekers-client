import instance from "../lib/axios.jsx";

export async function fetchJobDetail(id) {
  try {
    const response = await instance.get(`/job_listing/${id}`);
    const data = response.data;
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}
