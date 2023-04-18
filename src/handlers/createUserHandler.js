const createUserHandler = async (req, res) => {
  const { body } = req;

  const { firstName, lastName, fullName, id, createdAt, email, avatar } = body;

  try {
  } catch (error) {}

  const newUser = await createUser({
    firstName,
    lastName,
    fullName,
    id,
    createdAt,
    email,
    avatar,
  });

  res.status(201).json(newUser);
};

export default createUserHandler;
