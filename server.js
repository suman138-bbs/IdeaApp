const express = require('express');
const app = express();

app.use(express.json())
app.use(myMiddleWare)
function myMiddleWare(req,res,next) {
    console.log("insideMiddle Ware")
    next();
}

app.listen(8080, () => {
    console.log("Server started");
})

require("./routes/idea.routes")(app);