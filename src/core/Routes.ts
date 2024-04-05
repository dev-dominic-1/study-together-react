import {createBrowserRouter, RouteObject, redirect, useNavigate} from "react-router-dom";
import Account from "../components/account/Account";
import {
  AccountCircleOutlined,
  AddBoxOutlined,
  HomeOutlined, MessageOutlined, NotificationsOutlined,
  SearchOutlined,
  SvgIconComponent
} from "@mui/icons-material";
import Home from "../components/home/Home";

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
      element: Home(),
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
      element: Account()
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