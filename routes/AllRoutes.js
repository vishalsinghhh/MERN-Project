const express = require("express");
const router = express.Router();

const {
  route1,
  route2,
  route3,
  route4,
  route5,
} = require("../controllers/AllController");

router.get("/router1", route1);
router.get("/router2", route2);
router.get("/router3", route3);
router.get("/router4", route4);
router.get("/router5", route5);

module.exports = router;
