const NODE_ENV = "development";

module.exports = {
  frontend_url:
    NODE_ENV === "production"
      ? "https://counsellor.sortmycollege.com"
      : "http://localhost:3000",
  backend_url:
    NODE_ENV === "production"
      ? "https://server.sortmycollege.com"
      : "http://localhost:8010",
};
