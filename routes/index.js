const express = require('express'),
  router = express.Router(),
  Parks = require('../models/Parks');


/* GET home page. */
router.get('/', async (req, res, next) => {
  const parkList = await Parks.getAll();

  res.render('template', {
    locals: {
      title: 'Time to shred bruh!',
      parkData: parkList
    },
    partials: {
      partial: 'partial-index'
    }
  });
});

module.exports = router;
