import { useState } from "react";
import { UserDataModel } from "../model/UserData";

interface SettingsProps {
  data: UserDataModel;
  updateData: (data: UserDataModel) => void;
}

const Settings = ({ data, updateData }: SettingsProps) => {
  const [userData, setUserData] = useState<UserDataModel>(data);

  const onSave = () => {
    updateData(userData);
  };

  return (
    <div className="w-full flex flex-col gap-1 justify-stretch">
      <label className="form-control">
        <span className="label-text">Email</span>
        <input
          type="text"
          className="input input-sm input-bordered"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
      </label>
      <label className="form-control">
        <span className="label-text">Password</span>
        <input
          type="password"
          className="input input-sm input-bordered"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
      </label>
      <div className="bg-info flex justify-center mt-2">
        <span className="text-xs p-0.5">
          We donot save anything on our servers
        </span>
      </div>
      <button className="btn btn-accent btn-sm" onClick={onSave}>
        Save
      </button>
    </div>
  );
};

export default Settings;
