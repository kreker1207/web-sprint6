const normal = require('./normal-router');
const quantum = require('./quantum-router');
const time = normal.calculateTime();
const quantumTime = quantum.calculateTime();
const express = require("express");
 
const app = express();
app.set("view engine", "ejs");

app.use("/quantum", function(req, res){
    res.render('quantum', {
        normalyear: time.years(),
        normalmonth: time.months(),
        normalday: time.days(),
        quantymyear: quantumTime[0],
        quantymmonth: quantumTime[1],
        quantymday: quantumTime[2],
    });
});
app.use("/normal", function(request, response){
    response.render('normal', {
        normalyear: time.years(),
        normalmonth: time.months(),
        normalday: time.days(),
        quantymyear: quantumTime[0],
        quantymmonth: quantumTime[1],
        quantymday: quantumTime[2],
    });
});
app.use("/", function(req, res){
    res.render('index', {
        normalyear: time.years(),
        normalmonth: time.months(),
        normalday: time.days(),
        quantymyear: quantumTime[0],
        quantymmonth: quantumTime[1],
        quantymday: quantumTime[2],
    });
});
app.listen(3000);