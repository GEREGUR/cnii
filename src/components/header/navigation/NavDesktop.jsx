import { routes } from "./routes";


export const NavDesktop = () => {
  return (
    <ul className="flex items-center gap-5 text-xs font-thin">
      {routes.map((route) => {
        const {href, title } = route;
        return (
          <li key={title}>
            <a
              href={href}
              className="flex items-center gap-1 text-[#728796] hover:text-[#3EA2FF] transition-all duration-300"
            >
              <strong>{title}</strong>
            </a>
          </li>
        );
      })}
    </ul>
  );
};