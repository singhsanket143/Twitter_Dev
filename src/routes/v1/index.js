import express from 'express';

import { createTweet, getTweet } from '../../controllers/tweet-controller.js';
import { toggleLike } from '../../controllers/like-controller.js';
import { createComment } from '../../controllers/comment-controller.js';
import { signup, login } from '../../controllers/auth-controller.js';

import { authenticate } from '../../middlewares/authenticate.js'

const router = express.Router();

router.post('/tweets', authenticate, createTweet);
router.get('/tweets/:id', getTweet);

router.post('/likes/toggle',toggleLike);


router.post('/comments', createComment);

router.post('/signup', signup);

router.post('/login', login);

export default router;
