import express from 'express';
import diaryRoute from './diaries';


const router = express.Router();

router.use('/diaries', diaryRoute);

export default router;
