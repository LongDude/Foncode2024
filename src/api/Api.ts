import axios from 'axios';

axios.defaults.baseURL = 'http://172.20.2.13:8000/api';

const config = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 30000,
};

export class Api {
  static get(url: string, params?: any) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, { ...config, params })
        .then(
          (response) => resolve(response.data),
          (err) => reject(err),
        )
        .catch((error) => reject(error));
    });
  }

  static post(url: string, data: any) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, data, config)
        .then(
          (response) => resolve(response.data),
          (err) => reject(err),
        )
        .catch((error) => reject(error));
    });
  }

  static put(url: string, data: any) {
    return new Promise((resolve, reject) => {
      axios
        .put(url, data, config)
        .then(
          (response) => resolve(response.data),
          (err) => reject(err),
        )
        .catch((error) => reject(error));
    });
  }

  static delete(url: string) {
    return new Promise((resolve, reject) => {
      axios
        .delete(url, config)
        .then(
          (response) => resolve(response.data),
          (err) => reject(err),
        )
        .catch((error) => reject(error));
    });
  }

  static patch(url: string, data: any) {
    return new Promise((resolve, reject) => {
      axios
        .patch(url, data, config)
        .then(
          (response) => resolve(response.data),
          (err) => reject(err),
        )
        .catch((error) => reject(error));
    });
  }
}
