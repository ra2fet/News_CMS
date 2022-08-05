var express = require("express"),
    http = require("http"),
    server = http.createServer(app),
    cors = require("cors");
const port = process.env.PORT || 3000;

const giphyAPI = process.env.GiphyAPI || "BPpnxBN1mAyn1iHKG4OWs93syJmcXZRe";

var app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("Test , I am  Rafat!");
});

app.get("/search", (req, res) => {
    let queryString = req.query.term;
    let offset = req.query.offset;
    let limit = req.query.limit ? req.query.limit : 8;

    console.log(queryString);
    // ENCODE THE QUERY STRING TO REMOVE WHITE SPACES AND RESTRICTED CHARACTERS
    let term = encodeURIComponent(queryString);
    // PUT THE SEARCH TERM INTO THE GIPHY API SEARCH URL
    let url =
        "http://api.giphy.com/v1/gifs/search?q=" +
        term +
        "&api_key=" +
        giphyAPI +
        "&limit=" +
        limit +
        "&offset=" +
        offset +
        "&rating=g";
    http.get(url, (response) => {
        // SET ENCODING OF RESPONSE TO UTF8
        response.setEncoding("utf8");
        let body = "";
        // listens for the event of the data buffer and stream
        response.on("data", (d) => {
            // CONTINUOUSLY UPDATE STREAM WITH DATA FROM GIPHY
            body += d;
        });
        // once it gets data it parses it into json
        response.on("end", () => {
            // WHEN DATA IS FULLY RECEIVED PARSE INTO JSON

            let parsed = JSON.parse(body);
            // RENDER THE HOME TEMPLATE AND PASS THE GIF DATA IN TO THE TEMPLATE
            // return res.json({ gifs: parsed.data });
            return res.json(
                parsed.data.map((e) => ({
                    title: e.title,
                    url: e.embed_url,
                    gif: e.images.original.url,
                }))
            );
        });
    });
});

app.get("/trending", (req, res) => {
    let limit = req.query.limit ? req.query.limit : 8;
    let offset = req.query.offset;

    let url =
        "http://api.giphy.com/v1/gifs/trending" +
        "?api_key=" +
        giphyAPI +
        "&limit=" +
        limit +
        "&offset=" +
        offset +
        "&rating=g";
    http.get(url, (response) => {
        // SET ENCODING OF RESPONSE TO UTF8
        response.setEncoding("utf8");
        let body = "";
        // listens for the event of the data buffer and stream
        response.on("data", (d) => {
            // CONTINUOUSLY UPDATE STREAM WITH DATA FROM GIPHY
            body += d;
        });
        // once it gets data it parses it into json
        response.on("end", () => {
            // WHEN DATA IS FULLY RECEIVED PARSE INTO JSON

            let parsed = JSON.parse(body);
            // RENDER THE HOME TEMPLATE AND PASS THE GIF DATA IN TO THE TEMPLATE
            // return res.json({ gifs: parsed.data });
            return res.json(
                parsed.data.map((e) => ({
                    title: e.title,
                    url: e.embed_url,
                    gif: e.images.original.url,
                }))
            );
        });
    });
});

app.listen(port, () => {
    console.log("Giphy API By Rafat listening on port: ", port);
});
