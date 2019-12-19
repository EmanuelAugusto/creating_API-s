let db = require('../models');

module.exports = {
 
        findAll:    async (req, res) => {
            try{
                let users = await db.User.findAll({})
                res.send(users);
                res.status(200);
            }catch{
                res.status(400);
            }
        },
        create:  async (req, res) => {
            try{
                let users = await db.User.create(req.body);
                console.log(req.body);
                res.send(users);
                res.status(200);
            }catch{
                res.status(400);
            }
        },
}

