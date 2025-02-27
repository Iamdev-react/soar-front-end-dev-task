import React, { useState } from "react";
import ProfileForm from "../../components/ProfileSettingsForm/ProfileForm";
import SettingsTabs from "../../components/ProfileSettingsForm/SettingTabs";

const Setting: React.FC = () => {
  const tabs = ["Edit Profile", "Preferences", "Security"];
  const [activeTab, setActiveTab] = useState("Edit Profile");

  const renderContent = () => {
    if (activeTab === "Edit Profile") {
      return <ProfileForm />;
    }
    if (activeTab === "Preferences") {
      return (
        <div>
          <h2 className="text-lg font-medium mb-4">Preferences</h2>
          <p>Preferences content goes here...</p>
        </div>
      );
    }
    if (activeTab === "Security") {
      return (
        <div>
          <h2 className="text-lg font-medium mb-4">Security</h2>
          <p>Security content goes here...</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="p-4 md:p-2">
      <div className="bg-white shadow p-6 rounded-3xl">
        <SettingsTabs
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        <div>{renderContent()}</div>
      </div>
    </div>
  );
};

export default Setting;
