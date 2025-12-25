// Skills helpers

// Can't figure out how to make this array know it is an array of objects without these two lines
var skill_types = [{}];
skill_types.pop();

// Technical
skill_types.push({
    filter: "technical",
    name: "Technical",
    text_color: "primary",
    skills:
    [
        "Python (pandas, NumPy, PyTorch, scikit-learn, OpenCV)",
        "C",
        "C++ (Qt framework)",
        "Java (JUnit framework)",
        "SQL",
        "Swift",
        "HTML",
        "CSS",
        "JavaScript",
        "Git",
        "Perforce",
        "Prolog",
        "Scheme",
        "Haskell",
        "data structures",
        "object-oriented design",
        "linear algebra",
        "discrete mathematics",
        "computer architecture",
        "algorithms",
        "software design patterns",
        "database systems",
        "Microsoft Office",
        "MacOS",
        "Linux",
        "Windows",
        "LaTeX",
        "Agile project planning"
    ]
});

// Soft
skill_types.push({
    filter: "soft",
    name: "Soft",
    text_color: "secondary",
    skills:
    [
        "writing",
        "organization",
        "team leadership",
        "communication",
        "public speaking",
        "teamwork"
    ]
});

// Languages
skill_types.push({
    filter: "language",
    name: "Languages",
    text_color: "tertiary",
    skills:
    [
        "English",
        "Spanish",
        "Marathi"
    ]
});

// TODO: update skills with skills from latest version of resume (and upload said resume)

// HTML elements
var type_filter_control = "<li uk-filter-control=\"[data-skill-type=\'%filter%\']\"><a href=\"#\">%name%</a></li>";
var skill_chip = "<li data-skill-type=\"%type%\"><span class=\"chip text-%text-color%\">%skill%</span></li>"