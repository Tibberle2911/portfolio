chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "IsInPageViewTrackingList") {
    fetchData().then((result) => {
      sendResponse(result);
    });
    return true; // Keeps the message channel open for asynchronous response.
  }
});
chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create("keepAlive", { periodInMinutes: 5 });
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "keepAlive") {
    console.log("Service worker still running.");
  }
});
