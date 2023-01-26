const router = require('express').Router();
const { User, Project } = require('../models');

router.get('/', async (req, res) => {
  try {
    // Get all users, sorted by name
    const projectData = await Project.findAll({
      include:[{model: User, 
      attributes: "name"}]
    });

    // Serialize user data so templates can read it
    const projects = projectData.map((project) => project.get({ plain: true }));

    // Pass serialized data into Handlebars.js template
    res.render('homepage', { projects });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
