/*
This is a JSON array which holds all the information of what times and days the each lesson is on
this is called from the init.js file when loaded
*/
var timetable = {
    "Monday":
    [
      {"time":"9:15","className":" ","room":" ","grp":"W"},
      {"time":"10:15","className":"Networks & Systems","room":"ITG17","grp":"W"},
      {"time":"11:15","className":"Networks & Systems","room":"D04","grp":"W2"},
      {"time":"11:15","className":" ","room":" ","grp":"W1"},
      {"time":"12:15","className":" ","room":" ","grp":"W"},
      {"time":"1:15","className":"Multimedia Programming","room":"E15","grp":"W"},
      {"time":"2:15","className":"Security Principles","room":"ITG19","grp":"W1"},
      {"time":"2:15","className":" ","room":" ","grp":"W2"},
      {"time":"3:15","className":"Digital Graphic Design","room":"F27","grp":"W"},
      {"time":"4:15","className":"Digital Graphic Design","room":"IT102","grp":"W2"},
      {"time":"4:15","className":" ","room":" ","grp":"W1"}
    ],
    "Tuesday":
    [
      {"time":"9:15","className":"Digital Graphic Design","room":"IT120","grp":"W1"},
      {"time":"9:15","className":"3D & Video","room":"IT101","grp":"W2"},
      {"time":"10:15","className":"3D & Video","room":"IT101","grp":"W2"},
      {"time":"10:15","className":" ","room":" ","grp":"W1"},
      {"time":"11:15","className":"Digital Graphic Design","room":"IT102","grp":"W1"},
      {"time":"11:15","className":"3D & Video","room":"IT101","grp":"W2"},
      {"time":"12:15","className":"Digital Graphic Design","room":"IT102","grp":"W1"},
      {"time":"12:15","className":" ","room":" ","grp":"W2"},
      {"time":"1:15","className":" ","room":" ","grp":"W"},
      {"time":"2:15","className":"Security Principles","room":"F03","grp":"W"},
      {"time":"3:15","className":"Multimedia Programming","room":"E03","grp":"W"},
      {"time":"4:15","className":"Security Principles","room":"IT120","grp":"W2"},
      {"time":"4:15","className":" ","room":" ","grp":"W1"}
    ],
    "Wednesday":
    [
      {"time":"9:15","className":"Multimedia Programming","room":"IT119","grp":"W1"},
      {"time":"9:15","className":"eLearning & Accessibility","room":"ITG03","grp":"W2"},
      {"time":"10:15","className":"Multimedia Programming","room":"IT119","grp":"W2"},
      {"time":"10:15","className":" ","room":" ","grp":"W1"},
      {"time":"11:15","className":"3D & Video","room":"D11","grp":"W"},
      {"time":"12:15","className":" ","room":" ","grp":"W"},
      {"time":"1:15","className":"Digital Graphic Design","room":"IT102","grp":"W2"},
      {"time":"1:15","className":" ","room":" ","grp":"W1"},
      {"time":"2:15","className":"Networks & System & Concepts","room":"D04","grp":"W1"},
      {"time":"2:15","className":"Digital Graphic Design","room":"IT102","grp":"W2"},
      {"time":"3:15","className":"Networks & System & Concepts","room":"F28","grp":"W"},
      {"time":"4:15","className":"eLearning & Accessibility","room":"IT120","grp":"W1"},
      {"time":"4:15","className":" ","room":" ","grp":"W2"}
    ],
    "Thursday":
    [
      {"time":"9:15","className":"Security Principles","room":"FO1","grp":"W"},
      {"time":"10:15","className":"eLearning & Accessibility","room":"C26","grp":"W"},
      {"time":"11:15","className":"Networks & System & Concepts","room":"D11","grp":"W"},
      {"time":"12:15","className":" ","room":" ","grp":"W"},
      {"time":"1:15","className":"eLearning & Accessibility","room":"IT101","grp":"W1"},
      {"time":"1:15","className":"Multimedia Programming","room":"IT120","grp":"W2"},
      {"time":"2:15","className":"eLearning & Accessibility","room":"E03","grp":"W"},
      {"time":"3:15","className":"eLearning & Accessibility","room":"ITG17","grp":"W2"},
      {"time":"3:15","className":" ","room":" ","grp":"W1"},
      {"time":"4:15","className":"Security Principles","room":"F04","grp":"W"}
      ],
    "Friday":
    [
      {"time":"9:15","className":"Multimedia Programming","room":"IT119","grp":"W1"},
      {"time":"9:15","className":" ","room":" ","grp":"W2"},
      {"time":"10:15","className":"Multimedia Programming","room":"ITG03","grp":"W1"},
      {"time":"10:15","className":" ","room":" ","grp":"W2"},
      {"time":"11:15","className":"Multimedia Programming","room":"IT119","grp":"W2"},
      {"time":"11:15","className":" ","room":" ","grp":"W1"},
      {"time":"12:15","className":" ","room":" ","grp":"W"},
      {"time":"1:15","className":" ","room":" ","grp":"W"},
      {"time":"2:15","className":"3D & Video","room":"D04","grp":"W1"},
      {"time":"2:15","className":" ","room":" ","grp":"W2"},
      {"time":"3:15","className":"3D & Video","room":"IT102","grp":"W1"},
      {"time":"3:15","className":" ","room":" ","grp":"W2"},
      {"time":"4:15","className":"3D & Video","room":"F28","grp":"W1"},
      {"time":"4:15","className":" ","room":" ","grp":"W2"}
      ]
};

exports.getTimetable = function(){
  return timetable;
}