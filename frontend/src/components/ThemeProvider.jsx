import { useSelector } from "react-redux";

export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div className=" bg-slate-300 text-gray-950 dark:text-gray-200 dark:bg-[rgb(2,3,17)] min-h-screen">
        {children}
      </div>
    </div>
  );
}
