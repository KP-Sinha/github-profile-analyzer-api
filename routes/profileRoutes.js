const express = require("express");

const router = express.Router();

const {
  analyzeProfile,
  getAllProfiles,
  getSingleProfile,
} = require("../controllers/profileController");

router.post("/analyze-profile", analyzeProfile);

router.get("/profiles", getAllProfiles);

router.get("/profiles/:id", getSingleProfile);

module.exports = router;