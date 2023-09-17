const route = require("express").Router();
const dataController = require("./../controllers/dataController");

route.get("/fetch",dataController.fetchData);
route.get("/get-data",dataController.getData)

module.exports = route