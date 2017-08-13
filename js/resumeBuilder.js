var bio =
{
	"name": "Kaoru Ronaldo Kishimoto",
	"role": "Systems Analyst / Developer / Project Leader / Troubleshooting Developer-Analyst",
	"contacts": {
		"mobile": "+55-21-981875613",
		"email": "kaoru.ronaldo@gmail.com",
		"facebook": "www.facebook.com/kronaldok",
		"location": "Rio de Janeiro, Brazil"
	},
	"pictureUrl": "images/krk.png",
	"welcomeMessage": "I enjoy creating, designing and implementing new solutions to issues, as well as fixing and improving already existing ones.",
	"skills": [
					"Solid knowledge of analytical techniques, having extensive pratical years of experience in application development;",
					"Strong troubleshooting abilities, identifies system problems and codes the solutions to these problems whe aplicable;",
					"Result-oriented, not task-oriented;",
					"Skills to work in a team, able to reach solutions or alternative pathways through communication with actors involved;",
					"Provides escalation support, problem diagnosis, and resolution for more complex issues with Information Technology (IT) customer support;"
			],
	"display": function(aBio){
		var formattedRole = HTMLheaderRole.replace("%data%", aBio.role);
		$("#header").prepend(formattedRole);
		var formattedName = HTMLheaderName.replace("%data%", aBio.name);
		$("#header").prepend(formattedName);

		for (contactIndex in aBio.contacts){
			var formattedContact = HTMLcontactGeneric.replace("%contact%", contactIndex);
			formattedContact =  formattedContact.replace("%data%", aBio.contacts[contactIndex]);
			$("#topContacts").append(formattedContact);
			$("#footerContacts").append(formattedContact);
		}
		var formattedBioPic = HTMLbioPic.replace("%data%", aBio.pictureUrl);
		$("#header").append(formattedBioPic);
		var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", aBio.welcomeMessage);
		$("#header").append(formattedWelcomeMessage);

		$("#header").append(HTMLskillsStart);

		for (skillIndex in aBio.skills){
			var HTMLnewSkills = HTMLskills;
			var formattedSkills = HTMLnewSkills.replace("%data%", aBio.skills[skillIndex]);
			$("#skills").append(formattedSkills);
		}

}
}

