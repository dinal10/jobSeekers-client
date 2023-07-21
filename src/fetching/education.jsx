import instance from "../lib/axios";

export async function getEducation() {
  try {
    const response = await instance({
      method: "GET",
      url: `/educations/me`,
    });

    const data = response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function editEducation(params) {
  try {
    const { school_name, degree, major, graduation_date, start_date } = params;
    const response = await instance({
      method: "PUT",
      url: `/educations/update`,
      data: {
        school_name,
        major,
        degree,
        graduation_date,
        start_date,
      },
    });
  } catch (err) {
    console.log(err);
  }
}

export async function deleteEducation(params) {
  try {
    const { id } = params;
    const response = await instance({
      method: "DELETE",
      url: `/educations/it`,
      data: {
        id,
      },
    });
  } catch (err) {
    console.log(err);
  }
}

export async function addEducationUser(params) {
  try {
    const { school_name, major, degree, start_date, graduation_date } = params;
    const response = await instance({
      method: "POST",
      url: `/educations/new`,
      data: {
        school_name,
        major,
        degree,
        start_date,
        graduation_date,
      },
    });
  } catch (err) {
    console.log(err);
  }
}
