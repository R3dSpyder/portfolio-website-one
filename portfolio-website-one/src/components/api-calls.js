//need to structure errors in the API and return custom error.
const axios = require("axios");

export const getRequest = async (url, command, params) => {
  try {
    switch (command) {
      case "all":
        return axios.get(url).then((reply) => {
          return reply.data.response;
        });
      case "user":
        return axios.get(url).then((reply) => {
          return reply.data.user[0];
        });
    }
  } catch (error) {
    return error;
  }
};

export const deleteRequest = async (url, review_id) => {};

export const sortRequest = async (url, id, params) => {};
