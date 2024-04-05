import React, {createElement} from "react";
import "./NavigationItem.scss";
import {AppRoute} from "../../core/Routes";
import {SvgIconComponent} from "@mui/icons-material";
import {ButtonBase, Card} from "@mui/material";
import {useNavigate} from "react-router-dom";

interface NavigationItemProps {
  route: AppRoute,
  selected?: boolean,
}

export default function NavigationItem(props: NavigationItemProps) {
  const navigate = useNavigate()
  const {route, data} = props.route

  const Icon = (icon: SvgIconComponent | undefined) => {
    if (icon != null) return createElement(icon)
  }

  const goTo = (path?: string) => {
    if (!path) return
    navigate(path)
  }

  return (
    <>
    <ButtonBase
      className={`wrapper ${data.disabled ? 'disabled' : 'hover-darken'}`}
      disabled={data.disabled}
      onClick={() => goTo(route.path)}
    >
      <Card className={"background-fill"} elevation={0}>
        <div>{Icon(data.icon)}</div>
        <div>{data.title}</div>
      </Card>
    </ButtonBase>
    </>
  )
}