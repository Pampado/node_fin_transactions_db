"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
app_1.httpServer.listen(3334);
app_1.httpsServer.listen(process.env.PORT, function () {
    console.log("Server running on PORT " + process.env.PORT);
});
