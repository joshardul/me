// Education helpers

// Class objects
var ahs_classes = [{}];
var rpi_classes = [{}];
ahs_classes.pop(); // Can't figure out how to make this array know it is an array of objects without this line
rpi_classes.pop(); // Can't figure out how to make this array know it is an array of objects without this line

// AP Computer Science Principles
var ap_cs_principles =
{
    name: "AP Computer Science Principles",
    code: "MA987",
    date_taken: "2018-2019",
    description: "Introductions to data structures, algorithm analysis (sorting, recursion, etc.), non-static websites using Flask framework, and database queries, culminating an an AP exam (AP Computer Science Principles). Language(s): C, Python, HTML, CSS, SQL."
};
ahs_classes.push(ap_cs_principles);

// AP Computer Science Java
var ap_cs_java =
{
    name: "AP Computer Science Java",
    code: "MA977",
    date_taken: "2018-2019",
    description: "Programming concepts such as object-oriented programming, loops, logic gates, sorting algorithms, etc., culminating in an AP exam (AP Computer Science A). Language(s): Java."
};
ahs_classes.push(ap_cs_java);

// AP Physics C
var ap_physics_c =
{
    name: "AP Physics C",
    code: "SC467",
    date_taken: "2018-2019",
    description: "Applying calculus to physics concepts and proofs, both in mechanics and electricity and magnetism, concluding in two AP exams (AP Physics C: Mechanics and AP Physics C: Electricity and Magnetism)."
};
ahs_classes.push(ap_physics_c);

// AP Calculus BC
var ap_calculus_bc =
{
    name: "AP Calculus BC",
    code: "MA737",
    date_taken: "2018-2019",
    description: "Calculus concepts that would span Calculus I and II collge courses, such as functions, limits, continuity, derivatives (explicit, implicit), related rates, integrals (definite, indefinite), polar coordinates, parametric equations, infinite sequences and series, and vectors, culminating in an AP exam (AP Calculus BC)."
};
ahs_classes.push(ap_calculus_bc);

// AP Physics 1
var ap_physics_1 =
{
    name: "AP Physics 1",
    code: "SC447",
    date_taken: "2017-2018",
    description: "Algebra-based introduction to physics concepts in both mechanics and electricity, ending with an AP exam (AP Physics 1)."
};
ahs_classes.push(ap_physics_1);

// AP English Language and Composition
var ap_lang =
{
    name: "AP English Language and Composition",
    code: "EN407",
    date_taken: "2017-2018",
    description: "Understanding rhetorical choices and utilizing those strategies, as well as synthesizing information from a multitude of sources, to make effective argument in writing, culminating in an AP exam (AP English Language and Composition)."
};
ahs_classes.push(ap_lang);

// AP Spanish Language and Culture
var ap_spanish =
{
    name: "AP Spanish Language and Culture",
    code: "WL187",
    date_taken: "2017-2018",
    description: "Culmination to Spanish curriculum at Andover High School with advanced and extensive writing, reading, and speaking practice. Ended with AP exam (AP Spanish Language and Culture)."
};
ahs_classes.push(ap_spanish);

// Machine Learning from Data
var ml_from_data =
{
    name: "Machine Learning from Data",
    code: "CSCI 4100",
    date_taken: "Fall 2021",
    description: "Introduction to the theory of machine learning (What is learning? Is learning feasible? How can we do it? How can we do it well?) and the techniques: linear models, non-linear transforms, regularization to prevent overfitting, validation, similarity based methods (nearest neighbor, radial basis functions), neural networks, support vector machines, and the kernel trick. Assignments along the way included implementing all of these techniques."
};
rpi_classes.push(ml_from_data);

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
var lin_alg =
{
    name: "Linear Algebra",
    code: "MATH 4100",
    date_taken: "Spring 2020",
    description: "Theory underlying vector spaces, algebra of subspaces, bases, linear transformations, eigen-values/vectors, etc."
};
rpi_classes.push(lin_alg);

