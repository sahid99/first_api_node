const express = require("express");
const morgan = require("morgan");
const app = express();

//settings
app.set("port", process.env.PORT || 3000)

// middlewares 
app.use(morgan("dev"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// routes
app.use(require("./routes/index"));
app.use("/api/ideas", require("./routes/ideas"));


// Empezando el servidor
app.listen(3000, () => {
    console.log(`Server on port ${app.get("port")}`);
}); 