var work =
{
	"jobs": [
				{
					"employer":"Quality Software",
					"title":"Systems Analyst",
					"location":"Avenida Rio Branco, Center, Rio de Janeiro, RJ, Brazil",
					"dates":"2010 - future",
					"description": [
										"Develops and maintains a web-based application built in J2EE architecture, using JSP / Javascript / Struts 1 / EJB 2 / Hibernate / Oracle PL-SQL and SOAP based webservices;",
										"Responds to system outages, malfunctions, and related technical problems, and conducts diagnostic testing, repair and replacement activities necessary to solve identified problems;",
										"Participates in troubleshooting system problems as they relate to the application development or to external points the system interfaces to;"
									]
				},
				{
					"employer":"MJV Technology and Innovation",
					"title":"IT Consultant",
					"location":"Avenida Marechal Câmara, Center, Rio de Janeiro, RJ, Brazil",
					"dates":"2008 - 2010",
					"description":["Development for integration of mobile value added service application and browser based systems to the carrier's mobile network using Java standalone architecture with queues and Short Message Peer-to-Peer (SMPP) protocol;",
									"Web application development using Java J2EE (JSP / Javascript / Struts 1 / EJB 2), Oracle database;"]
				},
				{
					"employer":"Vivo / Telefonica Celular",
					"title":"Network Analyst",
					"location":"Avenida Ayrton Senna, Barra da Tijuca, Rio de Janeiro, RJ, Brazil",
					"dates":"2000 - 2008",
					"description":["Have Designed, developed and implemented telecom value added services and enterprise software applications in Java standalone and J2EE architecture;",
									"Did object modeling, data modeling and wrote specifications in UML, even as developer-analyst;",
									"Has coordinated small software development teams;"]
				},
				{
					"employer":"Next Consulting",
					"title":"Praça Pio X, Centro, Rio de Janeiro, RJ, Brazil",
					"location":"Rio de Janeiro, Brazil",
					"dates":"1998 - 2000",
					"description":["Member of the development team in Java, Oracle PL-SQL, Sybase Powerbuilder, Unix shell scripting;"]
				},
				{
					"employer":"Journally Informatics",
					"title":"Systems Analyst",
					"location":"Avenida Rio Branco, Center, Rio de Janeiro, RJ, Brazil",
					"dates":"1997 - 1998",
					"description":["Member of the development team in Sybase Powerbuilder;"]
				},
				{
					"employer":"Att Informatics",
					"title":"Systems Programmer",
					"location":"Avenida Rio Branco, Center, Rio de Janeiro, RJ, Brazil",
					"dates":"1996 - 1997",
					"description":["Member of the development team in Sybase Powerbuilder;"]
				},
				{
					"employer":"DSI Informatics",
					"title":"Trainee",
					"location":"Rua Mariz e Barros, Maracanã, Rio de Janeiro, RJ, Brazil",
					"dates":"1995 - 1996",
					"description":["Member of the systems support team;"]
				}
			],
	"display": function(aWork){
		for (jobsIndex in aWork.jobs){
				$("#workExperience").append(HTMLworkStart);
				var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", aWork.jobs[jobsIndex].employer);
				var formattedWorkTitle = HTMLworkTitle.replace("%data%", aWork.jobs[jobsIndex].title);
				$(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
				var formattedWorkDates = HTMLworkDates.replace("%data%", aWork.jobs[jobsIndex].dates);
				$(".work-entry:last").append(formattedWorkDates);
				var formattedWorkLocation = HTMLworkLocation.replace("%data%", aWork.jobs[jobsIndex].location);
				$(".work-entry:last").append(formattedWorkLocation);
				for (descriptionIndex in aWork.jobs[jobsIndex].description){
								var HTMLworkDescriptionItemlocal = HTMLworkDescriptionItem;
								var formattedWorkDescriptionItem = HTMLworkDescriptionItemlocal.replace("%data%", aWork.jobs[jobsIndex].description[descriptionIndex]);
								$(".work-entry:last").append(formattedWorkDescriptionItem);
				}
		}
}
}

var project =
{
	"projects": [
					{
					"title":"NRI- National Register of Insurance Claims",
					"dates":"2010-future",
					"customer":"National Confederation of Insurance Companies",
					"description":"The RNIc has been used by insurance companies both in accepting risks, as in claims regulations, as it enables cross-checks in its broad base records. Its architecture includes a Java J2EE web-application, several webservices interfaces for consulting and feeding the system, batch processes, periodic reports and interfaces with the official government databases. Activities being performed are: web interface and batch development; problem resolution through system programming; customer incident investigation, analysis and resolution; troubleshooting with system production; deployment of application upgrades and fixes and validation tests.",
					"images": ["images/rns1.png", "images/rns2.png"]
					},
					{
						"title":"Telecom Italia Mobile (TIM) Short Message Service Center platform integration to MJV's Middleware",
						"dates":"2008-2010",
						"customer":"MJV Technology and Innovation",
						"description":"Design and development of a daemon that connects to the carrier's Short Message Service Center (SMSC) to engage in the sending and/or receiving of SMS messages enabling the carrier partners to use text message interativity in service applications for end-users through MJV's software infrastructure.",
						"images":["images/mjv1.png"]
					},
					{
						"title":"Carrier Portal for Mobile Customers",
						"dates":"2000-2008",
						"customer":"Vivo Mobile Carrier",
						"description":"'My Mobile Vivo' is a self-service portal on the Internet. In it, customers can query the information of their accounts and Vivo products in a fast and secure way, on any computer. Analysis, design and programming of mobile Value-Added Services integrated with the portal, portal integration to third-party parterns systems, involving mobile text and multimidia messages, phone web browsing, game and phone apps downloading, and development of charging interfaces to billing.",
						"images":["images/vivo1.png"]
					},
					{
						"title":"Renegotiation Card System and the Financing Contract Renegotiation Campaign",
						"dates":"1998-2000",
						"customer":"BBM bank",
						"description":"Systems to offer the defaulting customers new payment terms in loan agreements.",
						"images":[]
					},
					{
						"title":"Control and Maintenance System of Airplane Components",
						"dates":"1997-1998",
						"customer":"Rio-Sul Regional Air Services",
						"description":"Inventory control and control of use for parts and components of aircraft subject to replacement and maintenance.",
						"images":[]
					},
					{
						"title":"Purchase Order System and the Supply Center System",
						"dates":"1996-1997",
						"customer":"Foundation Institute Oswaldo Cruz - FIOCRUZ",
						"description":"Purchase order and inventory control for the Campus Administration Head Office at FIOCRUZ.",
						"images":[]
					}
	],
	"display": function(aProject) {
		for (projectsIndex in aProject.projects){
				$("#projects").append(HTMLprojectStart);
				var formattedProjectTitle = HTMLprojectTitle.replace("%data%", aProject.projects[projectsIndex].title);
				$(".project-entry:last").append(formattedProjectTitle);
				var formattedProjectDates = HTMLprojectDates.replace("%data%", aProject.projects[projectsIndex].dates);
				$(".project-entry:last").append(formattedProjectDates);
				var formattedProjectCustomer = HTMLprojectCustomer.replace("%data%", aProject.projects[projectsIndex].customer);
				$(".project-entry:last").append(formattedProjectCustomer);
				$(".project-entry:last").append(HTMLprojectImageStart);
				for (imagesIndex in aProject.projects[projectsIndex].images){
							var formattedProjectImage = HTMLprojectImage.replace("%data%", aProject.projects[projectsIndex].images[imagesIndex]);
							$(".projectImagesItem:last").append(formattedProjectImage);
				}
				var formattedProjectDescription = HTMLprojectDescription.replace("%data%", aProject.projects[projectsIndex].description);
				$(".project-entry:last").append(formattedProjectDescription);
		}
}
}

var education =
{
	"schools": [
	{
		"name": "Estácio de Sá University",
		"location": "(Rio de Janeiro, Brazil)",
		"degree": "BA degree",
		"majors": ["Information Systems"],
		"dates": "2015 - future",
		"url": "http://www.estacio.br"
	},
	{
		"name": "UERJ - University of the State of Rio de Janeiro",
		"location": "(Rio de Janeiro, Brazil)",
		"degree": "BA degree",
		"majors": ["Information Technology"],
		"dates": "2000 - 2004 (not completed)",
		"url": "http://www.uerj.br"
	}
	],
	"onlineCourses": [
	{
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"date": "2014 - future",
		"description": " Udacity created the Front-End Web Developer Nanodegree through close work with industry partners - like AT&T, Google and Cloudera - who are hiring web developers, and with industry experts.",
		"url": "https://www.udacity.com/nanodegree"
	}
	],
	"certifications": [
	{
		"title": "IBM CERTIFIED SOLUTION DESIGNER - OBJECT ORIENTED ANALYSIS AND DESIGN",
		"corporation": "International Business Machines Corporation (IBM)",
		"date": "2004",
		"description": "The Solution Developer designer is expected to be able to conceive and describe the static and the dynamic aspects of software systems, making use of all UML diagram types.",
		"url": "http://www-03.ibm.com/certify/certs/38006003.shtml"
	}
	],
	"display": function(aEducation){
		for (schoolsIndex in aEducation.schools){
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", aEducation.schools[schoolsIndex].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", aEducation.schools[schoolsIndex].degree);
			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", aEducation.schools[schoolsIndex].dates);
			$(".education-entry:last").append(formattedSchoolDates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", aEducation.schools[schoolsIndex].location);
			$(".education-entry:last").append(formattedSchoolLocation);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", aEducation.schools[schoolsIndex].majors);
			$(".education-entry:last").append(formattedSchoolMajor);
		}
		for (onlineCoursesIndex in aEducation.onlineCourses){
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", aEducation.onlineCourses[onlineCoursesIndex].title);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", aEducation.onlineCourses[onlineCoursesIndex].school);
				$(".education-entry:last").append(formattedOnlineSchool + formattedOnlineTitle);
				var formattedOnlineDate = HTMLonlineDates.replace("%data%", aEducation.onlineCourses[onlineCoursesIndex].date);
				$(".education-entry:last").append(formattedOnlineDate);
				var formattedOnlineUrl = HTMLonlineURL.replace("%data%", aEducation.onlineCourses[onlineCoursesIndex].url);
				$(".education-entry:last").append(formattedOnlineUrl);
				var formattedOnlineDescription = HTMLonlineDescription.replace("%data%", aEducation.onlineCourses[onlineCoursesIndex].description);
				$(".education-entry:last").append(formattedOnlineDescription);
		}
		for (certificationsIndex in aEducation.certifications){
				$("#certifications").append(HTMLcertificationStart);
				var formattedCertificationTitle = HTMLcertificationTitle.replace("%data%", aEducation.certifications[certificationsIndex].title);
				$(".certification-entry").append(formattedCertificationTitle);
				var formattedCertificationDate = HTMLcertificationDate.replace("%data%", aEducation.certifications[certificationsIndex].date);
				$(".certification-entry").append(formattedCertificationDate);
				var formattedCertificationUrl = HTMLcertificationUrl.replace("%data%",  aEducation.certifications[certificationsIndex].url);
				$(".certification-entry").append(formattedCertificationUrl);
				var formattedCertificationDescription = HTMLcertificationDescription.replace("%data%", aEducation.certifications[certificationsIndex].description);
				$(".certification-entry").append(formattedCertificationDescription);
		}
}
}

