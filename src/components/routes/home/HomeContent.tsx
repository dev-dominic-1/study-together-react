import React, { createElement } from "react";
import { Tab, Tabs } from "@mui/material";
import RelevantTabContent from "./relevant/RelevantTabContent";
import FriendsTabContent from "./friends/FriendsTabContent";

function HomeContent() {
  interface Tab {
    id: string;
    label: string;
    disabled?: boolean;
    component: () => JSX.Element;
  }

  const tabs: Tab[] = [
    {
      id: "home__relevant-tab",
      label: "Relevant",
      disabled: false,
      component: RelevantTabContent,
    },
    {
      id: "home__friends-tab",
      label: "Friends",
      component: FriendsTabContent,
    },
  ];

  const [tab, setTab] = React?.useState(1);

  function handleSetTab(e: React.SyntheticEvent, v: number) {
    setTab(v);
  }

  return (
    <>
      <Tabs
        value={tab}
        onChange={handleSetTab}
      >
        {tabs.map(({ id, label, disabled }, i) => (
          <Tab
            id={id}
            key={id}
            label={label}
            disabled={!!disabled}
            tabIndex={i}
          />
        ))}
      </Tabs>
      {tabs.map((t, i) => (
        <div
          role="tabpanel"
          hidden={i !== tab}
          id="sample-tabpanel"
          aria-labelledby={t.id}
        >
          {createElement(t.component)}
        </div>
      ))}
    </>
  );
}

export default HomeContent;