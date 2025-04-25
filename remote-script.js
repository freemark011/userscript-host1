(function () {
  'use strict';

  const accessKey = "access_granted_09project";
  const usedCodesKey = "used_codes_09project";

  const validCodes = [
    "FX29-KL9A", "JPD8-XQ3E", "MZ72-WNK5", "TGL1-VUQ0", "BR87-NK4Z",
    "QEX9-LR1C", "WAZ5-JD2R", "KYM0-BT8X", "DLR6-MEZ1", "HQU3-NYX9"
  ];

  const alreadyAuthorized = localStorage.getItem(accessKey);

  if (!alreadyAuthorized) {
    const usedCodes = JSON.parse(localStorage.getItem(usedCodesKey) || "[]");

    const entered = prompt("Enter your one-time access code:");

    if (validCodes.includes(entered) && !usedCodes.includes(entered)) {
      localStorage.setItem(accessKey, "true");
      usedCodes.push(entered);
      localStorage.setItem(usedCodesKey, JSON.stringify(usedCodes));
      alert("Access granted. This device is now authorized.");
    } else {
      alert("Invalid or already used code. Access denied.");
      return;
    }
  }

  // Your main script logic below:
  console.log("Main script is now running...");
  alert("This message is from your GitHub-hosted script!");

  // You can now add your automation code here...
})();
