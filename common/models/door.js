User = require('./member');
RFIDLog = require('./rfid-log');

module.exports = function(Door) {
  Door.unlock = function(rfid, did, cb) {
    //did = door id, uid = user id
    /*
      First, locate the user & door.
      Then, ensure that the user is allowed to use the door.
      If they are, then send the unlock greenlight.
      In addition, log an access with timestamp, user info, and door id.
    */
    User.find({'rfid':rfid})
    .then(function(user){
      Door.findById(did)
      .then(function(door){
        if(door.permissableUsers.includes(user.id)){
          //log that into our rfid logger
          RFIDLog.create({
            member: user.id,
            door: door.id,
            timestamp: Date.now(),
            success: true
          }, function(err, log){
            if(err){
              console.log(err);
            }
          })
          cb(null, true);
        }
        else {
          //also log into rfid logger
          RFIDLog.create({
            member: user.id,
            door: door.id,
            timestamp: Date.now(),
            success: false
          }, function(err, log){
            if(err){
              console.log(err);
            }
          })
          cb(null, false);
        }
      })
      .catch(function(err){
        //door not found
        cb(null, err)
      })
    })
    .catch(function(err){
      //user not found
      cb(null, err)
    })
  };

  Door.remoteMethod(
    'unlock',
    {
      http: {path: '/unlock', verb: 'post'},
      returns: {arg: 'open', type: 'boolean'}
    }
  )
};
