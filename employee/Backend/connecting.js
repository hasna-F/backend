var mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Hasna:dbhasna@cluster0.7ggaj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
    console.log("db connected")
})
        .catch((err) => {
            console.log("error connecting")
        })
