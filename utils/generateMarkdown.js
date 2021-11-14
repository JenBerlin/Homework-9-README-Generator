const licenses = {
  MIT: {
    text: "Aaaa",
    badge: "bla",
  },
  GPL: {
    text: "Bbbb",
    badge: "bla",
  },
  BSD: {
    text: "Cccc",
    badge: "bla",
  },
  Apache: {
    text: "Dddd",
    badge:
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  },
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badge = licenses[license].badge;
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseText = licenses[license].text;
  return licenseText;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  ${renderLicenseBadge(answers.license)}

## Description
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
`;
}

module.exports = generateMarkdown;
