// TODO: Create a function that returns a license badge based on which license is passed in

function renderLicenseBadge(license) { 
  if(license === 'none') {
    return ''
  }
  return `![badmath](https://img.shields.io/badge/license-${license}-brightgreen)`
}

// TODO: Create a function that returns the license link

function renderLicenseLink(license) {
  if (license !== 'none') {
    return `- [License](#license)`
  }
  return ''
 }

// TODO: Create a function that returns the license section of README

function renderLicenseSection(license) {
  if(license === 'none') {
    return ''
  }
    return `
  ## License

  Licensed und the ${license} license
    `
 }

// TODO: Create a function to generate markdown for README
generateMarkdown = (data) => {

  const {username, email, title, description, installation, usage, contribution, test, license} = data

  return `
  # ${title}
  ${renderLicenseBadge(license)}
  # table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Test](#test)
  - [Questions](#questions)
  ${renderLicenseLink(license)}

  ## Description
  ${description}

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## Contributing
  ${contribution}

  ## Test
  ${test}

  # Questions
  [My Github](https://github.com/${username})

  for any addtional questions pleas contact me at ${email}

  ${renderLicenseSection(license)}
`;
}

module.exports = generateMarkdown;
