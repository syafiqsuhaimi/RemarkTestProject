import axios from "axios";

axios.defaults.baseURL = "http://www.omdbapi.com";

export default {
  getMovies: () =>
    axios.get(`/?s=car&apikey=efe0a015`)
      .then(res => {
        return res.data.Search;
      })
      .catch(err => {
        console.log(err)
        return "error";
      }),
}
