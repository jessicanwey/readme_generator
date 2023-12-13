// This function returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";
  if (license === "Academic Free License v3.0") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-AFL--3.0-blue.svg)](https://opensource.org/license/afl-3-0-php/)";
  }
  if (license === "Apache license 2.0") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-Apache--2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if (license === "Artistic license 2.0") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-Artistic--2.0-blue.svg)](https://opensource.org/license/artistic-2-0/)";
  }
  if (license === "Boost Software License 1.0") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-BSL--1.0-blue.svg)](https://opensource.org/license/bsl-1-0/)";
  }
  if (license === 'BSD 2-clause "Simplified" license') {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-BSL--2--Clause-blue.svg)](https://opensource.org/license/bsdpluspatent/)";
  }
  if (license === 'BSD 3-clause "New" or "Revised" license') {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-BSL--3--Clause-blue.svg)](https://opensource.org/license/bsdpluspatent/)";
  }
  if (license === "BSD 3-clause Clear license") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-BSL--3--Clause--Clear-blue.svg)](https://opensource.org/license/bsdpluspatent/)";
  }
  if (license === 'BSD 4-clause "Original" or "Old" license') {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-BSL--4--Clause-blue.svg)](https://opensource.org/license/bsdpluspatent/)";
  }
  if (license === "BSD Zero-Clause license") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-0BSD-blue.svg)](https://opensource.org/license/bsdpluspatent/)";
  }
  if (license === "Creative Commons license family") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-CC-blue.svg)]";
  }
  if (license === "Do What The F*ck You Want To Public License") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-WTFPL-blue.svg)]";
  }
  if (license === "Educational Community License v2.0") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-ECL--2.0-blue.svg)](https://opensource.org/license/ecl-2-0/)";
  }
  if (license === "Eclipse Public License 1.0") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-EPL--1.0-blue.svg)](https://opensource.org/license/ecl-1-0/)";
  }
  if (license === "Eclipse Public License 2.0") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-EPL--2.0-blue.svg)](https://opensource.org/license/ecl-2-0/)";
  }
  if (license === "European Union Public License 1.1") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-EUPL--1.1-blue.svg)](https://opensource.org/license/eupl-1-2/)";
  }
  if (license === "GNU Affero General Public License v3.0") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-AGPL--3.0-blue.svg)](https://opensource.org/license/agpl-v3/)";
  }
  if (license === "GNU Lesser General Public License family") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-LGPL--blue.svg)](https://opensource.org/license/lgpl-license-html/)";
  }
  if (license === "GNU Lesser General Public License v2.1") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-LGPL--2.1-blue.svg)](https://opensource.org/license/lgpl-2-1/)";
  }
  if (license === "GNU Lesser General Public License v3.0") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-LGPL--3.0-blue.svg)](https://choosealicense.com/licenses/agpl-3.0/)";
  }
  if (license === "ISC") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/license/isc-license-txt/)";
  }
  if (license === "LaTeX Project Public License v1.3c") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-LPPL--1.3c-blue.svg)](https://opensource.org/license/lppl/)";
  }
  if (license === "Microsoft Public License") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-MS--PL-blue.svg)](https://opensource.org/license/ms-pl-html/)";
  }
  if (license === "Open Software License 3.0") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-OSL--3.0-blue.svg)](https://opensource.org/license/osl-3-0-php/)";
  }
  if (license === "PostgreSQL License") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-PostgreSQL-blue.svg)](https://opensource.org/license/postgresql/)";
  }
  if (license === "SIL Open Font License 1.1") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-OFL--1.1-blue.svg)](https://opensource.org/license/ofl-1-1/)";
  }
  if (license === "University of Illinois/NCSA Open Source License") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-NCSA-blue.svg)](https://opensource.org/license/uoi-ncsa-php/)";
  }
  if (license === "The Unlicense") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-Unlicense-blue.svg)](https://opensource.org/license/unlicense/)";
  }
  if (license === "zLib License") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-Zlib-blue.svg)](https://opensource.org/license/zlib/)";
  }

  return licenseBadge;
}

