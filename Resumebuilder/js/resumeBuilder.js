/*
This is empty on purpose! Your code to build the resume will go here.
*/
var bio={
    "name":"Mohammed Sameer Khan",
    //"age":"25",
    "role":"Web Developer",
    "contacts":{
        "mobile":"8123571615",
        "email":"sameer@jamsons.in",
        "github":"jamsameer",
        "location":"Dandeli"
    },
    "welcomeMessage":"Hello EveryBody",
    "skills":
    ["Php","MVC" , "C#" , ".Net" , "HTML" ],
    "biopic":"images/Tulips.jpg"

};

var formatedName=HTMLheaderName.replace("%data%",bio.name);
var formatedRole=HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formatedRole);
$("#header").prepend(formatedName);



var formattedPic = HTMLbioPic.replace('%data%', bio.biopic);
var formatedMobile= HTMLmobile.replace('%data%',bio.contacts.mobile);
var formatedEmail=HTMLemail.replace('%data%',bio.contacts.email);
var formatedgithub=HTMLgithub.replace('%data%',bio.contacts.github);
var formatedLocation=HTMLlocation.replace('%data%',bio.contacts.location);
var formatedWelcomeMessage=HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage);
$("#header").append(formattedPic);
$("#header").append(formatedWelcomeMessage);

$("#topContacts").append(formatedMobile);
$("#topContacts").append(formatedEmail);
$("#topContacts").append(formatedgithub);
$("#topContacts").append(formatedLocation);

if(bio.skills.length > 0)
{
    $("#header").append(HTMLskillsStart);
    var formatedskill=HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formatedskill);
    formatedskill=HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formatedskill);
    formatedskill=HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formatedskill);
    formatedskill=HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formatedskill);
    formatedskill=HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formatedskill);
}

var work=
{
    "jobs":
    [
    {
        "employer":"Jamsons Enterprises",
        "title":"Web Developer",
        "dates":"August 2016",
        "location":"goa",
        "description":"We make IT possible"

    },
    {
        "employer":"Harvest InfoTech",
        "title":"Web Developer",
        "dates":"December 2016",
        "location":"Bangalore",
        "description":"We make IT possible"
    }
    ]
}


function displayWork() {

    for(job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formatedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formatedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formateddates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
        var formatedLocation=HTMLworkLocation.replace("%data%",work.jobs[job].location);
        var formatedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
        var formatedlast=formatedEmployer+formatedTitle+formateddates+formatedLocation+formatedDescription;
        $(".work-entry:last").append(formatedlast);
    }
}

var projects={
    "project":
    [
    {
        "title":"USB Drive Tracker",
        "dates":"2012s",
        "description":"Tracks the USB Devices in LAN",
        "images":
                [
                "http://placehold.it/300x300"
                ]
    }
    ]
}
displayWork();
for(proj in projects.project)
{
    $("#projects").append(HTMLprojectStart);
    var formatedProjectTitle=HTMLprojectTitle.replace("%data%",projects.project[proj].title);
    var formatedProjectDates=HTMLprojectDates.replace("%data%",projects.project[proj].dates);
    var formatedProjectDescription=HTMLprojectDescription.replace("%data%",projects.project[proj].description);
    var formatedProjectImage=HTMLprojectImage.replace("%data%",projects.project[proj].images);
    var formatedlast=formatedProjectTitle+formatedProjectDates+formatedProjectDescription+formatedProjectImage;
    $(".project-entry:last").append(formatedlast);
}

var education= {
    "schools":
    [
    {
        "name":"VDRIT College of Engg",
        "degree":"BE",
        "dates":2015,
        "location":"Haliyal ,karnataka,india",
        "major":[".net","php","java"]

    },
    {
        "name":"Govt Polytechnic Joida",
        "degree":"Diploma",
        "location":"Marutinagar,Dandeli ,karnataka,india",
        "dates":2012,
        "major":["CompSci","Software Engg"]

    }
    ],
    "onlineCourse":
    [
    {
        "title":"JavaScript Crash Course",
        "school":"udacity",
        "dates":2014,
        "url":"http://udacity.com/course/ud804"
    }
    ]
}


for(school in education.schools)
{

    $("#education").append(HTMLschoolStart);

    var formatedSchoolName=HTMLschoolName.replace("%data%",education.schools[school].name);
    var formatedDegree=HTMLschoolDegree.replace("%data%",education.schools[school].degree);
    var formatedSchoolDates=HTMLschoolDates.replace("%data%",education.schools[school].dates);
    var formatedSchoolLocation=HTMLschoolLocation.replace("%data%",education.schools[school].location);
    var formatedSchoolMajor=  HTMLschoolMajor.replace("%data%",education.schools[school].major);
    var formatedlast=formatedSchoolName + formatedDegree + formatedSchoolDates + formatedSchoolLocation + formatedSchoolMajor;
    $(".education-entry:last").append(formatedlast);
}

for(edu in education.onlineCourse)
{
    $("#education").append(HTMLonlineClasses);
    var formatedTitle=HTMLonlineTitle.replace("%data%",education.onlineCourse[edu].title);
    var formatedOnlineSchool=HTMLonlineSchool.replace("%data%",education.onlineCourse[edu].school);
    var formatedDates=HTMLonlineDates.replace("%data%",education.onlineCourse[edu].dates);
    var formatedUrl=HTMLonlineURL.replace("%data%",education.onlineCourse[edu].url);
    var formatedlast=formatedTitle+formatedOnlineSchool+formatedDates+formatedUrl;
    $("#education:last").append(formatedlast);
}

$("#header").append(internationalizeButton);
function inName(name){
    names=bio.name.trim().split(" ");
    console.log(name);
    names[1]=names[1].toUpperCase();
    names[0]=names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    return names[0]+" "+names[1];
}

$("#mapDiv").append(googleMap);










