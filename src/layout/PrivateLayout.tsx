import { useState, useCallback, FunctionComponent, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";
import { AppIconButton, ErrorBoundary } from "../components";
import { LinkToPage } from "../utils/type";
import { useOnMobile } from "../hooks/layout";
import {
  SIDE_BAR_DESKTOP_ANCHOR,
  SIDE_BAR_MOBILE_ANCHOR,
  SIDE_BAR_WIDTH,
  TOP_BAR_DESKTOP_HEIGHT,
  TOP_BAR_MOBILE_HEIGHT,
} from "./config";
import TopBar from "src/layout/TopBar";
import SideBar from "src/layout/SideBar";
import FilterBar from "src/components/modules/filterBar/filterBar";
import JobListingsGrid from "src/components/modules/jobListingsGrid/jobListingsGrid";

const TITLE_PRIVATE = "Find Ranch Jobs";

/**
 * SideBar navigation items with links
 */
const SIDE_BAR_ITEMS: Array<LinkToPage> = [
  {
    title: "Home",
    path: "/",
    icon: "home",
  },
  {
    title: "Profile (404)",
    path: "/user",
    icon: "account",
  },
  {
    title: "About",
    path: "/about",
    icon: "info",
  },
];

if (process.env.REACT_APP_DEBUG === "true") {
  SIDE_BAR_ITEMS.push({
    title: "[Debug Tools]",
    path: "/dev",
    icon: "settings",
  });
}

/**
 * Renders "Private Layout" composition
 * @layout PrivateLayout
 */
const PrivateLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const navigation = useNavigate();
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const onMobile = useOnMobile();

  // Variant 2 - Sidebar is drawer on mobile and desktop
  const sidebarOpen = sideBarVisible;
  const sidebarVariant = "temporary";

  const title = TITLE_PRIVATE;
  document.title = title; // Also Update Tab Title

  const onLogoClick = useCallback(() => {
    // Navigate to first SideBar's item or to '/' when clicking on Logo/Menu icon when SideBar is already visible
    navigation(SIDE_BAR_ITEMS?.[0]?.path || "/");
  }, [navigation]);

  const onSideBarOpen = () => {
    if (!sideBarVisible) setSideBarVisible(true); // Don't re-render Layout when SideBar is already open
  };

  const onSideBarClose = () => {
    if (sideBarVisible) setSideBarVisible(false); // Don't re-render Layout when SideBar is already closed
  };

  return (
    <Stack
      direction="column"
      sx={{
        minHeight: "100vh",
        paddingTop: onMobile ? TOP_BAR_MOBILE_HEIGHT : TOP_BAR_DESKTOP_HEIGHT,
        paddingLeft: sidebarOpen && SIDE_BAR_DESKTOP_ANCHOR.includes("left") ? SIDE_BAR_WIDTH : 0,
        paddingRight: sidebarOpen && SIDE_BAR_DESKTOP_ANCHOR.includes("right") ? SIDE_BAR_WIDTH : 0,
      }}
    >
      <Stack component="header">
        <TopBar
          startNode={<AppIconButton icon="logo" onClick={sidebarOpen ? onLogoClick : onSideBarOpen} />}
          title={title}
        />
        <FilterBar />
        <JobListingsGrid />
        <SideBar
          anchor={onMobile ? SIDE_BAR_MOBILE_ANCHOR : SIDE_BAR_DESKTOP_ANCHOR}
          open={sidebarOpen}
          variant={sidebarVariant}
          items={SIDE_BAR_ITEMS}
          onClose={onSideBarClose}
        />
      </Stack>
      <Stack
        component="main"
        sx={{
          flexGrow: 1, // Takes all possible space
          paddingLeft: 1,
          paddingRight: 1,
          paddingTop: 1,
        }}
      >
        <ErrorBoundary name="Content">{children}</ErrorBoundary>
      </Stack>
    </Stack>
  );
};

export default PrivateLayout;
