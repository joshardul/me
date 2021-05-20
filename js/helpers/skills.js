// Skills helpers

// Skill type objects
var skill_types = [{}];
skill_types.pop(); // Can't figure out how to make this array know it is an array of objects without this line

// Technical
var technical =
{
    filter: "technical",
    name: "Technical",
    skills:
    [
        "Python",
        "C",
        "C++",
        "Java",
        "JUnit",
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
        "Microsoft Office",
        "MacOS",
        "Linux",
        "Windows",
        "LaTeX",
        "Agile project planning"
    ]
};
skill_types.push(technical);

// Soft
var soft =
{
    filter: "soft",
    name: "Soft",
    skills:
    [
        "writing",
        "organization",
        "team leadership",
        "communication",
        "public speaking",
        "teamwork"
    ]
};
skill_types.push(soft);

// Languages
var languages =
{
    filter: "language",
    name: "Languages",
    skills:
    [
        "English",
        "Spanish",
        "Marathi"
    ]
};
skill_types.push(languages);


// HTML elements
var type_filter_control = "<li uk-filter-control=\"[data-skill-type=\'%filter%\']\"><a href=\"#\">%name%</a></li>";
var skill_chip = "<li data-skill-type=\"%type%\"><span class=\"chip text-primary\">%skill%</span></li>"