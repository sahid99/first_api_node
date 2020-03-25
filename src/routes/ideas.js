const { Router } = require("express");

const router = Router();

const ideas = require("../data/ideas_db.json");

router.get("/", (req, res)=>{
    res.json(ideas);
});

router.post("/", (req, res) => {
    // console.log(req.body);
    // res.send("received");
    const {type, content} = req.body;
    if(type && content){
        const id = ideas.length + 1;
        const newIdea = {id, ...req.body};
        ideas.push(newIdea);
        res.json(newIdea);
    }
    else{
        res.status(500).json({"error":"Error!!"});
    }
});

module.exports = router;
