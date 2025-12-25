// Projects helpers

// Projects objects
var projects = [{}];
projects.pop(); // Can't figure out how to make this array know it is an array of objects without this line

// 7PlusH
projects.push({
    id: "sevenplush",
    name: "7PlusH",
    start_date: "Jul 2018",
    end_date: "Jul 2018",
    links:
    [
        {
            icon: "github",
            link: "https://github.com/joshardul/sevenplush",
            title: "Github repo"
        }
    ],
    slider_width: "1-2",
    images:
    [
        {
            name: "home.png",
            alt: "A screenshot of the homepage of my 7PlusH iOS app"
        },
        {
            name: "scheduleview.png",
            alt: "A screenshot of the schedule page of my 7PlusH iOS app"
        },
        {
            name: "help.png",
            alt: "A screenshot of the help page of my 7PlusH iOS app"
        }
    ],
    description: "In the fall of 2017, Andover High School implemented a new block schedule known as 7+H. With 8 days, 7 classes, and 1 enrichment period, students were having difficulty keeping track of their schedule. While there was an Android app, few people knew about it and most students were iOS users. Many students ended up taking screenshots of their schedule and saving them as their wallpapers. This was a quite ineffective method – in order to fit the enter 8-day cyle on the screen, the font size had to be very small, and the hallways were filled with students squinting to look at their next class. Having experienced their struggle, I began working on an iOS app, written in Swift. Students login to the school grades portal and the app, mindful of privacy, only stores the student’s current schedule.",
    tags:
    [
        "Swift",
        "Xcode"
    ]
});

// CourseHub
projects.push({
    id: "coursehub",
    name: "CourseHub",
    start_date: "Oct 2019",
    end_date: "Oct 2019",
    links:
    [
        {
            icon: "github",
            link: "https://github.com/ashwinc12/CourseHub",
            title: "Github repo"
        },
        {
            icon: "comment",
            link: "https://devpost.com/software/coursehub",
            title: "Devpost page"
        },
        {
            icon: "link",
            link: "https://thecoursehub.herokuapp.com/",
            title: "Rudimentary prototype"
        }
    ],
    slider_width: "2-3",
    images:
    [
        {
            name: "home.png",
            alt: "A screenshot of the homepage of CourseHub (a project for a hackathon)"
        },
        {
            name: "home(form).png",
            alt: "A screenshot of the homepage, with the form filled out, of CourseHub (a project for a hackathon)"
        },
        {
            name: "coursepage.png",
            alt: "A screenshot of the course page of CourseHub (a project for a hackathon)"
        }
    ],
    description: "CourseHub is a Flask application developed by myself and three others at a hackathon called <a href=\"https://hackrpi.com\">HackRPI</a>. The software utilizes Raspberry Pi's and cameras installed classrooms to automatically record and upload lectures to Google Cloud storage. These lectures are then accessible through a website that uses Flask to dynamically populate templates with the relevant information stored in the cloud. A rudimentary prototype can be viewed at the link. The project was submitted as a part of the \"Accessibility in Education\" theme at HackRPI.",
    tags:
    [
        "Python",
        "Flask",
        "HTML",
        "CSS",
        "Google Cloud",
        "Heroku",
        "Bootstrap",
        "Raspberry Pi"
    ]
});

// Positweet
projects.push({
    id: "positweet",
    name: "Positweet",
    start_date: "April 2019",
    end_date: "April 2019",
    links:
    [
        {
            icon: "github",
            link: "https://github.com/joshardul/twittersentiment",
            title: "GitHub repo"
        },
        {
            icon: "comment",
            link: "https://devpost.com/software/positweet-ijdez1",
            title: "Devpost page",
        }
    ],
    slider_width: "2-3",
    images:
    [
        {
            name: "homepage.jpg",
            alt: "A screenshot of the homepage of Positweet (a project for a hackathon)"
        },
        {
            name: "getstarted.jpg",
            alt: "A screenshot of the get started form of Positweet (a project for a hackathon)"
        },
        {
            name: "text_interaction.jpg",
            alt: "A screenshot of a text from Twilio for Positweet (a project for a hackathon)"
        }
    ],
    description: "Positweet is a Flask application developed by myself and three others at a hackathon called <a href=\"https://hackdartmouth.io\">HackDartmouth</a>. Positweet is a content moderation software for your Twitter feed. First, you enter your phone number and Twitter username. From then on, when someone comments on your latest Tweet, our Python script gets the comments using Twitter's public API and analyzes the sentiment using Google Cloud's natural language processing API. Depending on the preference you select in setting up the software, we will send you a text notification if it is a positive or negative comment. The project was submitted to the HackDartmouth competition for multiple categories.",
    tags:
    [
        "Python",
        "Flask",
        "HTML",
        "CSS",
        "Google Cloud",
        "Twilio",
        "Twitter",
        "Bootstrap"
    ]
});

