import React, { createElement } from "react";
import { Tab, Tabs } from "@mui/material";
import RelevantTabContent from "./relevant/RelevantTabContent";
import FriendsTabContent from "./friends/FriendsTabContent";
import styles from "./HomeContent.module.scss";

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
      disabled: true,
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
    <div className={`${styles.wrapper} app__background-config-1`}>
      <div className="py-6"></div>
      <Tabs
        id={styles["home-content__tabs"]}
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
      <div className={styles.divider}></div>
      {tabs.map((t, i) => (
        <div
          role="tabpanel"
          hidden={i !== tab}
          key={`tabpanel-${i}`}
          id={`tabpanel-${i}`}
          aria-labelledby={t.id}
        >
          {createElement(t.component)}
        </div>
      ))}
      <div className="py-10"></div>
    </div>
  );
}

export default HomeContent;
