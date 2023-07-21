import instance from "../lib/axios.jsx"

export const getUserSkills = async () => {
    try {
        const response = await instance({
            method: "GET",
            url: "/skills/me"
        })

        const data = response.data;

        return data;
    } catch(err) {
        console.log(err);
    }
}

export const findSkills = async () => {
    try {
        const response = await instance({
            method: "GET",
            url: "/skills"
        })

        return response.data;
    } catch(err) {
        console.log(err)
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
    try{
      const {id} = param
      const response = await instance({
        method: "DELETE",
        url: `/skills/delete`,
        data: {
          id
        }
      })
  
    } catch(err) {
      console.log(err)
    }
  
  }
  
  export async function addUserSkill(params) {
    try {
      const { name, level } = params
      const response = await instance({
        method: "POST",
        url: `/skills/new`,
        data: {
          name,
          level
        }
      })
    } catch (err) {
      console.log (err)
    }
  }