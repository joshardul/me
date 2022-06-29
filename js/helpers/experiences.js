// Experiences helpers

// Experiences objects
var experiences = [{}];
experiences.pop(); // Can't figure out how to make this array know it is an array of objects without this line

// Konjoian Education Center
var kec =
{
    id: "kec",
    link_text: "KEC",
    name: "Konjoian Education Center",
    location: "Andover, MA (Now located in North Andover, MA)",
    start_date: "Sep 2016",
    end_date: "Nov 2016",
    position: "Intern",
    description:
    [
        "Gathered requirements, designed and built the center’s website: <a href=\"http://www.konjoianeducationcenter.com/\">www.konjoianeducationcenter.com</a>",
        "Worked with business manager to implement new technologies for the company, such as email and online scheduling, and taught the staff how to use these technologies"
    ]
};
experiences.push(kec);

// IAMV
var iamv =
{
    id: "iamv",
    link_text: "IAMV",
    name: "Indian Association of Merrimack Valley",
    location: "MA",
    start_date: "Jul 2017",
    end_date: "Jul 2017",
    position: "Requirements Consultant: voice of customer (volunteer)",
    description:
    [
        "Interviewed the various board members of the Indian Association of Merrimack Valley (IAMV), gathering requirements and feedback for a beta website (<a href=\"http://iamv.org/\">iamv.org</a>) for the organization to later relay that information to an overseas development team"
    ]
};
experiences.push(iamv);

// RSM
var rsm =
{
    id: "rsm",
    link_text: "RSM",
    name: "Russian School of Mathematics",
    location: "Andover, MA",
    start_date: "Sep 2017",
    end_date: "June 2019",
    position: "Tutor",
    description:
    [
        "Tutored students from grades 5-10 in mathematics by helping with math homework and concepts"
    ]
};
experiences.push(rsm);

// UNH Tech Camp
var unhtechcamp =
{
    id: "unhtechcamp",
    link_text: "UNH Tech Camp",
    name: "University of New Hampshire Tech Camp",
    location: "Durham, NH",
    start_date: "Jul 2019",
    end_date: "Jul 2019",
    position: "Camp Counselor (day and night)",
    description:
    [
        "Counseled students (grades 8-12) at a STEM camp at the University of New Hampshire",
        "Aided students in various projects, including introductions to programming"
    ]
};
experiences.push(unhtechcamp);

// TYE
var tye =
{
    id: "tye",
    link_text: "TYE",
    name: "TiE Boston Young Entrepreneurs",
    location: "Boston, MA",
    start_date: "Sep 2017",
    end_date: "Apr 2018",
    position: "CTO of team of 5",
    description:
    [
        "Attended meetings every other Saturday from September 2017 to April 2018 culminating in a business plan competition judged by a panel of venture capitalists",
        "Learned from real-world entrepreneurs about various aspects of running a startup (research, marketing, finance, prototyping, presentation, teamwork, and other interpersonal skills)",
        "Conceived, designed, and proposed, with early prototypes, a software to automate recommendations for teachers that suggest specific extra-help content catered to individual student needs"
    ]
};
experiences.push(tye);

// Syntax Solutions
var ss =
{
    id: "ss",
    link_text: "Syntax Solutions",
    name: "Syntax Solutions",
    location: "Andover, MA",
    start_date: "Nov 2015",
    end_date: "Jul 2019",
    position: "Co-founder/Web-developer",
    description:
    [
        "Co-founded a business to address growing need for various local businesses to build an online presence",
        "Portfolio of multiple, completed projects available at <a href=\"http://syntax-solutions.xyz/\">syntax-solutions.xyz</a>"
    ]
};
experiences.push(ss);

// ALAC
var alac =
{
    id: "alac",
    link_text: "ALAC",
    name: "Rensselaer Advising and Learning Assistance Center",
    location: "Troy, NY",
    start_date: "Feb 2020",
    end_date: "May 2020",
    position: "Tutor",
    description:
    [
        "Tutored and provided homework help to students in Data Structures course at RPI"
    ]
};
experiences.push(alac);

// Cadence
var cadence =
{
    id: "cadence",
    link_text: "Cadence",
    name: "Cadence Design Systems",
    location: "Burlington, MA",
    start_date: "May 2020",
    end_date: "Aug 2020",
    position: "Software Engineering Intern",
    description:
    [
        "Worked on feature development for flagship Allegro chip design layout software"
    ]
};
experiences.push(cadence);

// Amazon internship
var amazon_intern =
{
    id: "amazon_intern",
    link_text: "AWS (internship)",
    name: "Amazon Web Services",
    location: "Boston, MA",
    start_date: "May 2021",
    end_date: "Aug 2021",
    position: "Software Development Engineer Intern",
    description:
    [
        "Worked as a part of the Amazon Web Services Elastic File System team"
    ]
};
experiences.push(amazon_intern);

// Seeking position message
var seeking_position_msg = "Seeking full-time software development position starting summer 2022";
var seeking_position = false;

// HTML elements
var experience_link = "<li><a href=\"#%id%\">%link_text%</a></li>";
var experience_option = "<option value=\"%link_text%\" data-show=\".%id%-mobile-card\">%link_text%</option>";
var experience_card = "<div class=\"uk-card uk-card-default\" id=\"%id%\"><div class=\"uk-card-header\"><h3 class=\"uk-card-title uk-margin-remove-bottom text-primary\">%name%</h3><p style=\"font-size: 15px;\" class=\"uk-text-meta uk-margin-remove-top\">%location% | %dates% | <i>%position%</i></p></div><div class=\"uk-card-body\" style=\"padding-top: 15px;\"><ul>%description%</ul></div></div>";