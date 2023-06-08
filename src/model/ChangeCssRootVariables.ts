import { Theme } from "../context/ThemeContext";

export const ChangeCssRootVariables = (theme: Theme ) => {
  const root = document.querySelector(':root') as HTMLElement;

    const components = [
      'body-background',
      'main-component-background-image',
      'week-component-background-image',
      'text-color',
    ];

    components.forEach(component => {
      root.style.setProperty(
        `--${component}-default`,
        `var(--${component}-${theme})`
      )
    })
}