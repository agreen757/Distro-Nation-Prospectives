# DN Prospectives

Google Sheet used by Distro Nation to track prospective artists for outreach

## Dependencies

This app requires the following dependencies:

- Google Apps Script
- Clasp

## Setup for Local Development

1. Install [Node.js](https://nodejs.org/) and npm.

2. Install Clasp globally using npm:

```bash
npm install -g @google/clasp
```

3. Login to Google

```bash
clasp login
```

4. Clone the project:

```bash
git clone <repository-url>

cd <project-directory>
```

5. Initialize Clasp for the current Google Apps Script project. You'll need the script ID, which can be found in the config.json file:

```bash
clasp clone <Your Apps Script ID>
```

## Real-Time Development

Use the following command to push changes to the Google Apps Script project in real time:

```bash
clasp push --watch
```

This command watches for any changes in the local project files and pushes them to the Google Apps Script project automatically.
