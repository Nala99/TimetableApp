var times, scroller,navScroll;// create global variables.
/*
 * Get information from the cloud when the app is loaded
 */
$fh.ready(function() {
  $fh.act({
    act:'getTimetable'
  }, function (res){
    if(res.data){
      times= res.data;
      
     /* $fh.data({
      act:'save',
      key:'timetable'
      },function(){
      
      })*/
    }
  },function(err){
    console.log("Error Connecting. Loading from local storage.");
    //load from local storage if no connection is found
    $fh.data({
    act:'load',
    key:'timetable'
    },function(res){
      if(res.data){
        times = res.data
      }
    },function(err){
    console.log("Error: " + err);
    })
  });
  //Call function to create menu buttons
  btnSetup();
  navScroll = new iScroll('navScroller');
});

//Set up iScroll
function setiScroll(){
  var wrapperHeight = window.innerHeight-5;
  document.getElementById('scrollWrapper').style.height = wrapperHeight + "px";
  scroller = new iScroll('scrollWrapper');
}

function btnSetup(){
  $(".navBtn").each(function(){
    $(this).bind("click",function(){
      // Get the pressed buttons id and activate the sub menu
      var currentId = this.id + "Sub";
      $(".subMenu").hide();
      $("#"+currentId).show();
      navScroll.refresh();
    });
  });
}
/*
* Display times depending on what value is passed from index.html
*/
function getTimes(str){ 
  $("#contentText").show();
  $(".navMenu").hide();
  // Create a back button in the header
  $("#headerTxt").html("<span onclick=\"homeScreen()\" style=\"float:left; margin-left:5px;\">&lt;</span>"+Day());
  var i = 0;
  var group = str; //pass value from indext.html to local variable
  var todaysDay = setTimetableDay();// Get the correct day from switch statement in setTimetableDay function
  $("<table id=\"timetableContent\">").appendTo("#contentText");
  $("<tr><th>Time</th><th>Class</th><th>Room</th></tr>").appendTo("#timetableContent");
  // Create rows of the table using for loop
  for (i=0;i<todaysDay.length;i++){
    if (todaysDay[i].grp == group || todaysDay[i].grp == "W"){
      $("<tr><td>"+todaysDay[i].time+"</td><td>"+todaysDay[i].className+"</td><td>"+todaysDay[i].room+"</td></tr>").appendTo("#timetableContent");
      setColours();//Set the colours of the rows using this function
    }
  }
  setiScroll()
}

//Show all times of the particular day
function allTimes(){
  $(".navMenu").hide();
  $("#contentText").show();
  // Create back button in the header
  $("#headerTxt").html("<span onclick=\"homeScreen()\" style=\"float:left; margin-left:5px;\">&lt;</span>"+Day()); 
  var i = 0;
  var todaysDay = setTimetableDay();
  $("<table id=\"timetableContent\" width=\"100%\">").appendTo("#contentText");
  $("<tr><td>Time</td><td>Class</td><td>Room</td><td> </td></tr>").appendTo("#timetableContent");
  // Create rows of the table using for loop
  for (i=0;i<todaysDay.length;i++){
    $("<tr><td>"+todaysDay[i].time+"</td><td>"+todaysDay[i].className+"</td><td>"+todaysDay[i].room+"</td><td>"+todaysDay[i].grp+"</td></tr>").appendTo("#timetableContent");
    setColours();//Set the colours of the rows using this function
  }
  setiScroll()
}

/*
Set the view back to the home screen
*/
function homeScreen(){
  //If iScroll is being used then destroy it before going back to the home screen
  if(scroller){
    scroller.destroy();
    scroller = null;
  }
  $("#headerTxt").html("Menu");
  $(".subMenu").hide();
  $(".content").hide();
  $("#contentText").empty();
  $(".navMenu").show();
}

//Set the colours of the rows in a table
function setColours(){
  $("tr:even").css("background-color","#7D7777");
  $("tr:odd").css("background-color","#FFFFFF");
}

// Get the current day as an int and find it in an array
function Day(){
  var d = new Date();
  var day=new Array(7);
  day[0]="Sunday";
  day[1]="Monday";
  day[2]="Tuesday";
  day[3]="Wednesday";
  day[4]="Thursday";
  day[5]="Friday";
  day[6]="Saturday";
  return day[d.getDay()];
}

//Determin where to look when showing the times to the user
function setTimetableDay (){
  //Create a var that holds the current number of the day
  var date = new Date();
  var day = date.getDay();
  /*Create a switch statement that displays the current timetable 
   *during the week but shows monday on the weekend
   */
  switch (day){
    case 0:
      return times.Monday;
    case 1:
      return times.Monday;
    case 2:
      return times.Tuesday;
    case 3:
      return times.Wednesday;
    case 4:
      return times.Thursday;
    case 5:
      return times.Friday;
    case 6:
      return times.Monday;
  }
}

//Show the feeds to the user depending on what submenu button that the user clicks
function showFeed(name){
  var fname = name;
  $("#contentText").show();
  $(".navMenu").hide();
  $("#headerTxt").html("<span onclick=\"homeScreen()\" style=\"float:left; margin-left:5px;\">&lt;</span>"+fname+" Feed");
  if(fname == "Library"){
    $fh.act({
      act:'getLFeeds'
    },function(res){
      console.log(res);
      for (var i =0;i<res.fields.length;i++){
        $("<p>" + res + "</p>").appendTo("#contentText");
    }
    setiScroll();
  },function(err){
    alert("ERROR");
  }
);}
else if(fname=="College"){
   $fh.act({
    act:'getCFeeds'
  },function(fdataList){
    for (var i=0; i< fdataList.length;i++){
      $("<p>" + fdataList[i].fields.description + "</p>").appendTo("#contentText");
    }
    setiScroll();
  } 
);}
}//Cloase Show Feed

// Display Contact page information
function contactPage(){
  $("#contentText").show().addClass("showFeed");
  $(".navMenu").hide();
  $("#headerTxt").html("<span onclick=\"homeScreen()\" style=\"float:left; margin-left:5px;\">&lt;</span>Contact Me");
  $("<p class=\"plainP\">This email will be sent to alanjoneill18@gmail.com</p>").appendTo("#contentText");
  $("<form name=\"emailForm\"><textarea class=\"textBox\" name=\"msgText\" ></textarea><div class=\"navBtn\" onclick=\"submitMail(emailForm.msgText.value)\"><h4>Send Mail</h4></div></form>").appendTo("#contentText");
}

//Use $fh.send to send email to the information bellow
function submitMail(email){
  var emailText = email;
  $fh.send({
    to:'alanjoneill18@gmail.com',
    subject:'App Email',
    body: emailText
  },function(){
    alert("Message Sent!");
  },function(msg,err){
    alert("There was a problem sending your email.\n Error: " + msg)
  });
}

