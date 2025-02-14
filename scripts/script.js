import { showPromptForm, submitPrompt } from './prompt.js';
import { toggleStartButton, toggleResetButton } from './ui.js';

document.getElementById("createPromptButton").addEventListener("click", function() {
    showPromptForm();
});

document.getElementById("submitPromptButton").addEventListener("click", function() {
    submitPrompt();
});

// Example of how you can manage start/reset buttons:
document.getElementById("startButton").addEventListener("click", function() {
    toggleStartButton();
});

document.getElementById("resetButton").addEventListener("click", function() {
    toggleResetButton();
});
