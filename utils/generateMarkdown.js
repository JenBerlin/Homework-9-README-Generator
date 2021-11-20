const licenses = {
  "Apache 2.0 License": {
    text: `The 2.0 version of the Apache License, approved by the ASF in 2004, helps us achieve our goal of providing reliable and long-lived software products through collaborative, open-source software development. 
    
    All packages produced by the ASF are implicitly licensed under the Apache License, Version 2.0, unless otherwise explicitly stated.`,
    link: "https://www.apache.org/licenses/LICENSE-2.0",
    badge:
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  },
  "Boost Software License 1.0": {
    text: "Boost is a set of libraries for the C++ programming language that provides support for tasks and structures such as linear algebra, pseudorandom number generation, multithreading, image processing, regular expressions, and unit testing. It contains 164 individual libraries (as of version 1.76). Most of the Boost libraries are licensed under the Boost Software License, designed to allow Boost to be used with both free and proprietary software projects. Many of Boost's founders are on the C++ standards committee, and several Boost libraries have been accepted for incorporation into the C++ Technical Report 1, the C++11 standard (e.g. smart pointers, thread, regex, random, ratio, tuple)[4][5] and the C++17 standard (e.g. filesystem, any, optional, variant, string_view).",
    link: "https://www.boost.org/users/license.html",
    badge:
      "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
  },
  "BSD 3-Clause License": {
    text: "BSD licenses are a family of permissive free software licenses, imposing minimal restrictions on the use and distribution of covered software. This is in contrast to copyleft licenses, which have share-alike requirements. This version allows unlimited redistribution for any purpose as long as its copyright notices and the license's disclaimers of warranty are maintained. The license also contains a clause restricting use of the names of contributors for endorsement of a derived work without specific permission.",
    link: "https://opensource.org/licenses/BSD-3-Clause",
    badge:
      "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  },
  "BSD 2-Clause License": {
    text: "BSD licenses are a family of permissive free software licenses, imposing minimal restrictions on the use and distribution of covered software. This is in contrast to copyleft licenses, which have share-alike requirements.",
    link: "https://opensource.org/licenses/bsd-license.php",
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
[Installation](#installation-id)
[Usage](#usage-id)
[Contributing](#contributing-id)
[Tests](#tests-id)
[License](#license-id)
[GutHub Link](#github-id)
[Contact](#contact-id)

## <a name="description-id">Description</a>
${answers.description}

## <a name="installation-id">Installation</a>
${answers.installation}

## <a name="usage-id">Usage</a>
${answers.usage}

## <a name="contributing-id>Contributing</a>
${answers.guidelines}

## <a name="tests-id">Tests</a>
${answers.test}

## <a name="license-id">License</a>
${renderLicenseSection(answers.license)}

${renderLicenseLink(answers.license)}

## <a name="github-id">GutHub Link</a>
https://github.com/${answers.github}

## <a name="contact-id">Contact</a>
If you have any questions please feel free to get in touch:
${answers.email}
`;
}

module.exports = generateMarkdown;
