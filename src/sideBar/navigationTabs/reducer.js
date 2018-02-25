import {
  SHOW_MYITEMS,
  SHOW_FILTERS,
  SHOW_TOOLS
} from "sideBar/navigationTabs/actions";

function navigationTabs(
  // Only myItems enabled at the beginning.
  // Suppose we are on "/".
  state = {
    visibleTab: 0,
    disabledTabs: [false, true, true]
  },
  action
) {
  const disabledTabs = action.disabledTabs || state.disabledTabs;

  switch (action.type) {
    case SHOW_MYITEMS:
      return {
        visibleTab: 0,
        disabledTabs
      };

    case SHOW_FILTERS:
      return {
        visibleTab: 1,
        disabledTabs
      };
    case SHOW_TOOLS:
      return {
        visibleTab: 2,
        disabledTabs
      };

    default:
      return state;
  }
}

export default navigationTabs;
