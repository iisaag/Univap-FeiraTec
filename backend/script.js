const apiKey = "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";
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

async function sendMessage() {
    const userText = userInput.value.trim();
    if (userText === "") return;

    appendMessage("Você", userText);

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userText }]
        })
    });

    const data = await response.json();
    const botMessage = data.choices[0].message.content;

    appendMessage("ChatGPT", botMessage);

    userInput.value = "";
}

function appendMessage(sender, message) {
    const messageElement = document.createElement("p");
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
