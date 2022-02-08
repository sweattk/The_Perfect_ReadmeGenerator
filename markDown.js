// Function will Return an empty string if there is no license.
function renderLicenseBadge(license) {
    if (license !== 'None') {
        return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return '';
}

// Function will Return an empty string if there is no license.
function renderLicenseLink(license) {
    if (license !== 'None') {
        return `\n* [License](#license)\n`;
    }
    return '';
}

// Function will Return an empty string if there is no license.
function renderLicenseSection(license) {
    if (license !== 'None') {
        return `## License
  
  This project is licensed under the ${license} license.`;
    }
    return '';
}

//  README markdown
function markDown(data) {
    return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents 
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ## Installation
  
  To install necessary dependencies, run the following command:
  
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage
  
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
    
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  To run tests, run the following command:
  
  \`\`\`
  ${data.test}
  \`\`\`
  
  ## Questions
  
  If you have any questions about the repo, open an issue or contact me directly at ${
      data.email
    }. You can find more of my work at [${data.github}](https://github.com/${
      data.github
    }/).
  
  `;
}

module.exports = markDown;