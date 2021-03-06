/*
  All the functions in main.js are publicly accessible

  The contents of the files in the shared directory are also available.
*/
var timetable = require("./timetable.js").getTimetable();//get the local version of timetable
//Retrieve timetable data from the cloud
exports.getTimetable=function(params,callback){
  return callback(null,{data : timetable});  
};

/*
Depending on what the user clicks one of the follwing functions will be called 
to display the correct information to the screen. In each case the max ammount 
of results retrieved will be 10
*/
exports.getLFeeds=function(params,callback){
  var ldata = $fh.feed({
  "link":"http://api.twitter.com/1/statuses/user_timeline.rss?screen_name=witlibraries",
  "list-max": 10
  },function(err,res){
    if(err){
      console.log(err);
      return callback(null,err);
    }
    else{
      console.log(res);
      return callback(null,{data:res});
    }
  });
};

exports.getCFeeds=function(params,callback){
  var ldata = $fh.feed({
  "link":"http://api.twitter.com/1/statuses/user_timeline.rss?screen_name=waterfordit",
  "list-max": 10
  },function(err,res){
  if(err){
    console.log(err);
    return callback(null,err);
  }
  else{
    console.log(res);
    return callback(null,{data:res});    
  }
  });
};