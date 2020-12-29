// Activities helpers

// Activities objects
var activities = [{}];
activities.pop(); // Can't figure out how to make this array know it is an array of objects without this line

// The Polytechnic
var poly =
{
    id: "poly",
    organization: "<i>The Polytechnic</i>",
    sub_title: "school newspaper",
    description: "<i>The Polytechnic</i>, or <i>The Poly</i>, for short, is the online school newspaper of RPI, found at <a href=\"https://poly.rpi.edu\">poly.rpi.edu</a>. We help keep the student body informed of campus news by covering events, conducting interviews, and more. Additionally, staff and general public can write opinion pieces to express arguments that they feel are important. We have several departments: News, Features, Editorial/Opinion, Sports, Photo, Publicity, and Copy. Elections for voting member positions are done at the end of each semester for the following one. Joining <i>The Poly</i> has been a great decision for me. I have began to enjoy writing in recent years, but I still find that I consider other subject priorities. At a STEM school where the humanities are less emphasized, I knew I would not pursue them in a classroom setting, so I wanted to find a way to keep up my writing. <i>The Poly</i> provided me with that opportunity, as well as introduced me to a great group of people who shared my combined interest in both technology and writing. My staff page, <a href=\"https://poly.rpi.edu/staff/shardul-joshi/\">poly.rpi.edu/staff/shardul-joshi/</a>, lists all of my articles for <i>The Poly</i>.",
    positions:
    [
        {
            title: "Editorial/Opinion Editor",
            start_date: "May 2020",
            end_date: ""
        },
        {
            title: "Associate Editorial/Opinion Editor",
            start_date: "Feb 2020",
            end_date: "May 2020"
        },
        {
            title: "Editorial/Opinion Coordinator",
            start_date: "Dec 2019",
            end_date: "Feb 2020"
        },
        {
            title: "Associate News Editor",
            start_date: "Sep 2019",
            end_date: "Dec 2019"
        }
    ]
};
activities.push(poly);

// Spoonful of Sarcasm
var sofs =
{
    id: "sofs",
    organization: "Spoonful of Sarcasm",
    sub_title: "",
    description: "I have been playing guitar since 6th grade, having taken lessons from then until I left for college. In freshman year of high school, a group of friends and I decided to join an ensemble at our common music school, which was organizing these small bands and providing them space to practice and and mentor. This group of 5 grew closer over the years, and we began to play more and more often, and for more and more public audiences. We have played at the Hard Rock Cafe (Boston), Harvard Stadium, Gillette Stadium, and many open mic nights in our local area. We have also played live on WEMF Radio. Eventually, we were writing our own songs, too, and have even published a few on all major streaming services, such as <a href=\"https://open.spotify.com/artist/0tZWPXIaNA3yNrekm7xJPB?si=fxS7-iREQO2z1iU_1j3oIQ\">Spotify</a> and <a href=\"https://music.apple.com/us/artist/spoonful-of-sarcasm/1406403423\">Apple Music</a>. Learn more about us at <a href=\"http://spoonfulofsarcasm.tk\">spoonfulofsarcasm.tk</a>.",
    positions:
    [
        {
            title: "Rhythm guitarist",
            start_date: "Sep 2015",
            end_date: "Jun 2019"
        }
    ]
};
activities.push(sofs);

// Cross Country (high school)
var xc =
{
    id: "xc",
    organization: "Cross Country",
    sub_title: "high school",
    description: "In the days leading up to the start of high school, excitedly, I tried out for the freshman soccer team. With limited experience in soccer, unsurprisingly, I did not qualify for the team. In retrospect, getting cut from that team worked in my favor; two days later, crestfallen and rather reluctantly, I joined the cross-country team. When my dad dropped me off at the first practice, I fully expected to hate the sport and quit the very next day. I could not have been more wrong – I ran three miles that day and quickly became captivated with the runner’s high. Over the next four seasons, I made great friendships and found a strong comraderie in the team that I thoroughly enjoyed being a part of. I was not very good, but I kept running and was even elected captain at the end of my junior year, giving me the opportunity to do for the new freshman what previous captains had done for me.",
    positions:
    [
        {
            title: "Captain (JV &amp; Varsity)",
            start_date: "Fall 2018",
            end_date: "Fall 2018"
        },
        {
            title: "General JV team member",
            start_date: "Fall 2015, 2016, 2017",
            end_date: "Fall 2015, 2016, 2017"
        }
    ]
};
activities.push(xc);

// Computer Science Club (high school)
var csclubhs =
{
    id: "csclubhs",
    organization: "Computer Science Club",
    sub_title: "high school",
    description: "Our computer science club in high school met weekly for many various activities. Sometimes it was taking the tests for the <a href=\"http://www.acsl.org\">American Computer Science League</a> competition or preparing for them. Other times we each worked on our own computer science projects, personal or academic, helping each other with bugs. A few times we also took it upon ourselves to learn something new together, from a new language to how to tackle a certain challenge. We even spent some meetings brainstorming potential ideas for projects we would want to do sometime, and thought of the various technologies we would need to complete it. We also participated as a team in cybersecurity capture-the-flags, programming competitions, and hackathons. It was a very small club, with no leadership positions.",
    positions:
    [
        {
            title: "Member",
            start_date: "Sep 2017",
            end_date: "June 2019"
        }
    ]
};
activities.push(csclubhs);

// Science Team (high school)
var scienceteam =
{
    id: "science-team",
    organization: "Science Team",
    sub_title: "high school",
    description: "At the beginning of my junior year, my friend, who was captain of our school's science team, encouraged me to join the team. The team was part of the <a href=\"https://sites.google.com/site/northshorescienceleague/\">North Shore Science League</a>, which was made up of teams from about 20 high schools and held monthly meets throughout the school year. Three different events occurred at each meet, and each school team could send up to three four-person groups to each event – A, B, and C teams. Only the A team would score for the school in the event. Whichever school scored the most points across all three events would win the meet, and at the end of the school year, the schools would be ranked for an overall year's awards. After attending my first meet, my event team, which was the A-team for my school for the event, placed very high, missing first place by just a few points. Throughout the year, I continued to contribute in whatever way I could to help the team ultimately place third at the end of the year. The team leadership and teacher advisors then encouraged me to apply for a leadership position for the following school year, for which they then selected me from the pool of applicants. As Logistics Coordinator, I was in charge of managing funds, obtaining materials for our various events, and team purchases (food, materials, etc.). I held this position for my senior year, and we placed third in the league once again at the end of the year.",
    positions:
    [
        {
            title: "Member",
            start_date: "Sep 2017",
            end_date: "Jun 2018"
        },
        {
            title: "Logistics Coordinator",
            start_date: "Jun 2018",
            end_date: "Jun 2019"
        }
    ]
};
activities.push(scienceteam);

// HTML elements
var activity_accordion_item = "<li class=\"%class%\"><a class=\"uk-accordion-title\" href=\"#\">%organization%%sub_title%</a><div class=\"uk-accordion-content\"><p class=\"justify\">%description%</p><table class=\"uk-table uk-table-divider\"><thead><tr><th>Positions held</th><th>Time period</th></tr></thead><tbody id=\"%id%-positions-table\"></tbody></table></div></li>";
var activity_position_row = "<tr><td>%title%</td><td>%dates%</td></tr>";