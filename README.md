# Steam Summer 2015 Monster Minigame autojoin script
Title is pretty much self explanatory.

## Features
* Join running game
* Autojoin

## Installation
### Tampermonkey
1. Open Tapermonkey's dashboard.
2. Click on the `Utilities` tab on the right.
3. Paste `https://raw.githubusercontent.com/RockyTV/steamMinigameAutojoin/master/autoJoin.user.js` into the text area, and click `Import`.
4. When the editor has loaded, click `Install` (NOT `Process with Chrome`).

### Greasemonkey
1. Navigate to `https://raw.githubusercontent.com/RockyTV/steamMinigameAutojoin/master/autoJoin.user.js`
2. Right click on the page, and click `Save Page As`.
3. While Firefox is still open, open a File Manager of any sort, and navigate to the directory you saved the script.
4. Drag & drop the script file onto the Firefox window.
5. Press `Install`.

### Manual ###

##### Chrome #####
1. Open https://raw.githubusercontent.com/RockyTV/steamMinigameAutojoin/master/autoJoin.user.js
2. Select All, Copy.
3. Navigate to `http://steamcommunity.com/minigame/`.
4. Press `Ctrl + Shift + J`.
5. Paste into the javascript input, and hit `Enter`.
6. Type in the room id in the numeric textbox and press the button next to it, or press the big green button.

##### Firefox #####
1. Open https://raw.githubusercontent.com/RockyTV/steamMinigameAutojoin/master/autoJoin.user.js
2. Select All, Copy.
3. Navigate to `http://steamcommunity.com/minigame/`.
4. Press `Ctrl + Shift + K`.
5. Paste into the javascript input, and hit `Enter`.
6. Type in the room id in the numeric textbox and press the button next to it, or press the big green button.

##### Internet Explorer / Microsoft Edge #####
1. Open https://raw.githubusercontent.com/RockyTV/steamMinigameAutojoin/master/autoJoin.user.js
2. Select All, Copy.
3. Navigate to `http://steamcommunity.com/minigame/`.
4. Press `F12` and navigate to the `Console` tab.
5. Paste into the javascript input, and hit `Enter`.
6. Type in the room id in the numeric textbox and press the button next to it, or press the big green button.


To stop the manual script, type `window.clearTimeout(window.joinTimer);` into the console and hit `Enter`.

