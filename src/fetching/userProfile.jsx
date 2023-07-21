import instance from "../lib/axios";

export async function getUserProfileById(id) {
  try {
    const response = await instance({
      method: "GET",
      url: `/user-profiles/${id}`,
    });
    const data = response.data;

    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getUser(id) {
  try {
    const response = await instance({
      method: "GET",
      url: `/users/${id}`,
    });

    const data = response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getExperience() {
  try {
    const response = await instance({
      method: "GET",
      url: `/experiences/me`,
    });

    const data = response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
}

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

export async function getSkills() {
  try {
    const response = await instance({
      method: "GET",
      url: `/skills/me`,
    });

    const data = response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function deleteSkill(param) {
  try {
    const { id } = param;
    const response = await instance({
      method: "DELETE",
      url: `/skills/delete`,
      data: {
        id,
      },
    });
  } catch (err) {
    console.log(err);
  }
}

export async function editUser(params) {
  try {
    const {
      first_name,
      last_name,
      email,
      phone_number,
      birth_date,
      gender,
      address,
    } = params;
    const response = await instance({
      method: "PUT",
      url: `/users/update/me`,
      data: {
        first_name,
        last_name,
        email,
        phone_number,
        birth_date,
        gender,
        address,
      },
    });
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

export async function editExperience(params) {
  try {
    const {
      id,
      company,
      department,
      position,
      industry,
      salary,
      start_date,
      end_date,
      description,
      country,
      state,
      city,
    } = params;
    const response = await instance({
      method: "PUT",
      url: `/experiences/update`,
      data: {
        id,
        company,
        department,
        position,
        industry,
        salary,
        start_date,
        end_date,
        description,
        country,
        state,
        city,
      },
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

export async function deleteExperience(param) {
  try {
    const { id } = param;
    const response = await instance({
      method: "DELETE",
      url: `/experiences/delete`,
      data: {
        id,
      },
    });
  } catch (err) {
    console.log(err);
  }
}
