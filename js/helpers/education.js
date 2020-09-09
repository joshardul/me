// Education helpers

// Class objects
var ahs_classes = [{}];
var rpi_classes = [{}];
ahs_classes.pop(); // Can't figure out how to make this array know it is an array of objects without this line
rpi_classes.pop(); // Can't figure out how to make this array know it is an array of objects without this line

// AP Computer Science Principles
var apcsprinciples =
{
    name: "AP Computer Science Principles",
    code: "MA987",
    date_taken: "2018-2019",
    description: "Introductions to data structures, algorithm analysis (sorting, recursion, etc.), non-static websites using Flask framework, and database queries, culminating an an AP exam (AP Computer Science Principles). Language(s): C, Python, HTML, CSS, SQL."
};
ahs_classes.push(apcsprinciples);

// AP Computer Science Java
var apcsjava =
{
    name: "AP Computer Science Java",
    code: "MA977",
    date_taken: "2018-2019",
    description: "Programming concepts such as object-oriented programming, loops, logic gates, sorting algorithms, etc., culminating in an AP exam (AP Computer Science A). Language(s): Java."
};
ahs_classes.push(apcsjava);

// AP Physics C
var apphysicsc =
{
    name: "AP Physics C",
    code: "SC467",
    date_taken: "2018-2019",
    description: "Applying calculus to physics concepts and proofs, both in mechanics and electricity and magnetism, concluding in two AP exams (AP Physics C: Mechanics and AP Physics C: Electricity and Magnetism)."
};
ahs_classes.push(apphysicsc);

// AP Calculus BC
var apcalculusbc =
{
    name: "AP Calculus BC",
    code: "MA737",
    date_taken: "2018-2019",
    description: "Calculus concepts that would span Calculus I and II collge courses, such as functions, limits, continuity, derivatives (explicit, implicit), related rates, integrals (definite, indefinite), polar coordinates, parametric equations, infinite sequences and series, and vectors, culminating in an AP exam (AP Calculus BC)."
};
ahs_classes.push(apcalculusbc);

// AP Physics 1
var apphysics1 =
{
    name: "AP Physics 1",
    code: "SC447",
    date_taken: "2017-2018",
    description: "Algebra-based introduction to physics concepts in both mechanics and electricity, ending with an AP exam (AP Physics 1)."
};
ahs_classes.push(apphysics1);

// AP English Language and Composition
var aplang =
{
    name: "AP English Language and Composition",
    code: "EN407",
    date_taken: "2017-2018",
    description: "Understanding rhetorical choices and utilizing those strategies, as well as synthesizing information from a multitude of sources, to make effective argument in writing, culminating in an AP exam (AP English Language and Composition)."
};
ahs_classes.push(aplang);

// AP Spanish Language and Culture
var apspanish =
{
    name: "AP Spanish Language and Culture",
    code: "WL187",
    date_taken: "2017-2018",
    description: "Culmination to Spanish curriculum at Andover High School with advanced and extensive writing, reading, and speaking practice. Ended with AP exam (AP Spanish Language and Culture)."
};
ahs_classes.push(apspanish);

// Introduction to Algorithms
var algo =
{
    name: "Introduction to Algorithms",
    code: "CSCI 2300",
    date_taken: "Summer 2020",
    description: "Exposure to wide variety of algorithms and related topics, including graph theory, graph algorithms, greedy algorithms, divide and conquer algorithms, dynamic programming, network flow, linear programming, classes P and NP, intractability, NP-complete, genetic algorithms, and approximation algorithms."
};
rpi_classes.push(algo);

// Data Structures
var ds =
{
    name: "Data Structures",
    code: "CSCI 1200",
    date_taken: "Fall 2019",
    description: "Programming concepts such as classes, dynamic memory, pointers, data structures and their representations, algorithms, recursion. Language(s): C++."
};
rpi_classes.push(ds);

// Linear Algebra
var linalg =
{
    name: "Linear Algebra",
    code: "MATH 4100",
    date_taken: "Spring 2020",
    description: "Theory underlying vector spaces, algebra of subspaces, bases, linear transformations, eigen-values/vectors, etc."
};
rpi_classes.push(linalg);

var proglang = 
{
    name: "Programming Languages",
    code: "CSCI 4430",
    date_taken: "Fall 2020",
    description: "Study of important concepts in current programming lanugages includeing language processing, the role of abstraction, various programming paradigms, and formal language definition."
};
rpi_classes.push(proglang);

var sdd = 
{
    name: "Software Design and Documentation",
    code: "CSCI 4440",
    date_taken: "Fall 2020",
    description: "Project-based course following the phases of developing software including specification, software architecture, user interfaces, and documentation, with an emphasis on object-oriented design."
};
rpi_classes.push(sdd);

