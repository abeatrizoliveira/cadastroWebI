const express = require("express");

const {listUsers,createUser, deleteUser} = require("../database/users");

 const router = express.Router();

router.get("/", async function(_req, res){
    const response = await listUsers();
    res.send(response);
});

router.post("/", async function(req, res){
    const {name,email} = req.body;
    const response = await createUser(name,email);
    res.send(response);
});
router.delete("/:id", async function(req, res){
    const id = req.params.id;
    const userRotes = await deleteUser(id);
    if(user.message){
        res.status(404).json(user);
    } else{
        res.status(200).json(user);
    }
});

 module.exports = router;