export const validateUser = (user = {}) => {
  const { firstName, lastName, fullName, id, createdAt, email, avatar } = user;
  if (!firstName || firstName.trim() === "") {
    return {
      isValid: false,
      error: "Invalid first name",
    };
  }

  if (!lastName || lastName.trim() === "") {
    return {
      isValid: false,
      error: "Invalid last name",
    };
  }

  if (!email || email.trim() === "") {
    return {
      isValid: false,
      error: "Invalid email address",
    };
  }

  return {
    isValid: true,
    error: null,
  };
};
