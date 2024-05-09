// eslint-disable-next-line no-unused-vars
function updateYT() {
  // eslint-disable-next-line no-undef
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Artists");
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const artists = data.slice(1);

  // eslint-disable-next-line no-undef
  const Token = getToken();
  const tokenJson = JSON.parse(Token);
  const tokenBody = JSON.parse(tokenJson.body);
  const token = tokenBody.token;

  for (let i = 0; i < artists.length; i++) {
    const artist = artists[i];
    const channel = artist[headers.indexOf("YouTube Channel")];
    if (!channel || !channel.includes("youtube.com")) continue;
    const channelID = channel.split("/").pop();
    const requestUrl = `https://www.googleapis.com/youtube/v3/channels?part=statistics&${
      channelID.startsWith("UC")
        ? "id="
        : channelID.startsWith("@")
        ? "forHandle="
        : "forUsername="
    }${channelID}&access_token=${token}`;

    // eslint-disable-next-line no-undef
    const response = UrlFetchApp.fetch(requestUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = JSON.parse(response.getContentText());
    if (!json.items || !json.items[0]) continue;
    const stats = json.items[0].statistics;
    const subs = stats.subscriberCount;
    const views = stats.viewCount;
    // eslint-disable-next-line no-unused-vars
    const videos = stats.videoCount;
    sheet.getRange(i + 2, headers.indexOf("Subs") + 1).setValue(subs);
    sheet.getRange(i + 2, headers.indexOf("Views") + 1).setValue(views);
  }
}

// eslint-disable-next-line no-unused-vars
function onOpen() {
  // eslint-disable-next-line no-undef
  const ui = SpreadsheetApp.getUi();
  ui.createMenu("Update").addItem("Update YouTube Stats", "updateYT").addToUi();
}
