const RiderPositionModel = require("./rider-postion.model").RiderPosition;

class RiderPositionHandler {
  constructor() {
    this._validator = require("validator");
  }

  getRiderPositionInfo(req, RiderPositionToken, callback) {
    return new Promise(function(resolve, reject) {
      let RiderPositionId = req.params.id;

      sql.query(
        "Select * from rider_locations where id = ? ",
        RiderPositionId,
        function(err, res) {
          if (err) {
            console.log("error: ", err);
            reject(err);
          } else {
            resolve(res);
          }
        }
      );
    })
      .then(res => {
        callback.onSuccess(res);
      })
      .catch(error => {
        callback.onError(error);
      });
  }
  createNewRiderPosition(req, callback) {
    let data = req.body;

    let newRiderPosition = new RiderPositionModel({
      custom_id: data.custom_id,
      some_name: data.some_name ? data.some_name : "",
      mobile_number: data.mobile_number ? data.mobile_number : 0
    });
    return new Promise(function(resolve, reject) {
          //create new entry
          sql.query(
            "INSERT INTO rider_locations set ?",
            newRiderPosition,
            function(err, res) {
              if (err) {
                console.log("error: ", err);
                reject(err);
              } else {
                newRiderPosition["id"] = res.insertId;
                resolve(newRiderPosition);
              }
            }
          );
        })
      .then(saved => {
        callback.onSuccess(saved);
      })
      .catch(error => {
        callback.onError(error);
      });
  }
  updateRiderPosition(req, callback) {
    let data = req.body;
    let id = req.params.id;
    // console.log(id);

    return new Promise((resolve, reject) => {
      //update endpoint
      sql.query("UPDATE rider_locations SET ? WHERE id = ?", [data, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
              reject(err);
           }
         else{   
           resolve(data);
              }
          }); 
    })
      .then(saved => {
        callback.onSuccess(saved);
      })
      .catch(error => {
        callback.onError(error);
      });
  }
  deleteRiderPosition(req, callback) {
    let id = req.params.id;
    return new Promise((resolve, reject) => {
      //delete endpoint entry
      sql.query("DELETE FROM rider_locations WHERE id = ?", [id], function (err, res) {

        if(err) {
            console.log("error: ", err);
            reject(err);
        }
        else{
       
         resolve(res);
        }
    }); 
    })
      .then(deleted => {
        callback.onSuccess(deleted);
      })
      .catch(error => {
        callback.onError(error);
      });
  }
  getAllRiderPosition(req, callback) {
    return new Promise((resolve, reject) => {
      if (typeof req.query.operation != "undefined") {
        if(req.query.operation == 'nearest_rider'){
          //api for calculating nearesst location for the rider from a caller
        }
      } else {
        //catch all RiderPosition get request
        sql.query("Select * from rider_locations", function (err, res) {

            if(err) {
                console.log("error: ", err);
                reject(err);
            }
            else{
              console.log('RiderPositions : ', res);  

             resolve(res);
            }
        });
      }
    })
      .then(data => {
        callback.onSuccess(data);
      })
      .catch(error => {
        callback.onError(error);
      });
  }
}
module.exports = RiderPositionHandler;
