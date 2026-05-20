const express = require("express");
const leadsService = require("../services/leadsService");

const router = express.Router();

// GET all leads
router.get("/", async (req, res, next) => {
  try {
    const leads = await leadsService.list();
    res.json(leads);
  } catch (err) {
    next(err);
  }
});

// GET stats
router.get("/stats", async (req, res, next) => {
  try {
    const stats = await leadsService.stats();
    res.json(stats);
  } catch (err) {
    next(err);
  }
});

// GET one lead
router.get("/:id", async (req, res, next) => {
  try {
    const lead = await leadsService.getOne(req.params.id);
    res.json(lead);
  } catch (err) {
    next(err);
  }
});

// UPDATE lead
router.put("/:id", async (req, res, next) => {
  try {
    const updated = await leadsService.update(
      req.params.id,
      req.body
    );

    res.json(updated);
  } catch (err) {
    next(err);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const updated = await leadsService.update(
      req.params.id,
      req.body
    );

    res.json(updated);
  } catch (err) {
    next(err);
  }
});

module.exports = router;