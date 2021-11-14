const licenses = {
  "Apache 2.0 License": {
    text: `The 2.0 version of the Apache License, approved by the ASF in 2004, helps us achieve our goal of providing reliable and long-lived software products through collaborative, open-source software development. 
    
    All packages produced by the ASF are implicitly licensed under the Apache License, Version 2.0, unless otherwise explicitly stated.`,
    link: "https://www.apache.org/licenses/LICENSE-2.0",
    badge:
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  },
  "Boost Software License 1.0": {
    text: "Bbbb",
    badge:
      "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
  },
  "BSD 3-Clause License": {
    text: "Cccc",
    badge:
      "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  },
  "BSD 2-Clause License": {
    text: "Dddd",
    badge:
      "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
  },
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badge = licenses[license].badge;
  return badge || "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const link = licenses[license].link;
  return link || "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseText = licenses[license].text;
  return licenseText || "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  ${renderLicenseBadge(answers.license)}

## Table of content
[Description](#description-id)

## <a name="description-id">Description</a>
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.guidelines}

## Tests
${answers.test}

## License
${renderLicenseSection(answers.license)}

${renderLicenseLink(answers.license)}

## GutHub Link
https://github.com/${answers.github}

## Contact
If you have any questions please feel free to get in touch:
${answers.email}
`;
}

module.exports = generateMarkdown;
