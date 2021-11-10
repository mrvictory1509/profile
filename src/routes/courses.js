const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.post('/store', courseController.store);
router.get('/create', courseController.create);
router.get('/:id/edit', courseController.edit);
router.post('/handle-stored-form-action', courseController.handleStoredFormAction);
router.post('/handle-trash-form-action', courseController.handleTrashFormAction);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.delete);
router.delete('/:id/force', courseController.forcedelete);
router.get('/:slug', courseController.show);

module.exports = router;