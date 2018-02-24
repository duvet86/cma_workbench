import {
  SHOW_MYITEMS,
  SHOW_FILTERS,
  SHOW_TOOLS
} from "sideBar/navigationTabs/actions";

function navigationTabs(
  state = {
    visibleTab: 0
  },
  action
) {
  switch (action.type) {
    case SHOW_MYITEMS:
      return {
        visibleTab: 0
      };

    case SHOW_FILTERS:
      return {
        visibleTab: 1
      };
    case SHOW_TOOLS:
      return {
        visibleTab: 2
      };

    default:
      return state;
  }
}

export default navigationTabs;
