chrome.runtime.sendMessage(
  { action: "IsInPageViewTrackingList" },
  (response) => {
    if (chrome.runtime.lastError) {
      console.error("Error:", chrome.runtime.lastError.message);
    } else {
      console.log("Response received:", response);
    }
  }
);
