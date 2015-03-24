var bio = {
	"name": "Thomas Stark",
	"role": "Software Developer",
	"contacts": {
	     "mobile": "978-555-1212",
	     "email": "tomstark@fakemail.com",
	     "github": "tom-udacity",
	     "location": "Mill Creek, WA",
	     "instagram": "delivery-boy"
	},
	"welcomeMessage": "A seasoned delivery driver.",
	"skills": [
	  "Java",
	  "SQL",
	  "Android",
	  "Photography"
	],
	"biopic": "images/fry.jpg",
	"display": function() {
		var $header = $("#header");
		$header.prepend(HTMLheaderRole.replace("%data%", bio.role));
		$header.prepend(HTMLheaderName.replace("%data%", bio.name));

		for (var contactType in bio.contacts) {
			var contactValue = bio.contacts[contactType];
			
			var contactTemplate = HTMLcontactGeneric;
			switch (contactType) {
			case "mobile": contactTemplate = HTMLmobile; break;
			case "email": contactTemplate = HTMLemail; break;
			case "github": contactTemplate = HTMLgithub; break;
			case "blog": contactTemplate = HTMLblog; break;
			case "twitter": contactTemplate = HTMLtwitter; break;
			case "location": contactTemplate = HTMLlocation; break;
			default:  contactTemplate = contactTemplate.replace("%contact%", contactType);
			};
			
			$("#topContacts").append(contactTemplate.replace("%data%", contactValue));
			$("#footerContacts").append(contactTemplate.replace("%data%", contactValue));
		}
		
		$header.append(HTMLbioPic.replace("%data%", bio.biopic));
		$header.append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

		if (bio.skills.length > 0) {
			$header.append(HTMLskillsStart);
			for (var skillIdx in bio.skills) {
				$('#skills').append(HTMLskills.replace("%data%", bio.skills[skillIdx]));
			}
		}
	}
};

var work = {
	"jobs": [
 	    {
	    	"employer": "AT&T",
	    	"title": "Software Developer",
	    	"location": "Bothell, WA",
	    	"dates":  "2000-2015",
	    	"description": "Software development using Java, SQL, Android, COBOL, C, BlackBerry, Siebel, Unix shell scripting, WebSphere, web programming, other stuff."
	    },
	    {
	    	"employer": "Frederick & Nelsons",
	    	"title": "stockboy",
	    	"location": "Tukwila, WA",
	    	"dates":  "1998-1998",
	    	"description": "Mostly stocked Frangos."
	    }
    ],
    "display": function() {
    	if (work.jobs.length > 0) {
    		for (jobIdx in work.jobs) {
    			var job = work.jobs[jobIdx];
    			
    			var employerHTML = HTMLworkEmployer.replace("%data%", job.employer);
    			var titleHTML = HTMLworkTitle.replace("%data%", job.title);
    			var locationHTML = HTMLworkLocation.replace("%data%", job.location);
    			var datesHTML = HTMLworkDates.replace("%data%", job.dates);
    			var descriptionHTML = HTMLworkDescription.replace("%data%", job.description);
    			
    			$("#workExperience").append(HTMLworkStart);
    			$(".work-entry:last")
    				.append(locationHTML)
    				.append(employerHTML + " " + titleHTML)
    				.append(datesHTML)
    				.append(descriptionHTML);
    		}
    	}
    }
};

var projects = {
	"projects": [
		{
			"title": "Wireless data processing",
			"dates":  "2000-2004",
			"description": "The SME for a $2B/year wireless data rebilling system.  Included processing incoming wireless data, financial reporting, company data consolidation, etc.",
			"images": [
			      "images/finance.jpg",
			 ]
		},
		{
			"title": "Raven Human Powered Airplane Flight Simulator",
			"dates":  "1994",
			"description": "Wrote the software to control the flight simulator hardware.  All software was written in assembly language using a 68HC11 microcontroller.  The software would read speed sensors, communicate with a graphical flight simulator, and control motors for brakes and simulated inertia.",
			"images": [
			      "images/raven_web_logo.jpg"
			 ]
		}
    ],
	"display": function() {
		for (var projectIdx in this.projects) {
			var project = this.projects[projectIdx];
			
			var titleHTML = HTMLprojectTitle.replace("%data%", project.title);
			var datesHTML = HTMLprojectDates.replace("%data%", project.dates);
			var descriptionHTML = HTMLprojectDescription.replace("%data%", project.description);
			
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last")
				.append(titleHTML)
				.append(datesHTML)
				.append(descriptionHTML)
			;
			
			for (imageIdx in project.images) {
				var imageHTML = HTMLprojectImage.replace("%data%", project.images[imageIdx]);
				$(".project-entry:last").append(imageHTML);
			}
		}
	}
};

var education = {
	"schools": [
        {
	    	"name": "University of Washington",
	    	"location": "Seattle, WA",
	    	"degree": "BS",
	    	"majors": [
    	           "Computer Science"
            ],
	    	"dates": "1994",
	    	"url": "http://www.washington.edu/"
	    }
   	],
    "onlineCourses": [
        {
	    	"title": "Front End Developer",
	    	"school": "Udacity",
	    	"date": 2015,
	    	"url": "http://udacity.com"
	    }
	],
	"display":  function() {
		var $education = $("#education");

		// Schools
		for (var schoolIdx in this.schools) {
			displaySection = true;
			var school = this.schools[schoolIdx];
			
			$education.append(HTMLschoolStart);
			$(".education-entry:last")
				.append(HTMLschoolLocation.replace("%data%", school.location))
				.append(HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree))
				.append(HTMLschoolDates.replace("%data%", school.dates))
			;
			
			for (var majorIdx in school.majors) {
				var major = school.majors[majorIdx];
				$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", major))
			}
		}

		// Online courses
		if (this.onlineCourses.length > 0) {
			$education.append(HTMLonlineClasses);
			
			for (var onlineCourseIdx in this.onlineCourses) {
				displaySection = true;
				var school = this.onlineCourses[onlineCourseIdx];
				
				$education.append(HTMLschoolStart);
				$(".education-entry:last")
					.append(HTMLonlineTitle.replace("%data%", school.title) + HTMLonlineSchool.replace("%data%", school.school))
					.append(HTMLonlineDates.replace("%data%", school.date))
					.append(HTMLonlineURL.replace("%data%", school.url))
				;

			}
		}
	}
};

function initializeDisplays() {
	bio.display();
 	work.display();
 	projects.display();
 	education.display();
 	$("#mapDiv").append(googleMap);
}

$(initializeDisplays);
