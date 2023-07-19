import instance from "../lib/axios.jsx";

async function getAllCompanyProfile() {
  try {
    const response = await instance({
      url: `/companyProfile`,
      method: 'GET'
    })
    const data = response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
}

async function getCompanyProfileById (id) {
  try {
    
    const response = await instance({
      url: `/companyProfile/${id}`,
      method: 'GET',
    });
    const data = response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
}

async function createCompanyProfile(params) {
  try {
    const { name, field, description, location, total_employee } = params;
    const response = await instance ({
      url: `/companyProfile/`,
      method: 'POST',
      data: {
        name,
        field,
        description,
        location,
        total_employee
      }

    })
    const data = response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
}

async function updateCompanyProfile(id, params) {
  try {
    const { name, field, description, location, total_employee } = params;
    const response = await instance({
      url: `/companyProfile/${id}`,
      method: 'PUT',
      data: {
        id,
        name,
        field,
        description,
        location,
        total_employee
      }
    })
    const data = response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
}

async function deleteCompanyProfile(id) {
  try {
    const response = await instance({
      url: `/companyProfile/${id}`,
      method: 'DELETE'
    })
    const data = response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
}

export {
  getAllCompanyProfile,
  getCompanyProfileById,
  createCompanyProfile,
  updateCompanyProfile,
  deleteCompanyProfile,
};