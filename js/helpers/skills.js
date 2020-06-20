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
        "Java",
        "Swift",
        "C",
        "C++",
        "HTML",
        "CSS",
        "JavaScript",
        "Git",
        "Flask (Python framework)",
        "data structures",
        "object-oriented design",
        "Microsoft Office",
        "MacOS",
        "Linux",
        "Windows",
        "linear algebra",
        "discrete mathematics",
        "LaTeX"
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
        "project management",
        "team building",
        "project planning",
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