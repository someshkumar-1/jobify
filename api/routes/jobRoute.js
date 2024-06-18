import express from "express";
import { createJob, deleteJob, getAllJob, showStats, updateJob } from "../controllers/jobController.js";


const router = express.Router();

router.route('/').post(createJob).get(getAllJob)
router.route('/stats').get(showStats)
router.route('/:id').delete(deleteJob).put(updateJob)



export default router;
