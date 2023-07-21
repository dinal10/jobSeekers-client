import instance from "../lib/axios";

const uploadResume = async (id, resumeFile) => {
  try {
    const formData = new FormData();
    formData.append("resume", resumeFile);

    const response = await instance.put(`/user-profiles/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      // Respon dari server dengan status kesalahan (HTTP 4xx atau 5xx)
      throw new Error(
        `Error updating user profile: ${error.response.status} ${error.response.statusText}`
      );
    } else if (error.request) {
      // Tidak menerima respon dari server
      throw new Error("No response received from the server.");
    } else {
      // Kesalahan lainnya
      throw new Error("An error occurred while updating user profile.");
    }
  }
};

export default uploadResume;
