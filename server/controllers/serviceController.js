const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const Service = require("../models/serviceModel");

const createService = asyncHandler(async (req, res) => {
  const { review, rating, userId, serviceId, name } = req.body;
  const buildService = new Service({
    review,
    name,
    rating,
    userId,
    serviceId,
  });

  const createReview = await buildService.save();

  const service = await service.findById(serviceId);
  service.reviews.push(createReview);
  const totalRating = service.reviews.reduce(
    (sum, review) => sum + review.rating,
    0
  );
  service.rating = totalRating / service.reviews.length;
  await service.save();

  return res.status(200).json({
    createReview,
    message: "service created successfully",
  });
});


const getAllServices = asyncHandler(async (req, res) => {
  const services = await Service.find({});
  if (!services) {
  } else {
    return res.status(200).json({
      services,
    });
  }
});

module.exports = {
  createService,
  getAllServices,
};
