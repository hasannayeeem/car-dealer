const mongoose = require("mongoose");
const Inventory = require("../models/inventoryModel");
const asyncHandler = require("express-async-handler");
const Review = require("../models/serviceModel");

const createInventories = asyncHandler(async (req, res) => {
  const { name, image, description, location, cuisine, rating } = req.body;

  const buildInventory = await new Inventory({
    name,
    image,
    description,
    location,
    cuisine,
    rating,
  });

  const createInventories = await buildInventory.save();

  return res.status(200).json({
    createInventories,
    message: "successfully created a Inventory Demo",
  });
});

const getAllInventories = asyncHandler(async (req, res) => {
  const inventories = await Inventory.find({});
  if (!inventories) {
  } else {
    return res.status(200).json({
      inventories,
    });
  }
});

const getInventoriesByUserEmail = asyncHandler(async (req, res) => {
  const email = req.query.email;
  // console.log(email, inventories);
  const myInventories = await Inventory.find({});
  const inventories = myInventories.filter(
    (inventories) =>
      inventories.reviews.filter((review) => review.userId === email).length &&
      inventories
  );
  // const inventories = await Review.find({userId: email});
  // console.log(email, inventories);

  if (!inventories) {
    return;
  } else {
    return res.status(200).json({
      inventories,
    });
  }
});

const getInventoriesType = asyncHandler(async (req, res) => {
  const { inventory } = req.body;

  if (inventory.toLowerCase() === "all") {
    const inventories = await Inventory.find();
    return res.status(200).json({
      inventories,
    });
  } else {
    const inventories = await Inventory.find({ inventoryType: inventory });
    return res.status(200).json({
      inventories,
    });
  }
});

const getSingleInventories = asyncHandler(async (req, res) => {
  const inventory = await Inventory.findById(req.params.id);
  if (!inventory) {
  } else {
    return res.status(200).json({
      inventory,
    });
  }
});

const submitInventory = asyncHandler(async (req, res) => {
  const user = {
    userId: req.body.userId,
    userName: req.body.userName,
    userEmail: req.body.email,
    marks: req.body.mark,
    paid: req.body.paid,
  };

  const findInventory = await Inventory.findById(req.params.inventory_id);
  findInventory.users.push(user);
  const saveSubmit = await findInventory.save();

  return res.status(200).json({
    saveSubmit: saveSubmit,
    message: "Successfully Inventory Submitted ",
  });
});


const updateInventory = async (req, res) => {
	try {
		const id = req.params.id
		const data = req.body
    console.log(data);
		await Inventory.updateOne(
			{ _id: id },
			{
				$set: data,
			}
		)
		res.status(200).json({
			success: true,
			message: 'Inventory data has been updated successfully',
		})
	} catch (err) {
		res.status(500).json({
			success: false,
			message: 'Can not update because of a server side error!',
		})
	}
}


const deleteInventories = asyncHandler(async (req, res) => {
  const deleteInventory = await Inventory.findByIdAndDelete(req.params.id);
  const getAllInventories = await Inventory.find({});
  if (!deleteInventory) {
    res.status(400);
    throw new Error("Something Went Wrong!");
  } else {
    return res.status(200).json({
      deleteInventory,
      getAllInventories,
      message: "deleted successfully",
    });
  }
});

module.exports = {
  createInventories,
  getAllInventories,
  getInventoriesByUserEmail,
  getInventoriesType,
  getSingleInventories,
  submitInventory,
  updateInventory,
  deleteInventories,
};
