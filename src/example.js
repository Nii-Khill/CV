export const exampleData = {
    name: "Nikola Tesla",
    email: "nikolatesla@su.edu",
    phone: "123-456-7890",
    linkedin: "linkedin.com/in/nikola",
    github: "github.com/nikola",
    education: [
        {
            schoolName: "Southwestern University",
            studyTitle: "Bachelor of Arts in Computer Science, Minor in Business",
            location: "Georgetown, TX",
            dateOfStudy: "Aug. 2018 – May 2021"
        },
        {
            schoolName: "Blinn College",
            studyTitle: "Associate’s in Liberal Arts",
            location: "Bryan, TX",
            dateOfStudy: "Aug. 2014 – May 2018"
        }
    ],
    experiences: [
        {
            companyName: "Texas A&M University",
            positionTitle: "Undergraduate Research Assistant",
            responsibilities: ` Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems
Developed a full-stack web application using Flask, React, PostgreSQL and Docker to analyze GitHub data
 Explored ways to visualize GitHub collaboration in a classroom setting`,
            location: "College Station, TX",
            dateFromToEnd: "June 2020 – Present"
        },
        {
            companyName: "Southwestern University",
            positionTitle: "Information Technology Support Specialist",
            responsibilities: ` Communicate with managers to set up campus computers used on campus
 Assess and troubleshoot computer problems brought by students, faculty and staff
 Maintain upkeep of computers, classroom equipment, and 200 printers across campus`,
            location: "Georgetown, TX",
            dateFromToEnd: "Sep. 2018 – Present"
        },
        {
            companyName: "Southwestern University",
            positionTitle: "Artificial Intelligence Research Assistant",
            responsibilities: ` Explored methods to generate video game dungeons based off of The Legend of Zelda
Developed a game in Java to test the generated dungeons
Contributed 50K+ lines of code to an established codebase via Git
Conducted a human subject study to determine which video game dungeon generation technique is enjoyable
 Wrote an 8-page paper and gave multiple presentations on-campus
 Presented virtually to the World Conference on Computational Intelligence`,
            location: "Georgetown, TX",
            dateFromToEnd: "May 2019 – July 2019"
        }
    ],
    projects: [
        {
            projectName: "Giltytics",
            techStack: "Python, Flask, React, PostgreSQL, Docker",
            responsibilities: `• Developed a full-stack web application using Flask serving a REST API with React as the frontend
 Implemented GitHub OAuth to get data from user’s repositories
 Visualized GitHub data to show collaboration
 Used Celery and Redis for asynchronous tasks`,
            dateFromToEnd: "June 2020 – Present"
        }
    ]
};
