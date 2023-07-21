import instance from "../lib/axios";

const fetchJobApply = async (id, resumeFile) => {
  try {
    const formData = new FormData();
    formData.append("job_listing_id", id);
    formData.append("resume", resumeFile);

    const response = await instance.post("/job_application", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    throw new Error("Error submitting job application: " + error.message);
  }
};

export default fetchJobApply;
