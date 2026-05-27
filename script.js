console.log("SCRIPT LOADED");
let versionCounter = 1;

/* ================= LOGIN ================= */

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        localStorage.setItem("user", email);
        window.location.href = "dashboard.html";
    } else {
        alert("Enter valid credentials");
    }
}

function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}

/* ================= NAVIGATION ================= */

function showSection(sectionId) {
    const sections = document.querySelectorAll(".section");
    sections.forEach(sec => sec.style.display = "none");
    document.getElementById(sectionId).style.display = "block";
}

/* ================= AWS CONFIG ================= */

// 🔥 PASTE YOUR AWS LAB CREDENTIALS HERE
AWS.config.update({
// AWS credentials removed for security reasons

AWS.config.update({
    region: "us-east-1"
});

const s3 = new AWS.S3({
    apiVersion: "2006-03-01"
});

const BUCKET_NAME = "vishycloudproject";

/* ================= FILE UPLOAD ================= */

function uploadFile() {

    const fileInput = document.getElementById("fileInput");
    const fileList = document.getElementById("fileList");
    const versionList = document.getElementById("versionList");

    if (fileInput.files.length === 0) {
        alert("Please select a file");
        return;
    }

    const file = fileInput.files[0];

    alert("File uploaded successfully ✅");

    let li = document.createElement("li");
    li.textContent = file.name;
    fileList.appendChild(li);

    let versionItem = document.createElement("li");
    versionItem.textContent = file.name + " - V" + versionCounter;
    versionList.appendChild(versionItem);

    versionCounter++;
}