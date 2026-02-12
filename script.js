function checkPassword() {
    const correctPassword = "05012025";
    const enteredPassword = document.getElementById("passwordInput").value;

    if (enteredPassword === correctPassword) {
        document.getElementById("passwordScreen").classList.add("hidden");
        document.getElementById("mainContent").classList.remove("hidden");
    } else {
        document.getElementById("errorText").innerText = "Haju sarkhhu Yaad kar 💔";
    }
}
