const apiKey = ""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;
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
