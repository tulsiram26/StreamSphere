import axios from "axios"; 

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Nzc2MDFhZDY0YTcxMmZmNTM1YTJlODE0MjkxNTg1YiIsIm5iZiI6MTczMTgwOTk3Ni4wNTU0NDUyLCJzdWIiOiI2NzBjZjlhYzNiYjQ1NTdjNjY5YzBmNDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.iPXfhe5aosG1I3aA3XU1Dz8AqNNynnZRa4no2rQc3TM'
      }
});

export default instance;