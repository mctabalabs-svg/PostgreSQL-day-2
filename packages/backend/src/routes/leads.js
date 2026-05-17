const express = require("express");

const leadsService = require("../services/leadsService");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const leads = await leadsService.listLeads(req.query);

    res.json(leads);
  } catch (error) {
    next(error);
  }
});

router.get("/stats", async (req, res, next) => {
  try {
    const stats = await leadsService.getStats();

    res.json(stats);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const lead = await leadsService.getLead(req.params.id);

    res.json(lead);
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const updatedLead = await leadsService.updateLead(
      req.params.id,
      req.body
    );

    res.json(updatedLead);
  } catch (error) {
    next(error);
  }
});

module.exports = router;