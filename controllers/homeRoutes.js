const router = require("express").Router();
const { User, Post } = require("../models");

router.get("/", async (req, res) => {
  try {
    res.render("welcome");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", async (req, res) => {
  try {
    const newPostData = await Post.findAll();

    const posts = newPostData.map((post) => post.get({ plain: true }));
    res.render("dashboard", {
      posts,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/newpost", async (req, res) => {
  try {
    res.render("newpost", {logged_in: req.session.logged_in});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/logout", async (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});
// // Get all users, sorted by name
// const projectData = await Project.findAll({
//   include:[{model: User,
//   attributes: "name"}]
// });

// // Serialize user data so templates can read it
// const projects = projectData.map((project) => project.get({ plain: true }));

// Pass serialized data into Handlebars.js template
//   res.render('homepage', { projects });
// } catch (err) {
//   res.status(500).json(err);
// }

module.exports = router;
