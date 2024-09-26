var express = require("express")
require("./connecting")
var empModel= require("./model/employee")

var app = express()
app.use(express.json())
app.get('/trial',(req, res) => {
    res.send("trial message")
})
app.get('/emp',(req, res) => {
    res.send("its an employee app")
})
app.listen(3044, () => {
    console.log("port is running")
})
app.post("/add", async (req, res) => {
    try {
        await empModel(req.body).save()
        res.send({ message: "success" })
    }
    catch { error } {
        console.log("error")
    }
    })
app.get("/view", async (req, res) => {
    try {
        var data = await empModel.find();
        res.send(data);
    }
    catch (error) {
        console.log("error");
    }
})
app.delete("/delete", async (req, res) => {
    try {
        await empModel.findByIdAndDelete(req.params.id)
        res.send({ message: "deleted successfully" });
    }
    catch (error) {
        console.log(error);
    }
})
     app.put("/edit/:id/:body", async (req, res) => {
    try {
        var data=await empModel.findByIdAndUpdate(req.params.id, req.body)
        res.send({ message: "Updated successfully",data});
    }
    catch (error) {
        console.log(error);
    }
     })

