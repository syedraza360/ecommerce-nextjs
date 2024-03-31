export const errorHandler = (error) => {
  if (error.response) {
    return error.response.data.error;
  } else if (error.message) {
    return `${error.message}`;
  } else {
    return "Something went wrong";
  }
};
