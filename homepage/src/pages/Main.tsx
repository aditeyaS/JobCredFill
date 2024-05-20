import { useEffect, useState } from "react";
import IssuesModel from "../model/IssuesModel";
import { Link } from "react-router-dom";
import { EXTENSION_URL } from "../const/urls";

export const github_owner = "aditeyaS";
export const github_repo = "JobCredFill";

const GITHUB_BASE_URL = `https://api.github.com/repos/${github_owner}/${github_repo}/issues`;

const Home = () => {
  const [issues, setIssues] = useState<IssuesModel[]>([]);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await fetch(GITHUB_BASE_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setIssues(json);
      } catch (error) {
        console.error(error);
        setIssues([]);
      }
    };
    fetchIssues();
  }, []);

  const onNewIssue = () => {
    window.open(
      `https://github.com/${github_owner}/${github_repo}/issues/new`,
      "_blank"
    );
  };

  const onDownloadExtension = () => {
    window.open(EXTENSION_URL, "_blank");
  };

  return (
    <div className="flex flex-col gap-10 px-28 items-center w-full">
      <span className="text-8xl text-center -rotate-1 my-10">
        Create accounts on job portals in seconds with
        <span className="text-9xl text-accent"> JobCredFill</span>
      </span>
      <div>
        <button
          className="btn btn-accent btn-lg text-base-100"
          onClick={onDownloadExtension}
        >
          Download chrome extension
        </button>
      </div>
      <div>
        <Link to="/privacy" className="text-lg underline hover:text-blue-600">
          Visit privacy policy.
        </Link>
      </div>
      <div className="flex flex-col gap-8 w-full">
        <div className="flex justify-center">
          <span className="text-2xl">Supported job boards</span>
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
          <div className="p-8 w-36 text-center border-base-content bg-sky-600 text-base-content bordered rounded border-2 flex justify-center items-center transform transition duration-500 hover:scale-125">
            Workday
          </div>
        </div>
      </div>
      <div className="mockup-browser border border-base-content bg-base-100 w-full mb-10">
        <div className="mockup-browser-toolbar">
          <div className="bg-base-200 p-2 rounded w-full flex items-center gap-2">
            <span>{`github.com/${github_owner}/${github_repo}/issues`}</span>
          </div>
        </div>
        <div className="flex flex-col p-4 bg-base-100 gap-2">
          <div className="flex justify-end">
            <button
              onClick={onNewIssue}
              className="btn btn-sm btn-success text-base-100"
            >
              Create new issue
            </button>
          </div>
          <div>
            {issues.length != 0 &&
              issues.map((issue, index) => (
                <div
                  key={index}
                  className="flex flex-col p-2 rounded hover:bg-base-300"
                >
                  <span className="text-lg">{issue.title}</span>
                  <span className="text-sm italic">
                    {issue.updated_at.toString().slice(0, 10)}
                  </span>
                </div>
              ))}
            {issues.length == 0 && (
              <div className="flex justify-center text-2xl py-10 text-base-content">
                No issues found.
              </div>
            )}
          </div>
          {issues.length != 0 && (
            <div className="text-center">
              <a
                className="text-accent underline"
                target="_blank"
                href={`https://github.com/${github_owner}/${github_repo}/issues`}
              >
                Explore issues
              </a>{" "}
              to contribute.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
