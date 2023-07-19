import instance from "../lib/axios"

export const findTypes = async () => {
    try {
        
        const response = await instance({
            method: "GET",
            url: `/types`
        })

        return response.data;
    } catch(err) {
        console.log(err)
    }
}