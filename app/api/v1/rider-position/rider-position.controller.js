const BaseController = require('../base').BaseController;
const RiderPositionHandler = require('./rider-position.handler');

class RiderPositionController extends BaseController{
    constructor(){
        super();
        this._RiderPositionHandler = new RiderPositionHandler();

    }
    getRiderPositionInfo(req, res , next){
        this._RiderPositionHandler.getRiderPositionInfo(req, null, this._responseManager.getDefaultResponseHandler(res));
    }
    create(req, res){
        let responseManager = this._responseManager;
        this._RiderPositionHandler.createNewRiderPosition(req, responseManager.getDefaultResponseHandler(res));
    }
    getAll(req, res, next){
            this._RiderPositionHandler.getAllRiderPosition(req, this._responseManager.getDefaultResponseHandler(res));
    }
    update(req, res, next){
            this._RiderPositionHandler.updateRiderPosition(req, this._responseManager.getDefaultResponseHandler(res));
    }
    remove(req, res, next){
            this._RiderPositionHandler.deleteRiderPosition(req, this._responseManager.getDefaultResponseHandler(res));
    }

}

module.exports = RiderPositionController;