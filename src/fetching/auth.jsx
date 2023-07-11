import instance from "../lib/axios.jsx";

export async function login(params) {
  try {
    const { email, password } = params;
    const response = await instance({
      url: "/auth/login",
      method: "POST",
      data: { email, password },
    });
    const data = response.data;
    localStorage.setItem("token", data.access_token);
    return data;
  } catch (err) {
    console.log(err);
  }
}
export function logout() {
  localStorage.removeItem("token");
}

export async function register(params) {
  try {
    const {
      email,
      password,
      first_name,
      last_name,
      phone_number,
      birth_date,
      gender,
      role,
    } = params;
    const response = await instance({
      url: "/auth/register",
      method: "POST",
      data: {
        email,
        password,
        first_name,
        last_name,
        phone_number,
        birth_date,
        gender,
        role,
      },
    });
    const data = response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
}
