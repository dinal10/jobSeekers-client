import instance from "../lib/axios.jsx";

export async function updateStatus(id, status) {
  try {
    const response = await instance.put(
      `/job_application/${id}?status=${status}`
    );
    const data = response.data;

    return data;
  } catch (err) {
    console.log(err);
  }
}
