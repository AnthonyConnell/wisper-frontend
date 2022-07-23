module.exports = function(app) {
    app.use(
      createProxyMiddleware(["/api", , "/otherApi"], { target: "http://localhost:3000" })
    );
  };