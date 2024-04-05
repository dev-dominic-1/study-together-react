import React from "react";
import {Tabs, Tab, Typography} from "@mui/material";
import RelevantTabContent from "./relevant/RelevantTabContent";
import FriendsTabContent from "./friends/FriendsTabContent";

export default function Home() {

  interface Tab {
    id: string,
    label: string,
    component: () => JSX.Element
  }

  const tabs: Tab[] = [
    {id: 'home__relevant-tab', label: 'Relevant', component: RelevantTabContent},
    {id: 'home__friends-tab', label: 'Friends', component: FriendsTabContent}
  ]

  // const [tab, setTab] = React?.useState(1)
  let tab = 1
  function handleSetTab(e: React.SyntheticEvent, v: number) {
    tab = v
  }

  return (
    <>
      <Tabs value={tab} onChange={handleSetTab}>
        {tabs.map(({id, label}, i) => (
          <Tab id={id} key={id} label={label} tabIndex={i}  />
        ))}
      </Tabs>
    </>
  )
}