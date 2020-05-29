module.exports = function (app: any, fs: any) {
    app.get("/", function (req: any, res: any) {
        //URL에서 인자값 가져오기
        console.log(req.query.testkey);
        res.end("call get request ");
    });

    app.post("/postReq", function (req: any, res: any) {
        //request body에서 인자값 가져오기
        console.log(req.body.testkey);

        res.end("res");
    });
};
