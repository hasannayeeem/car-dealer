const express = require('express');
// verify jwt middleware
// const checkLogin = require('../middlewares/checkLogin.js');


// user controllers
const {
	createUser,
	getAllUser,
	singleUser,
	updateUser,
	deleteUser,
	vipFinder,
	getAuthEngineer,
	singleUserByEmail,
} = require('../controllers/userController');

// inventoryController 
const {
	createInventories,
    getAllInventories,
    getInventoriesType,
    getSingleInventories,
    deleteInventories,
	updateInventory,
  } = require("../controllers/inventoryController");

//   serviceController
const {
	createService,
    getAllServices,
    getSingleService,
    deleteService,
  } = require("../controllers/serviceController");


const router = express.Router()

// user routes here
router.post('/user', createUser)
router.get('/users', getAllUser)
router.get('/user/:id', singleUser)
// in this put method need to query param as email
router.put('/user', updateUser)
router.delete('/user/:id', deleteUser)
router.get('/vipUser', vipFinder)
router.get('/authEngineer/:email', getAuthEngineer)
router.get('/singleUserByEmail/:email', singleUserByEmail);

// inventory routes 
router.post("/create-inventory", createInventories);
router.post("/filter-inventory-type", getInventoriesType);
router.get("/get-all-inventory", getAllInventories);
router.get("/get-single-inventory/:id", getSingleInventories);
router.put("/update-inventory/:id", updateInventory);
router.delete("/delete-inventory/:id", deleteInventories);

// // service routes
router.post("/create-service", createService);
router.get("/get-all-services", getAllServices);
// router.get("/get-single-service/:id", getSingleService);
// router.delete("/delete-service/:id", deleteService);



module.exports = router;