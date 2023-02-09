module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "Tester1",
          role: "admin",
          email: "admin@admin.com",
          password: "B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu",
          balance: 0,
          hasPremium: true,
        },
        {
          username: "Tester2",
          role: "user",
          email: "user@user.com",
          password: "B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu",
          balance: 0,
          hasPremium: false,
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
