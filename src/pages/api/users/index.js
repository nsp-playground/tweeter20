import createUserHandler from "@/handlers/createUserHandler";

export default async function usersHandler(req, res) {
  const { method, body } = req;

  console.log(">>>", JSON.stringify({ method, body }, null, 2));

  switch (method) {
    case "POST": {
      // handle GET requests to /api/users
      createUserHandler(req, res);
      break;
    }
    default:
      res.status(405).end(); // Method Not Allowed
      break;
  }
}
