import { Video } from "../modal/Video.modal.js";
import { ApiError } from '../utils/APIerror.js';
import { ApiResponse } from '../utils/APIResponse.js';
import { UploadOnCloudinary, RemoveOldImageFromCloudinary } from '../Service/Cloudinary.js';
import jwt from "jsonwebtoken"
import mongoose from 'mongoose';
import { Asynchandler } from "../utils/Asynchandler.js";


const getAllVideos = Asynchandler(async (req, res) => {
    const { page = 1, limit = 10, query, sortType, userId } = req.query ;

})