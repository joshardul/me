// Education helpers

// Class objects
var ahs_classes = [{}];
var rpi_classes = [{}];
ahs_classes.pop(); // Can't figure out how to make this array know it is an array of objects without this line
rpi_classes.pop(); // Can't figure out how to make this array know it is an array of objects without this line

// AP Computer Science Principles
ahs_classes.push({
    name: "AP Computer Science Principles",
    code: "MA987",
    date_taken: "2018-2019",
    description: "Introductions to data structures, algorithm analysis (sorting, recursion, etc.), non-static websites using Flask framework, and database queries, culminating an an AP exam (AP Computer Science Principles). Language(s): C, Python, HTML, CSS, SQL."
});

// AP Computer Science Java
ahs_classes.push({
    name: "AP Computer Science Java",
    code: "MA977",
    date_taken: "2018-2019",
    description: "Programming concepts such as object-oriented programming, loops, logic gates, sorting algorithms, etc., culminating in an AP exam (AP Computer Science A). Language(s): Java."
});

// AP Physics C
ahs_classes.push({
    name: "AP Physics C",
    code: "SC467",
    date_taken: "2018-2019",
    description: "Applying calculus to physics concepts and proofs, both in mechanics and electricity and magnetism, concluding in two AP exams (AP Physics C: Mechanics and AP Physics C: Electricity and Magnetism)."
});

// AP Calculus BC
ahs_classes.push({
    name: "AP Calculus BC",
    code: "MA737",
    date_taken: "2018-2019",
    description: "Calculus concepts that would span Calculus I and II collge courses, such as functions, limits, continuity, derivatives (explicit, implicit), related rates, integrals (definite, indefinite), polar coordinates, parametric equations, infinite sequences and series, and vectors, culminating in an AP exam (AP Calculus BC)."
});

// AP Physics 1
ahs_classes.push({
    name: "AP Physics 1",
    code: "SC447",
    date_taken: "2017-2018",
    description: "Algebra-based introduction to physics concepts in both mechanics and electricity, ending with an AP exam (AP Physics 1)."
});

// AP English Language and Composition
ahs_classes.push({
    name: "AP English Language and Composition",
    code: "EN407",
    date_taken: "2017-2018",
    description: "Understanding rhetorical choices and utilizing those strategies, as well as synthesizing information from a multitude of sources, to make effective argument in writing, culminating in an AP exam (AP English Language and Composition)."
});

// AP Spanish Language and Culture
ahs_classes.push({
    name: "AP Spanish Language and Culture",
    code: "WL187",
    date_taken: "2017-2018",
    description: "Culmination to Spanish curriculum at Andover High School with advanced and extensive writing, reading, and speaking practice. Ended with AP exam (AP Spanish Language and Culture)."
});

// Computational Vision
rpi_classes.push({
    name: "Computational Vision",
    code: "CSCI 4270",
    date_taken: "Spring 2022",
    description: "Introduction to the problems, challenges, and application of computer vision. Topics include: camera modeling, image formation, feature extraction, object/facial recognition, image mosaic construction, stereo/three-dimensional imaging, motion, and tracking. Application of machine learning methods for computational vision (e.g. convolutional neural networks) are also studied/applied. Languages(s): Python."
});

// Machine Learning from Data
rpi_classes.push({
    name: "Machine Learning from Data",
    code: "CSCI 4100",
    date_taken: "Fall 2021",
    description: "Introduction to the theory of machine learning (What is learning? Is learning feasible? How can we do it? How can we do it well?) and the techniques: linear models, non-linear transforms, regularization to prevent overfitting, validation, similarity based methods (nearest neighbor, radial basis functions), neural networks, support vector machines, and the kernel trick. Assignments along the way included implementing all of these techniques. Languages(s): Python."
});

// Database Systems
rpi_classes.push({
    name: "Database Systems",
    code: "CSCI 4380",
    date_taken: "Spring 2022",
    description: "Discussion of modern database system practices, with an emphasis on relational systems. Topics include database design, database system architectures, SQL, normalization techniques, storage structures, query processing, concurrency control, recovery, security, and new directions of database systems (e.g. object-oriented, distributed). Language(s): SQL."
});

// Introduction to Algorithms
rpi_classes.push({
    name: "Introduction to Algorithms",
    code: "CSCI 2300",
    date_taken: "Summer 2020",
    description: "Exposure to wide variety of algorithms and related topics, including graph theory, graph algorithms, greedy algorithms, divide and conquer algorithms, dynamic programming, network flow, linear programming, classes P and NP, intractability, NP-complete, genetic algorithms, and approximation algorithms."
});

// Data Structures
rpi_classes.push({
    name: "Data Structures",
    code: "CSCI 1200",
    date_taken: "Fall 2019",
    description: "Programming concepts such as classes, dynamic memory, pointers, data structures and their representations, algorithms, recursion. Language(s): C++."
});

