require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const simpleGit = require("simple-git");

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

const PORT = process.env.PORT || 5001;
const REPO_PATH = path.join(__dirname, "generated-code");
const GITHUB_REPO = "https://github.com/sujal111/image-2-code.git"; // Replace with your repo
const GITHUB_USERNAME = "sujal111";
const GITHUB_EMAIL = "sujalmaiti123456@gmail.com"; // Replace with your email

const AZURE_OPENAI_CONFIG = {
  azure_deployment: "gpt-4o",
  api_version: "2023-07-01-preview",
  api_key: "f1719a4af60d45ada4097b9570a2c5d0", // Store securely in .env
  azure_endpoint: "https://cast-southcentral-nprd-apim.azure-api.net/AITCSG",
};

// **Ensure the directory exists before initializing Git**
if (!fs.existsSync(REPO_PATH)) {
  fs.mkdirSync(REPO_PATH, { recursive: true });
}

const git = simpleGit(REPO_PATH);

app.post("/convert-image", async (req, res) => {
  try {
    const { base64Image, language } = req.body;

    const response = await axios.post(
      `${AZURE_OPENAI_CONFIG.azure_endpoint}/openai/deployments/${AZURE_OPENAI_CONFIG.azure_deployment}/chat/completions?api-version=${AZURE_OPENAI_CONFIG.api_version}`,
      {
        model: "gpt-4-vision-preview",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: `Analyze this image and generate equivalent ${language} code to recreate it. If ${language} is "React", ensure it is a functional React component using hooks and JSX.`,
              },
              {
                type: "image_url",
                image_url: { url: `data:image/jpeg;base64,${base64Image}` },
              },
            ],
          },
        ],
        max_tokens: 3000,
      },
      {
        headers: { "api-key": AZURE_OPENAI_CONFIG.api_key },
      }
    );

    const generatedCode = response.data.choices[0].message.content;

    // **Ensure repo directory exists before writing the file**
    if (!fs.existsSync(REPO_PATH)) {
      fs.mkdirSync(REPO_PATH, { recursive: true });
    }

    // Define file path
    const timestamp = Date.now();
    const filePath = path.join(REPO_PATH, `generated-${timestamp}.js`);

    // Save code to a file
    fs.writeFileSync(filePath, generatedCode, "utf8");

    // Push to GitHub
    await pushToGitHub(filePath);

    res.json({ code: generatedCode, message: "Code pushed to GitHub" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to process the image" });
  }
});

async function pushToGitHub(filePath) {
  try {
    // **Ensure Git repo is initialized**
    if (!fs.existsSync(path.join(REPO_PATH, ".git"))) {
      await git.init();
      await git.addRemote("origin", GITHUB_REPO);
    }

    await git.addConfig("user.name", GITHUB_USERNAME);
    await git.addConfig("user.email", GITHUB_EMAIL);
    await git.add(filePath);
    await git.commit(`Added new generated code - ${new Date().toISOString()}`);
    await git.push("origin", "main"); // Ensure the branch is correct
    console.log("Code successfully pushed to GitHub.");
  } catch (error) {
    console.error("Git Push Error:", error);
  }
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
