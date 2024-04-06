import {createBrowserRouter, RouteObject} from "react-router-dom";
import {
  AccountCircleOutlined,
  AddBoxOutlined,
  HomeOutlined, MessageOutlined, NotificationsOutlined,
  SearchOutlined,
  SvgIconComponent
} from "@mui/icons-material";
import HomeRouteElement from "../components/routes/home/HomeRouteElement";
import AccountContent from "../components/routes/account/AccountContent";

interface AppRouteData {
  title: string,
  icon?: SvgIconComponent,
  disabled?: boolean,
}

export interface AppRoute {
  route: RouteObject,
  data: AppRouteData,
}

export const routes: AppRoute[] = [
  {
    route: {
      path: '/',
      element: HomeRouteElement(),
    },
    data: {
      title: 'Home',
      icon: HomeOutlined,
    }
  },
  {
    route: {
      path: '/search'
    },
    data: {
      title: 'Search',
      icon: SearchOutlined,
      disabled: true
    }
  },
  {
    route: {
      path: '/notifications'
    },
    data: {
      title: 'Notifications',
      icon: NotificationsOutlined,
      disabled: true
    }
  },
  {
    route: {
      path: '/messages'
    },
    data: {
      title: 'Messages',
      icon: MessageOutlined,
      disabled: true
    }
  },
  {
    route: {
      path: '/account',
      element: AccountContent()
    },
    data: {
      title: 'Account',
      icon: AccountCircleOutlined,
    }
  },
  {
    route: {
      path: 'create-post'
    },
    data: {
      title: 'Create Post',
      icon: AddBoxOutlined,
      disabled: true
    }
  }
]

export const router = createBrowserRouter(
  routes.reduce((acc: RouteObject[], r): RouteObject[] => {
    acc.push(r.route)
    return acc
  }, [])
)