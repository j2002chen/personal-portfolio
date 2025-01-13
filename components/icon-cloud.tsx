import React from "react";
import { fetchSimpleIcons, Cloud } from "react-icon-cloud";
import { renderCustomIcon, cloudProps } from "../pages/index";
import { useTheme } from "../hooks/use-theme";

export type DynamicCloudProps = {
  iconSlugs: string[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

/*************  ✨ Codeium Command ⭐  *************/
/**
 * DynamicCloud component fetches and displays a cloud of icons based on provided slugs.
 * It uses the `react-icon-cloud` library to render icons and relies on the current theme color.
 * 
 * Props:
 * - iconSlugs: An array of strings representing the slugs of icons to be fetched and displayed.
 * 
 * The component fetches icon data asynchronously and updates its state. It then renders the icons
 * using a custom renderer, applying the current theme's color.
 */

/******  10bb2199-3563-46a6-8b64-bcc328eb8692  *******/
export const DynamicCloud = (props: DynamicCloudProps) => {
  const { color } = useTheme();
  const [data, setData] = React.useState<IconData>();
  React.useEffect(() => {
    fetchSimpleIcons({ slugs: props.iconSlugs }).then(setData);
  }, [props.iconSlugs]);
  const renderedIcons = React.useMemo(() => {
    if (!data) {
      return null;
    }

    const icons = [];
    for (const k of Object.keys(data.simpleIcons)) {
      icons.push(data.simpleIcons[k]);
    }

    return icons.map((i) => renderCustomIcon(i, color));
  }, [data, color]);

  return <Cloud {...cloudProps}>{renderedIcons}</Cloud>;
};
