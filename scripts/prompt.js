export function showPromptForm() {
    document.getElementById("promptForm").style.display = "block";
    document.getElementById("createPromptButton").style.display = "none";
}

export function submitPrompt() {
    var userPrompt = document.getElementById("promptInput").value;

    if (userPrompt) {
        document.getElementById("displayPrompt").textContent = userPrompt;
        document.getElementById("submittedPrompt").style.display = "block";

        document.getElementById("promptInput").value = "";
        document.getElementById("promptForm").style.display = "none";
        document.getElementById("createPromptButton").style.display = "block";
    } else {
        alert("Please enter a prompt!");
    }
}
