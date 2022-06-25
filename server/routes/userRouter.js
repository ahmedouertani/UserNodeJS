const router = require("express").Router();
const controller =require("../controller/userController");
const verify=require('../routes/verifyToken');



//Api
//router.post('/add',verify,controller.create);

router.post('/add',controller.create);
router.get('/find',controller.find);

router.put('/update/:id',controller.update);
router.delete('/delete/:id',controller.delete);



module.exports=router;