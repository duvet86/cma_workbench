import {
  MYITEMS_SHOW,
  FILTERS_SHOW,
  TOOLS_SHOW
} from "sideBar/navigationTabs/actions";

function navigationTabs(
  // Only myItems enabled at the beginning.
  // Suppose we are on "/".
  state = {
    selectedTab: 0,
    tabsState: [false, true, true]
  },
  action
) {
  const tabsState = action.tabsState || state.tabsState;

  switch (action.type) {
    case MYITEMS_SHOW:
      return {
        selectedTab: 0,
        tabsState
      };

    case FILTERS_SHOW:
      return {
        selectedTab: 1,
        tabsState
      };
    case TOOLS_SHOW:
      return {
        selectedTab: 2,
        tabsState
      };

    default:
      return state;
  }
}

export default navigationTabs;