// Introduction to Artificial Intelligence
var intro_to_ai =
{
    name: "Introduction to Artificial Intelligence",
    code: "CSCI 4150",
    date_taken: "Spring 2021",
    description: "Introduction to artificial intelligence and machine learning concepts including uninformed/informed search, adversarial games, expectimax search, Bayesian networks, Markov Decision Processes, reinforcement learning, Hidden Markov Models, social choice, game theory, naive bayes, and perceptrons."
};
rpi_classes.push(intro_to_ai);

// Graph Theory
var graph_theory =
{
    name: "Graph Theory",
    code: "CSCI 4260",
    date_taken: "Spring 2021",
    description: "Fundamental concepts and methods of graph theory and its applications to computing and the social and natural sciences such as graphs as models, representation of graphs, trees, distances, matchings, connectivity, flows in networks, graph colorings, Hamiltonian cycles, traveling salesman problem, planarity."
};
rpi_classes.push(graph_theory);

// Programming for Cognitive Science and Artificial Intelligence
var prog_cog_sci_ai = 
{
    name: "Programming for Cognitive Science and Artificial Intelligence",
    code: "COGS 4410",
    date_taken: "Fall 2021",
    description: "Brief overview of programming for data science, machine learning, artificial intelligence, and cognitive science applications in Python using packages such as pandas, NumPy, PyTorch, scikit-learn. Topics included exploratory data analysis, data preprocessing, linear regression, probability/statistics, logistic regression, linear algebra, neural networks, support vector machines, model selection, naive Bayes, ensemble methods, clustering, deep learning, convolutional neural networks, residual networks, recurrent neural networks, generative adversarial networks, and natural language processing. Language(s): Python."
};
rpi_classes.push(prog_cog_sci_ai);

// Data Science
var data_sci = 
{
    name: "Data Science",
    code: "CSCI 4350",
    date_taken: "Fall 2021",
    description: "Discussion of data management/science best practices, and application to an actual semester-long data science project."
};
rpi_classes.push(data_sci);

// Programming Languages
var prog_lang = 
{
    name: "Programming Languages",
    code: "CSCI 4430",
    date_taken: "Fall 2020",
    description: "Study of important concepts in current programming lanugages including language processing, the role of abstraction, various programming paradigms, and formal language definition. Language(s): Prolog, Scheme, Haskell, Java, Python."
};
rpi_classes.push(prog_lang);

// Foundations of Computer Science
var focs =
{
    name: "Foundations of Computer Science",
    code: "CSCI 2200",
    date_taken: "Spring 2020",
    description: "Overview of discrete mathematics (set therory, combinatoics, probability, automata theory), formal reasoning, and proof techniques – mathematical and theoretical tools for computer science."
};
rpi_classes.push(focs);

// Operating Systems
var opsys =
{
    name: "Operating Systems",
    code: "CSCI 4210",
    date_taken: "Spring 2021",
    description: "Various operating systems topics including I/O programming, concurrent processes and synchronization problems, process management and scheduling of processes, virtual memory management, device management, file systems, deadlock problems, system calls, interprocess communication, and network programming."
};
rpi_classes.push(opsys);

// Software Design and Documentation
var sdd = 
{
    name: "Software Design and Documentation",
    code: "CSCI 4440",
    date_taken: "Fall 2020",
    description: "Project-based course following the phases of developing software including specification, software architecture, user interfaces, and documentation, with an emphasis on object-oriented design."
};
rpi_classes.push(sdd);

// Principles of Software
var psoft =
{
    name: "Principles of Software",
    code: "CSCI 2600",
    date_taken: "Spring 2021",
    description: "Study of important concepts in software design, implementation, and testing. Topics include specification, abstraction with classes, design principles and patterns, testing, refactoring, and the software development process, with an overarching goal of the course is for students to learn how to write correct and maintainable software."
};
rpi_classes.push(psoft);

