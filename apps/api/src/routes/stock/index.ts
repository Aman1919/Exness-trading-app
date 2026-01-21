import express from "express"
import {getAllAssests,getAssetByName} from "../../controllers/stock/index"
const stockRouter  = express.Router()

stockRouter.get('/getAssets',getAllAssests)
stockRouter.get('/getAsset',getAssetByName)

export {stockRouter}