// Linear Algebra
rpi_classes.push({
    name: "Linear Algebra",
    code: "MATH 4100",
    date_taken: "Spring 2020",
    description: "Theory underlying vector spaces, algebra of subspaces, bases, linear transformations, eigen-values/vectors, etc."
});

// Introduction to Artificial Intelligence
rpi_classes.push({
    name: "Introduction to Artificial Intelligence",
    code: "CSCI 4150",
    date_taken: "Spring 2021",
    description: "Introduction to artificial intelligence and machine learning concepts including uninformed/informed search, adversarial games, expectimax search, Bayesian networks, Markov Decision Processes, reinforcement learning, Hidden Markov Models, social choice, game theory, naive bayes, and perceptrons."
});

// Graph Theory
rpi_classes.push({
    name: "Graph Theory",
    code: "CSCI 4260",
    date_taken: "Spring 2021",
    description: "Fundamental concepts and methods of graph theory and its applications to computing and the social and natural sciences such as graphs as models, representation of graphs, trees, distances, matchings, connectivity, flows in networks, graph colorings, Hamiltonian cycles, traveling salesman problem, planarity."
});

// Programming for Cognitive Science and Artificial Intelligence
rpi_classes.push({
    name: "Programming for Cognitive Science and Artificial Intelligence",
    code: "COGS 4410",
    date_taken: "Fall 2021",
    description: "Brief overview of programming for data science, machine learning, artificial intelligence, and cognitive science applications in Python using packages such as pandas, NumPy, PyTorch, scikit-learn. Topics included exploratory data analysis, data preprocessing, linear regression, probability/statistics, logistic regression, linear algebra, neural networks, support vector machines, model selection, naive Bayes, ensemble methods, clustering, deep learning, convolutional neural networks, residual networks, recurrent neural networks, generative adversarial networks, and natural language processing. Language(s): Python."
});

// Data Science
rpi_classes.push({
    name: "Data Science",
    code: "CSCI 4350",
    date_taken: "Fall 2021",
    description: "Discussion of data management/science best practices, and application to an actual semester-long data science project."
});

// Programming Languages
rpi_classes.push({
    name: "Programming Languages",
    code: "CSCI 4430",
    date_taken: "Fall 2020",
    description: "Study of important concepts in current programming lanugages including language processing, the role of abstraction, various programming paradigms, and formal language definition. Language(s): Prolog, Scheme, Haskell, Java, Python."
});

// Foundations of Computer Science
rpi_classes.push({
    name: "Foundations of Computer Science",
    code: "CSCI 2200",
    date_taken: "Spring 2020",
    description: "Overview of discrete mathematics (set therory, combinatoics, probability, automata theory), formal reasoning, and proof techniques – mathematical and theoretical tools for computer science."
});

// Operating Systems
rpi_classes.push({
    name: "Operating Systems",
    code: "CSCI 4210",
    date_taken: "Spring 2021",
    description: "Various operating systems topics including I/O programming, concurrent processes and synchronization problems, process management and scheduling of processes, virtual memory management, device management, file systems, deadlock problems, system calls, interprocess communication, and network programming."
});

// Software Design and Documentation
rpi_classes.push({
    name: "Software Design and Documentation",
    code: "CSCI 4440",
    date_taken: "Fall 2020",
    description: "Project-based course following the phases of developing software including specification, software architecture, user interfaces, and documentation, with an emphasis on object-oriented design."
});

// Principles of Software
rpi_classes.push({
    name: "Principles of Software",
    code: "CSCI 2600",
    date_taken: "Spring 2021",
    description: "Study of important concepts in software design, implementation, and testing. Topics include specification, abstraction with classes, design principles and patterns, testing, refactoring, and the software development process, with an overarching goal of the course is for students to learn how to write correct and maintainable software."
});

// Computer Organization
rpi_classes.push({
    name: "Computer Organization",
    code: "CSCI 2500",
    date_taken: "Spring 2020",
    description: "Introductions to low-level computer architecture/organization, assembler language, operating systems. Language(s): C, MIPS (assembly)."
});

// Introduction to Technological Entrepreneurship
rpi_classes.push({
    name: "Introduction to Technological Entrepreneurship",
    code: "MGMT 4520",
    date_taken: "Spring 2022",
    description: "An introductory course to form a understanding of the process by which an entrepreneur screens opportunities, selects an appropriate product/market target, and obtains the necessary resources for a new venture. A semester-long project of developing a busines plan for a new proposed tech company, reviews of case studies, and discussions help achieve this learning."
});

// Marketing Principles
rpi_classes.push({
    name: "Marketing Principles",
    code: "MGMT 2430",
    date_taken: "Spring 2022",
    description: "Study of basic marketing concepts, practices, terminology, and techniques for addressing marketing problems in order to build an understanding of marketing principles and the role of marketing in a business. Social consequences of marketing are also discussed."
});

