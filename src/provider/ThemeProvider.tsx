import { ReactNode, useState } from "react"
import { Theme, ThemeContext } from "../context/ThemeContext"
import { ChangeCssRootVariables } from "../model/ChangeCssRootVariables";
import { storage } from "../model/Storage";

interface Props {
  children: ReactNode
}

export const ThemeProvider = ({children, ...props}: Props) => {
  const [theme, setTheme] = useState<Theme>(storage.getItem('theme') || Theme.LIGHT );

  ChangeCssRootVariables(theme);

  const changeTheme = (theme: Theme) => {
    storage.setItem('theme', theme)
    setTheme(theme);
    ChangeCssRootVariables(theme);
  }

  return <ThemeContext.Provider value={{
    theme,
    changeTheme
  }}
  {...props}
  >
    {children}
    </ThemeContext.Provider>
}