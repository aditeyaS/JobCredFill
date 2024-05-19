import { useEffect, useState } from "react";
import Home from "./components/Home";
import Settings from "./components/Settings";
import TopBar from "./components/TopBar";
import { UserDataModel, dummyUserData } from "./model/UserData";
import store from "./const/store";

const App = () => {
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserDataModel>(dummyUserData);

  useEffect(() => {
    const savedUserData = localStorage.getItem(store.USER_DATA);
    if (savedUserData) {
      const data: UserDataModel = JSON.parse(savedUserData);
      setUserData(data);
    }
  }, []);

  const onUpdateData = (newUserData: UserDataModel) => {
    setUserData(newUserData);
    localStorage.setItem(store.USER_DATA, JSON.stringify(newUserData));
    setShowSettings(false);
  };

  return (
    <div className="w-80 p-5 bg-base-100">
      <TopBar />
      {showSettings ? (
        <Settings data={userData} updateData={onUpdateData} />
      ) : (
        <Home data={userData} showSettings={() => setShowSettings(true)} />
      )}
    </div>
  );
};

export default App;
