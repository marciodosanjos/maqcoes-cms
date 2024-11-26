module.exports = {
  "users-permissions": {
    config: {
      jwtSecret: process.env.JWT_SECRET, // Lê a chave do JWT a partir da variável de ambiente
    },
  },
};
