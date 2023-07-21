import instance from "../lib/axios.jsx";

export async function fetchAllJob() {
  try {
    const response = await instance.get("/job_application");
    const data = response.data;

    return data;
  } catch (err) {
    console.log(err);
  }
}
