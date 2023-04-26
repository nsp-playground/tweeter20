import { createUser } from "@/services/users";
import { formatFirstOrLastName } from "@/utils/formatFirstOrLastName";
import { formatFullName } from "@/utils/formatFullName";
import { validateUser } from "@/utils/validateUser";

export const createUserHandler = async (req, res) => {
  const { body } = req;
  const { firstName, lastName, fullName, id, createdAt, email, avatar } = body;

  const { isValid, error: validateUserError } = validateUser({
    firstName,
    lastName,
    fullName,
    id,
    createdAt,
    email,
    avatar,
  });

  if (!isValid) {
    return res.status(400).json({
      error: validateUserError,
    });
  }

  try {
    const newUser = {
      firstName: formatFirstOrLastName(firstName),
      lastName: formatFirstOrLastName(lastName),
      fullName: formatFullName(fullName),
      id,
      createdAt,
      email,
      avatar,
    };
    await createUser(newUser);
    return res.status(201).json({ data: newUser });
  } catch (error) {
    return res.status(500).json({
      error: "Unable to create a new user account at the moment",
      stack: error?.message || "",
    });
  }
};
