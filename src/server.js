const app = require("./app");

app.listen(app.get("port"), () => {
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
});

process.on("unhandledRejection", e => {
  console.log(e.message);
  process.exit(1);
});
