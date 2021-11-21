# Homework-08-README-Generator

Table of content

- [Homework-08-README-Generator](#homework-08-readme-generator)
- [Description](#description)
- [Building Structure](#building-structure)
- [Screenshots](#screenshots)
- [Tech/Framwork used](#techframwork-used)
- [Repositery content + link](#repositery-content--link)

# Description

This application is an commandline application, which allows the user to generate a README file just by using the terminal - if all files are in place. By starting the application the user will get asked several questions and the input represent the README content in the end. The question itself are in such a way structured that they refer to a main README file headline/section. After the completion a README-generated.md gets automatically created and saved on the repositery.

# Building Structure

index.js: is holding the questions and two fuctions: wirteToFile + start

generateMarkdown.js: is holding the license list content and four fuctions: render LicenseBedge + render LicenseLink + renderLicenseSection + generateMarkdown and the module.exports

# Screenshots

![Getting Started](./image/1-Screenshot.png)

# Tech/Framwork used

- Node.js
- npm require
- JavaScript

# Repositery content + link

- Given-README.md
  - README.md
- image
  - 1-Screenshot.png
- utils
  - generateMarkdown.js
- .gitignore
- package-lock.json
- package.json
- README-generated.md
- README.md

- GitHub (dev branch): https://github.com/JenBerlin/README-Generator/tree/dev
- Walkthrough-Video: https://drive.google.com/file/d/1Tz3pSJtS88r5wwPcFMTUdy__0--OUH6U/view