// Computer Organization
var comporg =
{
    name: "Computer Organization",
    code: "CSCI 2500",
    date_taken: "Spring 2020",
    description: "Introductions to low-level computer architecture/organization, assembler language, operating systems. Language(s): C, MIPS (assembly)."
};
rpi_classes.push(comporg);

// Managerial Finance
var finance =
{
    name: "Managerial Finance",
    code: "MGMT 2320",
    date_taken: "Fall 2021",
    description: "Introduction to corporate financial analysis and decision making, covering financial statement analysis, valuation principles, risk and return analysis, working capital management, capital budgeting, cost of capital, capital structure, and dividend policy."
};
rpi_classes.push(finance);

// Financial Accounting
var finaccting =
{
    name: "Financial Accounting",
    code: "MGMT 2300",
    date_taken: "Fall 2020",
    description: "Introduction to basic accounting concepts, financial statements, and standards. Topics include balance sheets, debits, credits, transactions, journal entries, accounts, income statements, inventories, depreciation, assets, liabilities, equity, statements of cash flows, and ratio analysis."
};
rpi_classes.push(finaccting);

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
        "National Honors Society",
        "Top 10% of a 446-member graduating class"
    ],
    courses: ahs_classes,
    catalog: "http://www.aps1.net/DocumentCenter/View/7804/Program-of-Studies?bidId="
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
    gpa: "3.84",
    logo:
    {
        name: "rpi.png",
        alt: "The RPI logo",
        dimensions: "height=\"50px\" width=\"50px\""
    },
    details:
    [
        "Dean's Honor List",
        "Upsilon Pi Epsilon (UPE) (Computer Science Honor Society)",
        "Additional minor in Management (business)"
    ],
    courses: rpi_classes,
    catalog: "http://catalog.rpi.edu"
};
schools.push(rpi);

// HTML elements
var school_section = "<div class=\"uk-width-1-2@m school-section\"><img alt=\"%logo_alt%\" src=\"assets/images/%logo%\" %logo_dimensions% class=\"center-block\" style=\"margin-bottom: -20px;\"><h4 class=\"uk-text-center uk-margin-top-remove\">%name% <br><small>%degree%<br>%location%</small><br><span class=\"bg-secondary uk-label\" style=\"font-size: 18px;\">%grad_year%</span></h4><p class=\"uk-text-center\"><b>GPA:</b> %gpa%<br>%additional_details%</p><div uk-grid><div class=\"uk-width-1-6\"><p><b>Notable courses</b><a class=\"uk-button uk-button-text\" href=\"%catalog%\">Catalog</a></p></div><div class=\"uk-width-5-6\"><dl class=\"uk-description-list uk-description-list-divider\" id=\"%id%-top-three\"></dl><button uk-toggle=\"target: #%id%-notable\" type=\"button\" class=\"uk-button uk-button-default uk-align-center\">See more</button></div></div></div>";
var course_block = "<dt><span class=\"content-next-to-label\">%name%</span> <span class=\"uk-label uk-label-custom\">%code%</span></dt><dd><span style=\"color: #bdbdbd; font-style: italic; font-size: 12px; padding-top: 3px;\">Taken %date_taken%</span><br>%description%</dd>";
var school_modal = "<div id=\"%id%-notable\" uk-modal><div class=\"uk-modal-dialog uk-modal-body\"><h3 class=\"light\">%abbreviation% Notable Courses <a class=\"uk-button uk-button-text\" href=\"%catalog%\">Catalog</a><a uk-icon=\"icon: close; ratio: 1.5\" class=\"uk-align-right uk-modal-close uk-icon-link\"></a></h3><div uk-grid=\"masonry: true\" id=\"%id%-notable-list\"></div></div></div>";
var course_modal_block = "<div class=\"uk-width-1-2@m\"><dl class=\"uk-description-list uk-description-list-divider\">%course_block%</dl></div>"