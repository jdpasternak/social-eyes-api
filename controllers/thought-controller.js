const { Thought } = require("../models");

const thoughtController = {
  getAllThought(req, res) {
    res.send("getAllThought");
  },

  getThoughtById({ params }, res) {
    res.send("getThoughtById");
  },

  createThought({ body }, res) {
    res.send("createThought");
  },

  updateThought({ params, body }, res) {
    res.send("updateThought");
  },

  deleteThought({ params }, res) {
    res.send("deleteThought");
  },

  addReaction({ params, body }, res) {
    res.send("addReaction");
  },

  removeReaction({ params }, res) {
    res.send("removeReaction");
  },
};

module.exports = thoughtController;
