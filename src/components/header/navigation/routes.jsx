import { login_logo, settings_logo } from "../../../assets";

export const routes = [
    {
      title: "Жестово-русский словарь",
      href: "/",
    },
    {
      title: "Русско-жестовый словарь",
      href: "/rus",
    }
  ];
  
export const iconsRoutes = [
    {
        Icon: login_logo,
        title: "Login",
        href: '/login'
    },
    {
        Icon: settings_logo,
        title: "Settings",
        href: '/settings'
    }
]