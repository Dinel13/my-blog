const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase == PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "salahuddin",
        mongodb_password: "XqW3wRaJLiJiWDD1",
        mongodb_clustername: "cluster0",
        mongodb_database: "myBlog-dev",
      },
    };
  }
  return {
    env: {
      mongodb_username: "salahuddin",
      mongodb_password: "XqW3wRaJLiJiWDD1",
      mongodb_clustername: "cluster0",
      mongodb_database: "myBlog",
    },
  };
};