// Foundations of Computer Science
var focs =
{
    name: "Foundations of Computer Science",
    code: "CSCI 2200",
    date_taken: "Spring 2020",
    description: "Overview of discrete mathematics (set therory, combinatoics, probability, automata theory), formal reasoning, and proof techniques – mathematical and theoretical tools for computer science."
};
rpi_classes.push(focs);

// Computer Organization
var comporg =
{
    name: "Computer Organization",
    code: "CSCI 2500",
    date_taken: "Spring 2020",
    description: "Introductions to low-level computer architecture/organization, assembler language, operating systems. Language(s): C, MIPS (assembly)."
};
rpi_classes.push(comporg);

// Introduction to Management
var management =
{
    name: "Introduction to Management",
    code: "MGMT 1100",
    date_taken: "Fall 2019",
    description: "General understanding of the business world and introduction to various aspects of it, such as finance, entrepreneurship, supply chain management, strategy, marketing, etc."
};
rpi_classes.push(management);

// School objects
var schools = [{}];
schools.pop(); // Can't figure out how to make this array know it is an array of objects without this line

// Andover High School
var ahs = 
{
    id: "ahs",
    name: "Andover High School",
    abbreviation: "AHS",
    degree: "High school diploma",
    location: "Andover, MA",
    grad_year: "2019",
    gpa: "3.87 (unweighted), 4.53 (weighted)",
    logo:
    {
        name: "ahs.gif",
        alt: "The AHS logo",
        dimensions: "width=\"85px\""
    },
    details:
    [
        "Honor roll",
        "Top 10% of a 446-member graduating class"
    ],
    courses: ahs_classes,
    catalog: "http://catalog.rpi.edu"
};
schools.push(ahs);

// Rensselaer Polytechnic Institute
var rpi = 
{
    id: "rpi",
    name: "Rensselaer Polytechnic Institute",
    abbreviation: "RPI",
    degree: "Bachelors of Science, Computer Science",
    location: "Troy, NY",
    grad_year: "2022",
    gpa: "3.71",
    logo:
    {
        name: "rpi.png",
        alt: "The RPI logo",
        dimensions: "height=\"50px\" width=\"50px\""
    },
    details:
    [
        "Dean's Honor List",
        "Additional minor in Management (business)"
    ],
    courses: rpi_classes,
    catalog: "http://www.aps1.net/DocumentCenter/View/7804/Program-of-Studies?bidId="
};
schools.push(rpi);

// HTML elements
var school_section = "<div class=\"uk-width-1-2@m school-section\"><img alt=\"%logo_alt%\" src=\"assets/images/%logo%\" %logo_dimensions% class=\"center-block\" style=\"margin-bottom: -20px;\"><h4 class=\"uk-text-center uk-margin-top-remove\">%name% <br><small>%degree%<br>%location%</small><br><span class=\"bg-secondary uk-label\" style=\"font-size: 18px;\">%grad_year%</span></h4><p class=\"uk-text-center\"><b>GPA:</b> %gpa%<br>%additional_details%</p><div uk-grid><div class=\"uk-width-1-4\"><p><b class=\"uk-align-right\">Notable courses</b><a class=\"uk-align-right uk-button uk-button-text\" href=\"%catalog%\">Catalog</a></p></div><div class=\"uk-width-3-4\"><dl class=\"uk-description-list uk-description-list-divider\" id=\"%id%-top-three\"></dl><button uk-toggle=\"target: #%id%-notable\" type=\"button\" class=\"uk-button uk-button-default uk-align-center\">See more</button></div></div></div>";
var course_block = "<dt><span class=\"content-next-to-label\">%name%</span> <span class=\"uk-label uk-label-custom\">%code%</span></dt><dd><span style=\"color: #bdbdbd; font-style: italic; font-size: 12px; padding-top: 3px;\">Taken %date_taken%</span><br>%description%</dd>";
var school_modal = "<div id=\"%id%-notable\" uk-modal><div class=\"uk-modal-dialog uk-modal-body\"><h3 class=\"light\">%abbreviation% Notable Courses <a class=\"uk-button uk-button-text\" href=\"%catalog%\">Catalog</a><a uk-icon=\"icon: close; ratio: 1.5\" class=\"uk-align-right uk-modal-close uk-icon-link\"></a></h3><div uk-grid=\"masonry: true\" id=\"%id%-notable-list\"></div></div></div>";
var course_modal_block = "<div class=\"uk-width-1-2@m\"><dl class=\"uk-description-list uk-description-list-divider\">%course_block%</dl></div>"