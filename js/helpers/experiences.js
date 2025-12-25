// Experiences helpers

// Can't figure out how to make this array know it is an array of objects without these two lines
var experiences = [{}];
experiences.pop();

// Konjoian Education Center
experiences.push({
    id: "kec",
    link_text: "KEC",
    name: "Konjoian Education Center",
    location: "Andover, MA",
    positions:
    [
        {
            title: "Intern",
            start_date: "Sep 2016",
            end_date: "Nov 2016"
        }
    ],
    description:
    [
        "Gathered requirements, designed and built the center’s website: <a href=\"http://www.konjoianeducationcenter.com/\">www.konjoianeducationcenter.com</a>",
        "Worked with business manager to implement new technologies for the company, such as email and online scheduling, and taught the staff how to use these technologies",
        "Now located in North Andover, MA"
    ]
});

// RSM
experiences.push({
    id: "rsm",
    link_text: "RSM",
    name: "Russian School of Mathematics",
    location: "Andover, MA",
    positions:
    [
        {
            title: "Tutor",
            start_date: "Sep 2017",
            end_date: "June 2019"
        }
    ],
    description:
    [
        "Tutored students from grades 5-10 in mathematics by helping with math homework and concepts"
    ]
});

// UNH Tech Camp
experiences.push({
    id: "unhtechcamp",
    link_text: "UNH Tech Camp",
    name: "University of New Hampshire Tech Camp",
    location: "Durham, NH",
    positions:
    [
        {
            title: "Camp Counselor (day and night)",
            start_date: "Jul 2019",
            end_date: "Jul 2019"
        }
    ],
    description:
    [
        "Counseled students (grades 8-12) at a STEM camp at the University of New Hampshire",
        "Aided students in various projects, including introductions to programming"
    ]
});

// TYE
experiences.push({
    id: "tye",
    link_text: "TYE",
    name: "TiE Boston Young Entrepreneurs",
    location: "Boston, MA",
    positions:
    [
        {
            title: "CTO of team of 5",
            start_date: "Sep 2017",
            end_date: "Apr 2018"
        }
    ],
    description:
    [
        "Attended meetings every other Saturday from September 2017 to April 2018 culminating in a business plan competition judged by a panel of venture capitalists",
        "Learned from real-world entrepreneurs about various aspects of running a startup (research, marketing, finance, prototyping, presentation, teamwork, and other interpersonal skills)",
        "Conceived, designed, and proposed, with early prototypes, a software to automate recommendations for teachers that suggest specific extra-help content catered to individual student needs"
    ]
});

// Syntax Solutions
experiences.push({
    id: "ss",
    link_text: "Syntax Solutions",
    name: "Syntax Solutions",
    location: "Andover, MA",
    positions:
    [
        {
            title: "Co-founder/Web-developer",
            start_date: "Nov 2015",
            end_date: "Jul 2019"
        }
    ],
    description:
    [
        "Co-founded a business to address growing need for various local businesses to build an online presence",
        "Business has been dissolved, so <a href=\"http://syntax-solutions.xyz/\">syntax-solutions.xyz</a> has also been taken down"
    ]
});

// ALAC
experiences.push({
    id: "alac",
    link_text: "ALAC",
    name: "Rensselaer Advising and Learning Assistance Center",
    location: "Troy, NY",
    positions:
    [
        {
            title: "Tutor",
            start_date: "Feb 2020",
            end_date: "May 2020"
        }
    ],
    description:
    [
        "Tutored and provided homework help to students in Data Structures course at RPI"
    ]
});

// Cadence
experiences.push({
    id: "cadence",
    link_text: "Cadence",
    name: "Cadence Design Systems",
    location: "Burlington, MA",
    positions:
    [
        {
            title: "Software Engineering Intern",
            start_date: "May 2020",
            end_date: "Aug 2020"
        }
    ],
    description:
    [
        "Worked on feature development for flagship Allegro chip design layout software"
    ]
});

// Amazon
experiences.push({
    id: "amazon_intern",
    link_text: "AWS EFS",
    name: "Amazon Web Services (AWS) Elastic File System (EFS)",
    location: "Boston, MA",
    positions:
    [
        {
            title: "Software Development Engineer II",
            start_date: "Oct 2024"
        },
        {
            title: "Software Development Engineer I",
            start_date: "Aug 2022",
            end_date: "Oct 2024"
        },
        {
            title: "Software Development Engineer Intern",
            start_date: "May 2021",
            end_date: "Aug 2021"
        }
    ],
    description:
    [
        // "EFS is a managed, cloud-based file system offering scalable, durable storage for AWS compute workloads",
        "Owner of the EFS Lifecycle Management feature, serving as primary point of contact for design, operations (improving throughput of large-scale data migrations between hot and cold storage through event-time tuning and follow-up code optimizations), and customer impact",
        "Serve as primary point of contact for EFS metering and billing workflows, maintaining correctness and operational stability by diagnosing and resolving production issues",
        "Act as operational lead for team-owned EFS features during events, driving root cause analysis, customer impact assessment, and long-term mitigations",
        "Authored and drove design documents for new EFS features and internal optimization initiatives, influencing technical direction and prioritization",
        "Contributed to the development and delivery of multiple EFS features and internal optimizations, including the EFS Archive storage class and a garbage collection/cost-optimization workflow",
        "Leveraged the EFS data lake to analyze customer workloads and internal system state, supporting feature and project planning, event investigations, and customer issue resolution",
        "Mentored interns and new hires, including guiding design and implementation of fault-injection testing for a new EFS feature and performance improvements to internal workflows",
        "Improved operational visibility and reduced alert noise by enhancing metrics, dashboards, automated canary workflows, and alarms for EFS subsystems"
    ]
});

// HTML elements
var experience_link = "<li><a href=\"#%id%\">%link_text%</a></li>";
var experience_option = "<option value=\"%link_text%\" data-show=\".%id%-mobile-card\">%link_text%</option>";
var experience_position_line = "<i>%title%</i> | %dates%";
var experience_card = "<div class=\"uk-card uk-card-default\" id=\"%id%\"><div class=\"uk-card-header\"><h3 class=\"uk-card-title uk-margin-remove-bottom text-primary\">%name% – <small>%location%</small></h3><p style=\"font-size: 15px;\" class=\"uk-text-meta uk-margin-remove-top\">%positions%</p></div><div class=\"uk-card-body\" style=\"padding-top: 15px;\"><ul>%description%</ul></div></div>"
