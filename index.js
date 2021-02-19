const express = require("express");
const router = require("./router/router");
const app = express();
const port = process.env.PORT || 2727;

app.use("/", router)
app.use("*", (req, res) => {
    res.json({
        success: false,
        data: "Path not found"
    })
})

app.listen(port, () => console.log(`Listening to port ${port}`))