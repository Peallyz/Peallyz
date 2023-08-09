const fs = require('fs');

function readReadmeFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    return content;
  } catch (error) {
    console.error("Error reading the file:", error);
    return null;
  }
}

function updateExperienceDays(content) {
  const regex = /💻 (\d+) days of experiences and practices\./;
  const match = content.match(regex);

  if (match && match[1]) {
    const currentDays = parseInt(match[1]);
    const newDays = currentDays + 1;
    const updatedContent = content.replace(regex, `💻 ${newDays} days of experiences and practices.`);
    return updatedContent;
  } else {
    console.error("Experience days not found in the content.");
    return null;
  }
}

function writeReadmeFile(filePath, content) {
  try {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log("Readme file updated successfully.");
  } catch (error) {
    console.error("Error writing the file:", error);
  }
}

const readmeFilePath = './README.md';
let readmeContent = readReadmeFile(readmeFilePath);

if (readmeContent) {
  readmeContent = updateExperienceDays(readmeContent);
  if (readmeContent) {
    writeReadmeFile(readmeFilePath, readmeContent);
  }
}
