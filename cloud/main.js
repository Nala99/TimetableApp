/*
  All the functions in main.js are publicly accessible

  The contents of the files in the shared directory are also available.
*/
var timetable = require("./timetable.js").getTimetable();
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
  "list-max": 1
  },function(res,err){
    if(err){
      console.log("Result Found");
      return callback(null,res);
    }
    else{
      //var fdataList=ldata.list;
      return callback(null,err);
    }
  });
};

function getCFeeds(){
  
  var ldata = $fh.feed({
  "link":"http://api.twitter.com/1/statuses/user_timeline.rss?screen_name=waterfordit",
  "list-max": 10
  });
  var fdataList = ldata.list;
  
  return fdataList;
}