"use strict";
module.exports = function (app, fs) {
    app.get("/", function (req, res) {
        //URL에서 인자값 가져오기
        console.log(req.query.testkey);
        res.end("call get request ");
    });
    app.post("/postReq", function (req, res) {
        //request body에서 인자값 가져오기
        console.log(req.body.testkey);
        res.end("res");
    });
};
