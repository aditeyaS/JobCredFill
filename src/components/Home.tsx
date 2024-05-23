import { useState } from "react";
import { UserDataModel } from "../model/UserData";
import sendMessage from "../service/sendMessage";

interface HomeProps {
  showSettings: () => void;
  data: UserDataModel;
}

const Home = ({ showSettings, data }: HomeProps) => {
  const [copiedLabel, setCopiedLabel] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [responseSuccess, setResponseSuccess] = useState<boolean>(false);

  const onOpenSettings = () => {
    showSettings();
  };

  const onCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLabel(label);
    setTimeout(() => setCopiedLabel(""), 500);
  };

  const onFill = async () => {
    const [tab] = await chrome.tabs.query({
      active: true,
      lastFocusedWindow: true,
    });
    if (tab && tab.id && tab.url) {
      const { response: res, responseSuccess: resSuccess } = await sendMessage(
        tab.id,
        tab.url
      );
      setResponse(res);
      setResponseSuccess(resSuccess);
      setTimeout(() => setResponse(""), 1500);
    }
  };

  return (
    <div className="w-full flex flex-col gap-2 justify-stretch">
      <div className="flex flex-col">
        <span className="text-xs">Email</span>
        <span
          className={`text-sm ${
            copiedLabel === "email" ? "text-base-200" : ""
          }`}
          onClick={() => onCopy(data.email, "email")}
        >
          {data.email}
        </span>
      </div>
      <div className="flex flex-col">
        <span className="text-xs">Password</span>
        <span
          className={`text-sm ${
            copiedLabel === "password" ? "text-base-200" : ""
          }`}
          onClick={() => onCopy(data.password, "password")}
        >
          {"*".repeat(data.password.length)}
        </span>
      </div>
      <div className="flex flex-row justify-end">
        <button
          className="btn-xs btn-base-200 text-accent"
          onClick={onOpenSettings}
        >
          Incorrect data? Update it.
        </button>
      </div>
      {response == "" ? (
        <></>
      ) : (
        <div
          className={`${
            responseSuccess
              ? "bg-success text-success-content"
              : "bg-error text-error-content"
          } flex justify-center mt-2`}
        >
          <span className="text-xs p-0.5">{response}</span>
        </div>
      )}
      <button
        className="btn btn-active btn-accent btn-sm text-base-100 text-xs"
        onClick={onFill}
      >
        Fill credentials
      </button>
    </div>
  );
};

export default Home;
