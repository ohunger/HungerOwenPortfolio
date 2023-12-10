# Personal Portfolio Website

![Portfolio Image](./app.png) <!-- Replace `path/to/your/image.jpg` with the actual path to your image -->

This repository contains the source code for my personal portfolio website, built using React. This website showcases my projects, skills, and provides a way for visitors to contact me. The application features various components, including an intro section, project section, navigation bar, skills section, and a contact me section that allows users to send emails directly to me.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

## Features

**1. Intro Section**
   - Provides a brief introduction about me.
   - Showcases my personal and professional background.
   - Utilized a lot of new css libraries that I thought were cool, kind of wasted alot of time here if I am being honest, learned how to animate stuff. I feel like I got a lot stronger at frontend during this project though.

**2. Project Section**
   - Displays a collection of my projects. Made it so for some you can click and it will either bring you to the project deployed, or the repo if it is not deployed.
   - Each project includes a title, description, and a link to the project repository or live demo.

**3. Navigation Bar**
   - Allows easy navigation between different sections of the portfolio website.
   - Provides a user-friendly interface for visitors.

**4. Skills Section**
   - Highlights my technical skills and expertise.
   - Provides a quick overview of the technologies I am proficient in.

**5. Contact Me Section**
   - Features a contact form for users to send messages directly to my email.
   - Validates user inputs and sends an email with the entered details.
   - I have multiple files responsible for this but still cannot get it to work fully. I tried using a more advanced server method in JS and another simpler way in PHP but have been struggling to get it to actually send.

Additional files- Newsletter.js I had an idea to implement but was kind of a waste of time and I didn't feel like I need it at the end so I took it out.

## Installation

### CD into personal-portfolio, not my-portfolio. Sorry I messed up in github.
PERSONAL-PORTFOLIO!

Install dependencies:
  npm install
Start the development server:
  npm start

## Usage
  Customize the content of each section by updating component in the src/components directory. Modify the styling by editing the styles in the src/styles directory.

## Project Structure
  The project structure follows a standard React application layout:

public/: Contains static assets and the HTML template.
src/: Contains the React application source code.
components/: Includes individual React components for different sections.
index.js: Entry point of the React application.
assets/: Conatins images and fonts and other things.

## Technologies Used
React
JS
HTML5
CSS
Lot of import libraries that I learned about that helped me animate or put things into certain groups.

I worked on this extensively since this is actually a project that will benefit me outside of class. I tried to split everything up into different files which makes it a litte bit easier to understand since it is a lot of code.
For the purposes of my plang class to exemplify my understanding of these classes you can look in any of the files in the src/components folder, I have created classes like ProjectCard for example which is referenced in another file Projects.js
I also feel like I have a much better understanding of useStates.



