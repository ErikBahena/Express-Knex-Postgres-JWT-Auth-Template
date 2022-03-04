const server = require("./api/server");

const { PORT } = require("./config");

server.listen(PORT, () => {
  console.log(`server listening on PORT ${PORT}`);
});
