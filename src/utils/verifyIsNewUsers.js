import isWithin10Seconds from "./isWithin10Seconds";

function verifyIsNewUser(user = {}) {
  return (
    user &&
    user?.createdAt &&
    isWithin10Seconds(new Date(), new Date(user.createdAt))
  );
}

export default verifyIsNewUser;