// Arden
projects.push({
    id: "arden",
    name: "Arden",
    start_date: "Sep 2017",
    end_date: "Apr 2018",
    links: [],
    slider_width: "2-3",
    images:
    [
        {
            name: "student.png",
            alt: "A screenshot of the student homepage of a prototype of Arden which was for a business competition I participated in"
        },
        {
            name: "teacher.png",
            alt: "A screenshot of the teacher homepage of a prototype of Arden which was for a business competition I participated in"
        }
    ],
    description: "Over the course of my junior year of high school, I participated in a program called <a href=\"https://www.tye-boston.org\">TiE Young Entrepreneurs</a>, which was run by the Boston chapter of an organization called <a href=\"https://boston.tie.org\">TiE, or The Indus Entrepreneurs</a>. The program consisted of workshops every other Saturday from September 2017 to April 2018, when it culminated with a business plan competition judged by a panel of real-world venture capitalists. TiE brought in entrepreneurs to speak at these workshops about their experiences and teach us about various aspects of running a startup – research, marketing, finances, prototyping, etc. The cohort split into teams, and my team, recognizing something from our own educational experiences, created a business plan around a software to automate recommendations for teachers that would suggest specific extra help content catered to individual student needs. As CTO of a team of five, I lead the development of an early prototype of the software.",
    tags:
    [
        "HTML",
        "CSS",
        "Bootstrap"
    ]
});

// IAMV
projects.push({
    id: "iamv",
    name: "IAMV",
    start_date: "Jul 2017",
    end_date: "Jul 2017",
    links:
    [
        {
            icon: "link",
            link: "http://iamv.org",
            title: "Website"
        }
    ],
    slider_width: "2-3",
    images:
    [
        {
            name: "iamv.png",
            alt: "A screenshot of the homepage of the Indian Association of Merrimack Valley website, which I helped gather feedback about"
        }
    ],
    description: "The Indian Association of Merrimack Valley is a group of Indian families living in the area that meet a few times a year to celebrate various Indian festivals. They also have a youth group, and as part of that group I helped in the process of obtaining feedback from their members regarding a new beta website. I interviewed various board members of the organization to gather requirements and feedback, eventually relaying that information to an overseas development team.",
    tags:
    [
        "Requirements",
        "Feedback"
    ]
});

// Spoonful of Sarcasm
projects.push({
    id: "sofs",
    name: "Spoonful of Sarcasm",
    start_date: "Jan 2019",
    end_date: "Jan 2019",
    links:
    [
        {
            icon: "link",
            link: "http://spoonfulofsarcasm.tk",
            title: "Website"
        }
    ],
    slider_width: "2-3",
    images:
    [
        {
            name: "sofs.png",
            alt: "A screenshot of the homepage of a website I created for my band, Spoonful of Sarcasm"
        }
    ],
    description: "This was a simple website that I created for my band, Spoonful of Sarcasm, to help build our online presence. I made this in sophomore year of high school, originally as a project for a web development class, using a CSS and JavaScript framework called <a href=\"https://materializecss.com\">MaterializeCSS</a>. It is based off of Google's Material Design techniques.",
    tags:
    [
        "HTML",
        "CSS",
        "Heroku",
        "MaterializeCSS"
    ]
});

// HTML elements
var project_card = "<div class=\"uk-width-1-2@m\"><div class=\"uk-card uk-card-default uk-flex uk-flex-center\"><div class=\"uk-card-body\"><h3>%name% <span style=\"font-size: 15px\" class=\"uk-text-muted\">%dates%</span><span class=\"uk-align-right text-dark\" style=\"position: relative; bottom: 2px;\">%icons%</span></h3><div uk-slider=\"center: true\" style=\"width: 100%\"><div class=\"uk-position-relative uk-visible-toggle uk-light\" tabindex=\"-1\"><ul class=\"uk-slider-items uk-child-width-%slider_width%@s uk-grid\" id=\"%id%-slider\"></ul></div><ul class=\"uk-slider-nav uk-dotnav uk-flex-center uk-margin\"></ul></div><p class=\"indent\">%description%</p><div class=\"uk-text-center\">%tags%</div></div></div>%extra%</div>";
var project_icon = "<a uk-icon=\"icon: %icon%; ratio: 1.3\" class=\"text-dark\" href=\"%link%\" uk-tooltip=\"title: %icon_title%; pos: top\"></a>";
var project_slider_item = "<li><img class=\"materialboxed\" alt=\"%alt%\" src=\"assets/images/projects/%folder%/%name%\"></li>"
var project_tag = "<span class=\"uk-label bg-secondary\">%name%</span>";
var questions_card = "<div class=\"uk-card uk-card-default uk-flex uk-flex-center uk-grid-item-match\" style=\"margin-top: 30px;\"><div class=\"uk-card-body\"><h5 class=\"uk-text-center text-dark\">If you have questions regarding any of my projects, or you see anything that interests you, feel free to <a href=\"#\" uk-switcher-item=\"7\">contact me</a>.</h5></div></div>";