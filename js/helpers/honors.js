// Honors helpers

// Honor objects
var honors = [{}];
honors.pop(); // Can't figure out how to make this array know it is an array of objects without this line

// Excellence in Java Programming
var excellence_java =
{
    title: "Excellence in Java Programming",
    levels:
    [
        "high school"
    ],
    dates:
    [
        "Jun 2018"
    ]
};
honors.push(excellence_java);

// National Honor Society
var nhs =
{
    title: "National Honor Society",
    levels:
    [
        "high school",
        "state",
        "national"
    ],
    dates:
    [
        "Nov 2017"
    ]
};
honors.push(nhs);

// Rensselaer Leadership Award
var rpi_leadership =
{
    title: "Rensselaer Leadership Award",
    levels:
    [
        "college"
    ],
    dates:
    [
        "Mar 2019"
    ]
};
honors.push(rpi_leadership);

// Rensselaer Recognition Award
var rpi_recognition =
{
    title: "Rensselaer Recognition Award",
    levels:
    [
        "college"
    ],
    dates:
    [
        "May 2019"
    ]
};
honors.push(rpi_recognition);

// MA Seal of Biliteracy
var seal_of_biliteracy =
{
    title: "MA Seal of Biliteracy",
    levels:
    [
        "high school",
        "state"
    ],
    dates:
    [
        "Jun 2019"
    ]
};
honors.push(seal_of_biliteracy);

// AP Scholar with Distinction
var ap_scholar_with_distinction =
{
    title: "AP Scholar with Distinction",
    levels:
    [
        "high school",
        "state",
        "national"
    ],
    dates:
    [
        "Jul 2019"
    ]
};
honors.push(ap_scholar_with_distinction);

// National AP Scholar
var national_ap_scholar =
{
    title: "National AP Scholar",
    levels:
    [
        "high school",
        "state",
        "national"
    ],
    dates:
    [
        "Jul 2019"
    ]
};
honors.push(national_ap_scholar);

// HTML Elements
var honor_row = "<tr><td>%title%</td><td>%levels%</td><td>%dates%</td></tr>";