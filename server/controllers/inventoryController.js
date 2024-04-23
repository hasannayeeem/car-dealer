const mongoose = require("mongoose");
const Inventory = require("../models/inventoryModel");
const asyncHandler = require("express-async-handler");
const Review = require("../models/serviceModel");

const createInventories = asyncHandler(async (req, res) => {
  const { name, image, description, location, cuisine, rating } = req.body;

  const buildRestaurant = await new Inventory({
    name,
    image,
    description,
    location,
    cuisine,
    rating,
  });

  const createInventories = await buildRestaurant.save();

  return res.status(200).json({
    createInventories,
    message: "successfully created a restaurant Demo",
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

const getRestauranstsByUserEmail = asyncHandler(async (req, res) => {
  const email = req.query.email;
  // console.log(email, restaurants);
  const myRestaurants = await Inventory.find({});
  const restaurants = myRestaurants.filter(
    (restaurants) =>
      restaurants.reviews.filter((review) => review.userId === email).length &&
      restaurants
  );
  // const restaurants = await Review.find({userId: email});
  // console.log(email, restaurants);

  if (!restaurants) {
    return;
  } else {
    return res.status(200).json({
      restaurants,
    });
  }
});

const getInventoriesType = asyncHandler(async (req, res) => {
  const { restaurant } = req.body;

  if (restaurant.toLowerCase() === "all") {
    const allRestaurant = await Inventory.find();
    return res.status(200).json({
      allRestaurant,
    });
  } else {
    const allRestaurant = await Inventory.find({ restaurantType: restaurant });
    return res.status(200).json({
      allRestaurant,
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

const submitRestaurant = asyncHandler(async (req, res) => {
  const user = {
    userId: req.body.userId,
    userName: req.body.userName,
    userEmail: req.body.email,
    marks: req.body.mark,
    paid: req.body.paid,
  };

  const findRestaurant = await Inventory.findById(req.params.restaurant_id);
  findRestaurant.users.push(user);
  const saveSubmit = await findRestaurant.save();

  return res.status(200).json({
    saveSubmit: saveSubmit,
    message: "Successfully Restaurant Submitted ",
  });
});

const deleteInventories = asyncHandler(async (req, res) => {
  const deleteRestaurant = await Inventory.findByIdAndDelete(req.params.id);
  const allRestaurant = await Inventory.find({});
  if (!deleteRestaurant) {
    res.status(400);
    throw new Error("Something Went Wrong!");
  } else {
    return res.status(200).json({
      deleteRestaurant,
      allRestaurant,
      message: "deleted successfully",
    });
  }
});

module.exports = {
  createInventories,
  getAllInventories,
  getRestauranstsByUserEmail,
  getInventoriesType,
  getSingleInventories,
  submitRestaurant,
  deleteInventories,
};
