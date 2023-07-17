// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    // Replace 'your-license' with the actual license name or identifier
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    // Replace 'your-license-link' with the actual URL or path to your license information
    return `[License](your-license-link)`;
  }
  return '';
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `This application is covered under the ${license} license. For more information, please refer to the [License](your-license-link).`;
  }
  return '';
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseBadge(data.license)}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions or inquiries, please reach out to me via GitHub or email:
- GitHub: [${data.username}](https://github.com/${data.username})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;