// Licenses
const mitLicense =`MIT License
    
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      return mitLicense

    case "None":
      break;
    default:
      return renderLicenseSection("MIT");
  }

  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {
    title,
    description,
    imgPath,
    githubUsername,
    contactEmail,
    deployedURL,
    repoURL,
    installation,
    usage,
    credits,
    contribution,
    testing,
  } = data;
  return `# ${title}

  ## Description
  
  ${description}
  
  ---
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)
  
  ---
  
  ## Installation
  
  ${installation}
  
  URL for active webpage: [${deployedURL}](${deployedURL})
  
  URL for repository: [${repoURL}](${repoURL})
  
  ---
  
  ## Usage
  
  ${usage}
  
  ![app image](${imgPath})
  
  ---
  
  ## Credits
  
  ${credits}
  
  
  ---
  
  ## Contributing

  ${contribution}
  
  ---
  
  ## Tests

  ${testing}
  
  ---
  
  ## Questions
  
  Please contact [${contactEmail}](mailto:${contactEmail}) or ${githubUsername} on [Github](https://github.com/${githubUsername}/).
  
  ---
  
  ## License

  Copyright (c) [${new Date().getFullYear()}] [${githubUsername}]
  
  ${renderLicenseSection(license)}
  
`;
}

module.exports = generateMarkdown;
