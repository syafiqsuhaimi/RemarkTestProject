import axios from "axios";

axios.defaults.baseURL = "url to authentication service";

export default {
  login: async (username, password) => {
    return await new Promise((resolve, reject) => {
      if (username === "remark" && password === "testtest")
        resolve("135412392su3682")
      else
        reject("unauthorized")
    })
  }
}