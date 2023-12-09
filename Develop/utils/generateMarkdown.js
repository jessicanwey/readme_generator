// This function returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {


}

// This function returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {


}

// This function returns the license section of the README
// If there is no license, return an empty string
function renderLicenseSection(license) {


}

// This function generates the markdown for the README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Badges
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
    
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contribute}

  ## Tests
  ${data.test}

  ## Questions
  GitHub Profile: [${data.github}](https://github.com/${data.github})  
  Please contact me via email with additional questions: ${data.email}
`;
}

module.exports = generateMarkdown;