// This function returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if (license === "Academic Free License v3.0") {
    licenseLink = "https://opensource.org/license/afl-3-0-php/";
  }
  if (license === "Apache license 2.0") {
    licenseLink = "https://opensource.org/license/apache-2-0/";
  }
  if (license === "Artistic license 2.0") {
    licenseLink = "https://opensource.org/license/artistic-2-0/";
  }
  if (license === "Boost Software License 1.0") {
    licenseLink = "https://opensource.org/license/bsl-1-0/";
  }
  if (license === 'BSD 2-clause "Simplified" license') {
    licenseLink = "https://opensource.org/license/bsdpluspatent/";
  }
  if (license === 'BSD 3-clause "New" or "Revised" license') {
    licenseLink = "https://opensource.org/license/bsdpluspatent/";
  }
  if (license === "BSD 3-clause Clear license") {
    licenseLink = "https://opensource.org/license/bsdpluspatent/";
  }
  if (license === 'BSD 4-clause "Original" or "Old" license') {
    licenseLink = "https://opensource.org/license/bsdpluspatent/";
  }
  if (license === "BSD Zero-Clause license") {
    licenseLink = "https://opensource.org/license/bsdpluspatent/";
  }
  if (license === "Creative Commons license family") {
    licenseLink = "";
  }
  if (license === "Do What The F*ck You Want To Public License") {
    licenseLink = "";
  }
  if (license === "Educational Community License v2.0") {
    licenseLink = "https://opensource.org/license/ecl-2-0/";
  }
  if (license === "Eclipse Public License 1.0") {
    licenseLink = "https://opensource.org/license/ecl-1-0/";
  }
  if (license === "Eclipse Public License 2.0") {
    licenseLink = "https://opensource.org/license/ecl-2-0/";
  }
  if (license === "European Union Public License 1.1") {
    licenseLink = "https://opensource.org/license/eupl-1-2/";
  }
  if (license === "GNU Affero General Public License v3.0") {
    licenseLink = "https://opensource.org/license/agpl-v3/";
  }
  if (license === "GNU Lesser General Public License family") {
    licenseLink = "https://opensource.org/license/lgpl-license-html/";
  }
  if (license === "GNU Lesser General Public License v2.1") {
    licenseLink = "https://opensource.org/license/lgpl-2-1/";
  }
  if (license === "GNU Lesser General Public License v3.0") {
    licenseLink = "https://choosealicense.com/licenses/agpl-3.0/";
  }
  if (license === "ISC") {
    licenseLink = "https://opensource.org/license/isc-license-txt/";
  }
  if (license === "LaTeX Project Public License v1.3c") {
    licenseLink = "https://opensource.org/license/lppl/";
  }
  if (license === "Microsoft Public License") {
    licenseLink = "https://opensource.org/license/ms-pl-html/";
  }
  if (license === "Open Software License 3.0") {
    licenseLink = "https://opensource.org/license/osl-3-0-php/";
  }
  if (license === "PostgreSQL License") {
    licenseLink = "https://opensource.org/license/postgresql/";
  }
  if (license === "SIL Open Font License 1.1") {
    licenseLink = "https://opensource.org/license/ofl-1-1/";
  }
  if (license === "University of Illinois/NCSA Open Source License") {
    licenseLink = "https://opensource.org/license/uoi-ncsa-php/";
  }
  if (license === "The Unlicense") {
    licenseLink = "https://opensource.org/license/unlicense/";
  }
  if (license === "zLib License") {
    licenseLink = "https://opensource.org/license/zlib/";
  }

  return licenseLink;
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
  Find out more about this license here: ${renderLicenseLink(data.license)}

  ## Contributing
  ${data.contribute}

  ## Tests
  ${data.test}

  ## Questions
  GitHub: [${data.github}](https://github.com/${data.github})  
  Please contact me via email with additional questions: ${data.email}
`;
}

module.exports = generateMarkdown;
