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