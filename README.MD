**Festival Cerita Jakarta** by Rumah Cerita
======

Production link: [https:///www.festivalceritajakarta.com/](https://www.festivalceritajakarta.com/)

Heroku link: [https://salty-waters-18939.herokuapp.com/](https://salty-waters-18939.herokuapp.com/)

Github link: [https://github.com/suryast/CFA-SS-festival](https://github.com/suryast/CFA-SS-festival)

Overview
========
*   [Project Brief](#project-brief)
*   [Technology stack](#technology-stack)
*   [Business problem](#business-problem)
*   [Solution](#solution)
*   [User stories](#user-stories)
*   [UX: User flow diagram](#ux-user-flow-diagram)
*   [Wireframes](#wireframes)
*   [Back-end: MongoDB schema design](#back-end-mongodb-schema-design)
*   [Style guide](#style-guide)
    *   [Color](#color)
    *   [Font type](#font-type)
    *   [Code style](#code-style)
*   [Project management](#project-management)
*   [Outstanding issues](#outstanding-issues)
*   [Installation, Setup, Deployment](#installation--setup--deployment)

Project Brief
======
This is a project that I initiated as part of Coders' Factory Academy bootcamp. The main goal of this exercise is demonstrate my ability as an aspiring full-stack developer to demonstrate that I can can build a fullstack Javascript application from design through to deployment, using appropriate tools and methodologies.

Scope of the exercise:
-   Design, build, deploy and present an application built for a real world customer.
-   Meet with the business owner or organisation manager to find out what challenges they face.
-   Find a problem that can be solved with an application

I collaborated again my friend Ina Andira – who runs her non-profit organisation in Indonesia called [**Rumah Cerita**](https://www.facebook.com/rumahceritaorg/)(est. 2015).

What is Rumah Cerita?
------
**Rumah Cerita** is a non-profit organisation dedicated to supporting students ages six to eighteen with their creative and expository writing skills and to helping teachers inspire their students to write. Through a range of innovative writing programmes, and one-to-one mentoring, we help young people discover and realise their own creative potential. We build confidence, self-respect and communication skills in both workshops for schools and out-of-school writing clubs.

**Rumah Cerita** (*The Story House*) is inspired by organisations from around the world like:
-   [826 Valencia, San Fransisco](http://826valencia.org/)
-   [The Ministry of Stories, London](http://ministryofstories.org/) – has Story Engine has been co-designed and developed with the collaboration of teachers, students, writers, designers, educators, academics, filmmakers and other specialists.
-   [The Sydney Story Factory, Sydney](http://www.sydneystoryfactory.org.au/) – has school holiday workshops

Vision and Mission
------
To facilitate young generations of Indonesia to write and to create.

To achieve the vision, **Rumah Cerita** has the following mission statements:
  1. To host creative writing workshop and other creative workshops for young Indonesians starting in the town of Bandung.
  2. To collect stories written by young Indonesians and publish them so that the work can be read and heard nationally and internationally.
  3. To become a community for young Indonesians who want to contribute to their country in the filed of literacy, arts and culture.

Approach
------
The programs have five prongs that are either ongoing or planned for the future:

  1. Free face-to-face writing and drawing workshops for under-resourced students – ongoing main project.
  2. Paid writing workshops delivered to established schools – initiative to explore.
  3. **Festival Cerita Jakarta** by Rumah Cerita
      Annual children writing festival to subsidise for approach #1. This initiative received $10K funding in early 2017 from the Australian Government through Australia Awards. The inaugural festival will be held in November 2017. This initiative needs an event+registration platform.

      Reference: https://www.swf.org.au.
  4. **Student Press Online** by Rumah Cerita
      This curated media platform would host and exhibit digital work of school kids who are involved in producing student press for their respective schools. The platform would also enable young writers to connect with trained mentors, and allows schools who may not be within reach locally to get inspired and benefit from our work – initiative to explore.

      Inspiration: http://www.timeforkids.com.
  5. **Coret** by Rumah Cerita
      Marketplace for selling fashion products that are inspired by writings and artworks of kids that are involved in writing and drawing workshops. The profit from sale will be shared with the creator of the original work. Each product would have a note that contains short story behind each work as written by the kids themselves – initiative to explore.

      Inspiration: http://tohe.vn/en/.

Roadblocks
------
-   Need sustainable funding to keep run free face-to-face workshops for under-resourced students.
-   No system in place yet for approach #2, #3, #4 and #5.

Solution and scope implemented in this project
------
-   Implement registration and interactive event platform for **Festival Cerita Jakarta** by Rumah Cerita.

[Return to overview](#overview)

Technology stack
======

Front-end:
-   KeystoneJS

Back-end:
-   MongoDB
-   ExpressJS via KeystoneJS

Accompanying bobile app front-end (may be?):
-   React Native JS

[Return to overview](#overview)

Business problem
======
-   Festival organiser needs to inform the world about the event, keep track of registration, keep track of volunteer registration, follow up with attendees post-event,
-   For this year the festival will be held for two days. It will be a free event and registration would cover attendance for the whole festival. In the future, the festival would be a paid ticketed event.
-   Festival organiser needs to be able to add speakers, events and create contents for the festival.

[Return to overview](#overview)

Solution
======
-   Landing page that can be the starting point of information for all stakeholders
-   Has CMS dashboard
-   Integrated ticketing connection using Eventbrite’s API
-   Containing database that records participants, volunteers, speakers and contents

[Return to overview](#overview)

User stories
======
I used Trello to map user stories and project planning. The board can be found here https://trello.com/b/hq9JxkwH/festival-cerita

-   As a user I want to be able to see schedule of the events so that I can decide whether to attend the festival
-   As a user I want to be able to click on different speakers that I can learn about their background
-   As a user I want to click on the details of each even to learn more about what will be on offer for a particular panel session
-   As a user I want to be able to book ticket for the event through a third party provider like Eventbrite so that the organiser knows that I will be there
-   As a user I want to be able to reach out to the organiser so that I can enquire for more information
-   As a sponsor I want to be able to see the potential of this event for my sponsorship money so that I can decide whether to give money again next time
-   As a potential donor I want to see the impact that this event can generate/has been generating so that I can decided to provide more assistance for next time
-   As an admin I want to be able to add guest speakers so that I can keep track of them in the database
-   As an admin I want to be able to write contents to promote the different events

[Return to overview](#overview)

UX: User flow diagram
======
TBC

[Return to overview](#overview)

Wireframes
======
I used wireframe.cc for the wireframing .

![Homepage](http://res.cloudinary.com/suryast/image/upload/v1497411936/Homepage_zxmxkm.png)

![Program](http://res.cloudinary.com/suryast/image/upload/v1497412727/Stories_fsgugf.png)

![Mobile](wireframe)

![Mobile](wireframe)

![Mobile](wireframe)

[Return to overview](#overview)

Back-end: MongoDB schema design
======
![ERD](http://res.cloudinary.com/suryast/image/upload/v1497410342/ERD_Festival_c8teqf.png)

[Return to overview](#overview)

Project plan and estimation
=======
I estimated that the core, production ready, prototype would take 40 agile points to build including UX and UI design. Additional accompanying mobile app built using React Native JS will take additional 20 points.

[Return to overview](#overview)

Project management
======
I used Trello to map user stories and project planning. The board can be found here https://trello.com/b/hq9JxkwH/festival-cerita

[Return to overview](#overview)

Presentation deck
======
Here is my presentation deck for the demo day
[Pitch & Demo Deck](https://docs.google.com/presentation/d/1WaIahqITDf7roBh_3aO6iYvkybE5V3zB2vObpNLgg5Y/edit?usp=sharing)

[Return to overview](#overview)

Outstanding issues
======
-  Homepage contents are not actively updating yet
-  Need a db connection to a small react-native mobile app for volunteers to distribute tasks before and during the festival
-  Need nice assets for the design
-  Need design and colour guide
-  Implement testing of the backends
-  Update design and page layout

[Return to overview](#overview)

Installation, Setup, Deployment
======

[Return to overview](#overview)
