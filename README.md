# userscript-host1
Remote script hosting for my userscript
(function () {
  'use strict';

  const accessKey = "access_granted_09project";
  const usedCodesKey = "used_codes_09project";

  const validCodes = [
    "FX29-KL9A", "JPD8-XQ3E", "MZ72-WNK5", "TGL1-VUQ0", "BR87-NK4Z",
    "QEX9-LR1C", "WAZ5-JD2R", "KYM0-BT8X", "DLR6-MEZ1", "HQU3-NYX9"
  ];

  const alreadyAuthorized = localStorage.getItem(accessKey);
  const usedCodes = JSON.parse(localStorage.getItem(usedCodesKey) || "[]");

  if (!alreadyAuthorized) {
    const enteredCode = prompt("Enter your one-time access code:");

    if (validCodes.includes(enteredCode) && !usedCodes.includes(enteredCode)) {
      localStorage.setItem(accessKey, "true");
      usedCodes.push(enteredCode);
      localStorage.setItem(usedCodesKey, JSON.stringify(usedCodes));
      alert("Access granted. This device is now authorized.");
    } else {
      alert("Invalid or already used code. Script will not run.");
      return;
    }
  }

  // === START OF YOUR AUTOMATION SCRIPT ===
  console.log("Access granted. Running main automation...");

  // Example action:
  if (location.href.includes("/m/register")) {
    alert("Registration page: Start auto-fill logic here.");
  }

  if (location.href.includes("/m/withdraw")) {
    alert("Withdraw page: Start automation here.");
  }

  // Add your full logic here (auto-fill, redirect, etc.)
  // You can paste your previous automation steps from your local script here

  // === END OF YOUR AUTOMATION SCRIPT ===
})();