// Managerial Finance
rpi_classes.push({
    name: "Managerial Finance",
    code: "MGMT 2320",
    date_taken: "Fall 2021",
    description: "Introduction to corporate financial analysis and decision making, covering financial statement analysis, valuation principles, risk and return analysis, working capital management, capital budgeting, cost of capital, capital structure, and dividend policy."
});

// Financial Accounting
rpi_classes.push({
    name: "Financial Accounting",
    code: "MGMT 2300",
    date_taken: "Fall 2020",
    description: "Introduction to basic accounting concepts, financial statements, and standards. Topics include balance sheets, debits, credits, transactions, journal entries, accounts, income statements, inventories, depreciation, assets, liabilities, equity, statements of cash flows, and ratio analysis."
});

// Introduction to Management
rpi_classes.push({
    name: "Introduction to Management",
    code: "MGMT 1100",
    date_taken: "Fall 2019",
    description: "General understanding of the business world and introduction to various aspects of it, such as finance, entrepreneurship, supply chain management, strategy, marketing, etc."
});

// School objects
var schools = [{}];
schools.pop(); // Can't figure out how to make this array know it is an array of objects without this line

// Andover High School
schools.push({
    id: "ahs",
    name: "Andover High School",
    abbreviation: "AHS",
    degree: "High School Diploma",
    location: "Andover, MA",
    link: "https://aps1.net",
    link_display_text: "aps1.net",
    grad_year: "June 2019",
    gpa: "3.87 (unweighted), 4.53 (weighted)",
    logo:
    {
        name: "ahs.gif",
        alt: "The AHS logo",
        dimensions: "width=\"85px\""
    },
    details:
    [
        "Honor Roll",
        "National Honors Society",
        "Top 10% of a 446-member graduating class"
    ],
    courses: ahs_classes,
    catalog: "http://www.aps1.net/DocumentCenter/View/7804/Program-of-Studies?bidId="
});

// Rensselaer Polytechnic Institute
schools.push({
    id: "rpi",
    name: "Rensselaer Polytechnic Institute",
    abbreviation: "RPI",
    degree: "Bachelor of Science in Computer Science",
    location: "Troy, NY",
    link: "https://www.rpi.edu",
    link_display_text: "rpi.edu",
    grad_year: "May 2022",
    gpa: "3.86",
    logo:
    {
        name: "rpi.png",
        alt: "The RPI logo",
        dimensions: "height=\"50px\" width=\"50px\""
    },
    details:
    [
        "Magna Cum Laude",
        "Dean's Honor List",
        "Upsilon Pi Epsilon (UPE)",
        "Concentration in Artificial Intelligence and Data",
        "Minor in Management"
    ],
    courses: rpi_classes,
    catalog: "http://catalog.rpi.edu"
});

// HTML elements
var school_section = "<div class=\"uk-width-1-2@m school-section\"><img alt=\"%logo_alt%\" src=\"assets/images/%logo%\" %logo_dimensions% class=\"center-block\" style=\"margin-bottom: -20px;\"><h4 class=\"uk-text-center uk-margin-top-remove\">%name% <br><small>%degree%<br>%location%</small><br><small><a href=\"%link%\">%link_display_text%</a></small><br><span class=\"bg-secondary uk-label\" style=\"font-size: 18px;\">%grad_year%</span></h4><p class=\"uk-text-center\"><b>GPA:</b> %gpa%<br>%additional_details%</p><div uk-grid><div class=\"uk-width-1-5\"><p><b>Coursework</b><a class=\"uk-button uk-button-text\" href=\"%catalog%\">Catalog</a></p></div><div class=\"uk-width-4-5\"><dl class=\"uk-description-list uk-description-list-divider\" id=\"%id%-top-three\"></dl><button uk-toggle=\"target: #%id%-notable\" type=\"button\" class=\"uk-button uk-button-default uk-align-center\">See more</button></div></div></div>";
var course_block = "<dt><span class=\"content-next-to-label\">%name%</span> <span class=\"uk-label uk-label-custom\">%code%</span></dt><dd><span style=\"color: #bdbdbd; font-style: italic; font-size: 12px; padding-top: 3px;\">Taken %date_taken%</span><br>%description%</dd>";
var school_modal = "<div id=\"%id%-notable\" uk-modal><div class=\"uk-modal-dialog uk-modal-body\"><h3 class=\"light\">%abbreviation% Notable Courses <a class=\"uk-button uk-button-text\" href=\"%catalog%\">Catalog</a><a uk-icon=\"icon: close; ratio: 1.5\" class=\"uk-align-right uk-modal-close uk-icon-link\"></a></h3><div uk-grid=\"masonry: true\" id=\"%id%-notable-list\"></div></div></div>";
var course_modal_block = "<div class=\"uk-width-1-2@m\"><dl class=\"uk-description-list uk-description-list-divider\">%course_block%</dl></div>"