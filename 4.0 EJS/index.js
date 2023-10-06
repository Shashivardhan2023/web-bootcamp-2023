import express from "express";

var app = express();

app.listen(3000,() => {});

function getMessage(req, res, next) {
    const todayType = (new Date()).getDay();
    res.locals = ((todayType === 0 || todayType === 6) ? {dayType: "the weekend", advice: "have good fun!"} : {dayType: "a weekday", advice: "do some hard work!"});
    next();
}

app.use(getMessage);

app.get("/", (req, res) => {
    res.render("index.ejs");
});