bio.display(bio);

work.display(work);

project.display(project);

education.display(education);

$("#mapDiv").append(googleMap);

/*
Lesson 2  - Flow Control > Internationalize Names Quiz
*/
function inName() {
    var finalName = bio.name;
    // Catch the first name
    // Catch the last name

     var arrayOfName = finalName.split(" ");

     var firstName = arrayOfName[0];
     var lastName = arrayOfName[1];

    console.log("firstName= [" + firstName + "]");
    console.log("lastName= [" + lastName + "]");

    // Convert the first to lower case
    var firstLetter = firstName.substr(0, 1);
    firstLetter = firstLetter.toUpperCase();
    console.log("firstLetter= [" + firstLetter + "]");
    var remaining = firstName.substr(1, firstName.length - 1);
    remaining = remaining.toLowerCase();
    console.log("remaining= [" + remaining + "]");
    var convertedFirstName = firstLetter + remaining;
    console.log("convertedFirstName= [" + convertedFirstName + "]");
    // Capitalize the first letter

    // Capitalize the last name
    var capitalizedLastName = lastName.toUpperCase();

    finalName = convertedFirstName + " " + capitalizedLastName;

    console.log("finalName= [" + finalName + "]");

    // Don't delete this line!
    return finalName;
}

// Commented
//$('#main').append(internationalizeButton);

/*
Lesson 2  - Flow Control > Collecting Click Locations
*/

$(document).click(function(loc){
		var x = loc.pageX;
		var y = loc.pageY;
		logClicks(x, y);
});
