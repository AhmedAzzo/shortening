export const validationMessages = (key) => ({
  string: `${key} Must be a string!`,
  required: `${key} is required!`,
  min: `${key} must be at least 18 characters long!`,
  urlPattern: `${key} pattern is invalid!`,
  max: `${key} must be less than 2048 characters long!`,
});
