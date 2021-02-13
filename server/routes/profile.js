const router = require("express").Router();

router.get("/", (req, res) => {
    res.json({
      error: null,
      data: {
        title: "My profile",
        content: "profile content",
        user: req.user, // token payload information
      },
    });
  });
  
  module.exports = router;