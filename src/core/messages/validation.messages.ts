export const validationMessages = (key) => ({
    string: `${key} Must be a string!`,
    required: `${key} is required!`,
    min: `${key} must be at least 5 characters long!`,
    urlPattern: `${key} must start with http or https!`,
})