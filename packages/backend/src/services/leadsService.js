const createError = require("http-errors");
const leadsRepo = require("../repositories/leadsRepo");

async function list() {
  return leadsRepo.list();
}

async function getOne(id) {
  const lead = await leadsRepo.getById(id);

  if (!lead) {
    throw createError(404, "Lead not found");
  }

  return lead;
}

async function update(id, data) {
  const existing = await leadsRepo.getById(id);

  if (!existing) {
    throw createError(404, "Lead not found");
  }

  return leadsRepo.update(id, data);
}

async function stats() {
  return leadsRepo.stats();
}

module.exports = {
  list,
  getOne,
  update,
  stats,
};