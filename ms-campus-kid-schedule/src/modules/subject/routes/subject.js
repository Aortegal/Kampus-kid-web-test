const { SubjectController } = require('../controllers');

const router = require('express').Router();

router.post(
  '/',
  SubjectController.create
);

router.put(
  '/:id',
  SubjectController.update
);

router.get(
  '/',
  SubjectController.findAll
);

router.get(
  '/:id',
  SubjectController.findById
);

router.delete(
  '/:id',
  SubjectController.archive
);

module.exports = router;
