# Flash Notes (Class/Personal Project)

<!-- Add Website Tag -->
<!-- Add border -->
<div
style="display: flex; justify-content: center; align-items: center;"
>
<img src="https://img.shields.io/badge/Application-Flash%20Notes-blue" alt="Website" style="margin-right: 10px;"
/>
<img src="https://img.shields.io/badge/Version-1.0.0-blue" alt="Version" style="margin-right: 10px;" />
<img src="https://img.shields.io/badge/Status-Active-green" alt="Status" style="margin: 10px 0 10px 0;" />

</div>
<a
style="margin: 10px 0 10px 10px; display: flex; justify-content: center;"
href="https://williamhmoody.com/">
<img src="https://img.shields.io/badge/Website-William%20Moody-blue" alt="Website"/>
</a>

Welcome to **Flash Notes**! This application is designed to assist students in organizing their notes effectively with the help of GPT-3.5, a powerful language model. Flash Notes allows users to organize, translate, and summarize lecture notes with ease. The application also features a dark mode for a comfortable reading experience and a user-friendly interface for seamless navigation.

## Desktop View

![Desktop View1](/assests/image.png)
![Desktop View2](/flash-notes/assests/image2.png)

<!-- Set smaller size image -->

## Mobile View Responsive

![Desktop View3](/flash-notes/assests/image3.png)
![Desktop View4](/flash-notes/assests/image4.png)

## Table of Contents

- [Flash Notes (Class/Personal Project)](#flash-notes-classpersonal-project)
  - [Desktop View](#desktop-view)
  - [Mobile View Responsive](#mobile-view-responsive)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
    - [**_API key is required to run the application. You can obtain the API key from OpenAI's website or RapidAPI and place within an `.env` file to protect your API key._**](#api-key-is-required-to-run-the-application-you-can-obtain-the-api-key-from-openais-website-or-rapidapi-and-place-within-an-env-file-to-protect-your-api-key)
  - [Usage](#usage)
  - [Contributing](#contributing)

## Features

- **Organize Notes**: Create, edit, and manage notes efficiently. Keep your notes organized in a user-friendly manner.
- **Translate Notes**: Translate your notes to different languages to help you study in a more global context.
- **Summarize Notes**: Utilize GPT-3.5 to generate concise summaries of your lecture notes, helping you review and study more effectively.
- **Dark Mode**: Toggle between light and dark modes to suit your preferences and enhance your reading experience.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/flash-notes.git
   ```

2. Navigate to the project directory:

   ```bash
   cd flash-notes
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   npm start
   ```

   ### **_API key is required to run the application. You can obtain the API key from OpenAI's website or RapidAPI and place within an `.env` file to protect your API key._**

   - The env variable is accessed within the main UI Component.

   **_Example of `.env` file:_**

   ```bash
   REACT_APP_OPENAI_API_KEY=<your-api-key-here>
   ```

5. The application will be accessible at `http://localhost:3000`.

## Usage

1. **Create Notes**: Start by creating a new note and give it a title. You can add content and use the toolbar to format your text.

2. **Organize Notes**: Use the sidebar to organize your notes into folders and subfolders for easy access and categorization.

3. **Translate Notes**: Select a note and use the translation feature to translate the note into the language of your choice.

4. **Summarize Notes**: Generate summaries of your notes using the built-in GPT-3.5 model. This feature can help you quickly review your lecture notes and prepare for exams.

5. **Toggle Dark Mode**: Use the dark mode toggle at the bottom-right corner to switch between light and dark modes for a comfortable reading experience.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new pull request.

Thank you for using Flash Notes! If you encounter any issues or have any feedback, feel free to reach out. Happy studying!
