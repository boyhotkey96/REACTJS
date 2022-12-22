import axios from "axios";
import firebase from "firebase/compat/app";

const getFirebaseToken = () => {
  const currentUser = firebase.auth().currentUser;

  if (currentUser) {
    return currentUser.getIdToken();
  } else {
    const getStorage =
      localStorage.getItem(
        "firebase:persistence:AIzaSyCoVibwP8RPtH_Ngn5EYhZH5RsnkGzablo:[DEFAULT]-firebaseui-temp"
      ) ||
      sessionStorage.getItem(
        "firebase:persistence:AIzaSyCoVibwP8RPtH_Ngn5EYhZH5RsnkGzablo:[DEFAULT]-firebaseui-temp"
      );

    if (!getStorage) return null;

    return new Promise((resolve, reject) => {
      const timerId = setTimeout(() => {
        reject(null);
        console.log(">>> Reject timeout 10s");
      }, 10000);

      const unregisterAuthObserver = firebase
        .auth()
        .onAuthStateChanged(async (user) => {
          if (!user) {
            console.log("Chua login");
            reject(null);
          } else {
            const token = await user.getIdToken();
            console.log(token);
            resolve(token);

            unregisterAuthObserver();
            clearTimeout(timerId);
          }
        });
    });
  }
};

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
  },
  // paramsSerializer: (params) => {
  //   return Qs.stringify(params, { arrayFormat: 'brackets' })
  // },
});

axiosClient.interceptors.request.use(async (config) => {
  /* const currentUser = firebase.auth().currentUser
  if (currentUser) {
    const token = await currentUser.getIdToken()
    config.headers.Authorization = `Bearer ${token}`
  } */

  const token = await getFirebaseToken();
  config.headers.Authorization = `Bearer ${token}`;

  // Test: getInfo user login
  const currentUser = firebase.auth().currentUser;
  console.log(currentUser.providerData);
  localStorage.setItem(
    "firebaseui::rememberedAccounts",
    JSON.stringify(currentUser.providerData)
  );

  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
