const router = require("express").Router();

router.route("/").get().post().put().delete();

router.route("/:thoughtId/reactions").post().delete();

module.exports = router;
