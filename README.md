# Text Analyzer Tool using express 

Text analyzer tool is a web application built with Express.js framework that analyzes text files like count of words, characters, paragraphs, and more of the text written in the file. It provides the following APIs:

- `/api/word-count`: Returns the number of words in the text file.
- `/api/character-count`: Returns the number of characters in the text file.
- `/api/sentence-count`: Returns the number of sentences in the text file.
- `/api/paragraph-count`: Returns the number of paragraphs in the text file.
- `/api/longest-words`: Returns the longest words for each paragraph in the text file.

## Prerequisites
- Node.js (version 14.x or higher)
- npm (Node Package Manager)

## Installation & Configuration

To install and run this project locally, follow these steps:

1. Clone the project repository:
```bash 
    git clone https://github.com/
```
2. Navigate to the project directory: 
```bash
    cd text-analyzer
```
3. Install dependencies:
```bash
    npm install
```
4. Before running the application, you may need to configure environment variables.
Create `.env` file in the root directory and add the following variables.
```
PORT=3000
NODE_ENV=development
```
This sets the port number for the Express server. You can adjust it as needed.
5. Start the application in development mode, use the following command.
```bash
    npm run dev
```
This will run the Express server. You should see a message indicating that the server is running on port [http://localhost:3000](http://localhost:3000)

## API Documentation

Once the server is running, you can access the API documentation which is `Swagger` at [http://localhost:3000/api-docs](http://localhost:3000/api-docs). This documentation provides details about the available endpoints and how to use them.

## Running Tests

The test has several different command to run the test suite. Use the following commands:
- Run all tests together
```bash
    npm run test
```
### Run Individual Tests
- Character Count Route Test Suite:
```bash
    npm run character:count:test
```
- Word Count Route Test Suite:
```bash
    npm run word:count:test
```
- Sentence Count Route Test Suite:
```bash
    npm run sentence:count:test
```
- Paragraph Count Route Test Suite:
```bash
    npm run paragraph:count:test
```
- Longest Words Route Test Suite:
```bash
    npm run longest:words:test
```
- Utils Test Suite:
```bash
    npm run util:test
```