# Bot Battles

## Introduction

This React application lets users browse bots, enlist them in their army, and manage their bot collection.

## Features

### Core Deliverables
As a user, you can:
1. **View All Bots**: See profiles of all bots rendered in the `BotCollection` component.
2. **Enlist a Bot**: Add a bot to your army by clicking on it. 
   - Enlisted bots render in the `YourBotArmy` component.
   - A bot can only be enlisted once and remains visible in the `BotCollection`.
3. **Release a Bot**: Remove a bot from your army by clicking on it in the `YourBotArmy` component. The bot will no longer appear in the army but will still be available in the `BotCollection`.
4. **Discharge a Bot Forever**: Remove a bot permanently by clicking the red "x" button. This action deletes the bot from the backend and removes it from both `YourBotArmy` and `BotCollection`.

## Project Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/ArnoldMajor/phase-2-bot-battles
   cd bot-battles
    ```

2. Install dependencies:
    ``` bash
    npm install
    ```

3. Start the JSON Server:
    ``` bash
    json server --watch ./src/data/db.json --port 8001
    ```

4. Run the React application:
    ``` bash
    npm start
   ```

5. Open the app in your browser:
    ``` bash
    http://localhost:3000
   ```json server --watch ./src./data/db.json --port 8001

## Technologies Used

**React:** For building the user interface.
**JSON Serv*er:** For simulating a backend database.
**JavaScript:** For handling app logic.
**CSS:** For styling the components.

## License

This project is licensed under the MIT License.
   
    
