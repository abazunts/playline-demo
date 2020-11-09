// import * as axios from "axios";

// const playlineInstance = axios.create({
//   baseURL:
//     process.env.REACT_APP_PLAYLINE_BASE_URL ||
//     "api/",
// });

// export const playlineAPI = {
//   getPlayers() {
//     try {
//       return axios.get(`/api/playline-test.json`).then((r) => r.data);
//     } catch (err) {
//       throw new Error(err);
//     }
//   },
// };

// This is previous variiant emulating fetching data from API. But, I had problems with CORS after all, even installing proxy-server didn't helped me, so I didn't wasted time anymore and used local json file use

import playLineTest from "./playline-test.json";

export const playlineAPI = {
  getPlayers() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(playLineTest);
      }, 2000);
    });
  },
};
