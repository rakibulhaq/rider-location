
var RiderPosition = function(RiderPosition){
    this.rider_id = RiderPosition.rider_id;
    this.service_name = RiderPosition.service_name;
    this.lattitude = RiderPosition.lattitude;
    this.longitude = RiderPosition.longitude;
    this.capture_time = RiderPosition.capture_time;
    this.restaurant_id = RiderPosition.restaurant_id;
    this.mobile_number = RiderPosition.mobile_number;
    this.status = RiderPosition.status;
};

module.exports.RiderPosition = RiderPosition;