import links from "../const/links";
import { UserDataModel } from "../model/UserData";

export default async function (tabId: number, url: string) {
  let response = "";
  let responseSuccess = false;
  const storage = await chrome.storage.local.get("user-data");
  const userData: UserDataModel = JSON.parse(storage["user-data"]);
  console.log("sending message");
  if (url.includes(links.WORKDAY)) {
    response = await chrome.tabs.sendMessage(tabId, {
      action: "fill-workday",
      userData: userData,
    });
    responseSuccess = true;
    // response = `${count} fields filled`;
  } else {
    response = "Page not supported";
  }
  return { response, responseSuccess };
}
