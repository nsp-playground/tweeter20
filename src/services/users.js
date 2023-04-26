import Airtable from "airtable";

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID);

export const createUser = (user = {}) => {
  const { firstName, lastName, fullName, id, createdAt, email, avatar } = user;
  return new Promise((resolve, reject) => {
    base("Users").create(
      [
        {
          fields: {
            firstName,
            lastName,
            fullName,
            avatar,
            createdAt,
            email,
            id,
          },
        },
      ],
      function (err, records) {
        if (err) {
          reject(err);
        } else if (!records || records.length === 0) {
          reject(
            new Error(
              "Unable to retrieve record id from DB after creating a new user"
            )
          );
        } else {
          resolve();
        }
      }
    );
  });
};

export const getUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    if (!email || !email.length || !email.trim() === "") {
      reject(
        new Error("Provide a valid email address to retrieve user from DB")
      );
    }

    const filterByFormula = `({Email} = "${email}")`;
    base("Users")
      .select({ filterByFormula })
      .firstPage((err, records) => {
        if (err) {
          reject(err);
        } else if (records.length === 0) {
          resolve(null);
        } else {
          resolve(records[0]);
        }
      });
  });
};
