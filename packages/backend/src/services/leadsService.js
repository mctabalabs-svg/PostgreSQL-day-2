const createError = require("http-errors");

const leadsRepo = require("../repositories/leadsRepo");

async function listLeads(query) {
  const filters = {
    limit: parseInt(query.limit || "10", 10),
    offset: parseInt(query.offset || "0", 10),
    q: query.q || "",
    status: query.status || "",
  };

  return await leadsRepo.list(filters);
}

async function getLead(id) {
  const lead = await leadsRepo.getById(id);

  if (!lead) {
    throw createError(404, "Lead not found");
  }

  return lead;
}

async function updateLead(id, body) {
  const allowedStatuses = [
    "new",
    "contacted",
    "qualified",
    "lost",
  ];

  if (!allowedStatuses.includes(body.status)) {
    throw createError(400, "Invalid status");
  }

  const updatedLead = await leadsRepo.update(id, body.status);

  if (!updatedLead) {
    throw createError(404, "Lead not found");
  }

  return updatedLead;
}

async function getStats() {
  return await leadsRepo.stats();
}

module.exports = {
  listLeads,
  getLead,
  updateLead,
  getStats,
};