export const MYITEMS_SHOW = "MYITEMS_SHOW";
export const FILTERS_SHOW = "FILTERS_SHOW";
export const TOOLS_SHOW = "TOOLS_SHOW";

export const showMyItems = tabsState => ({
  type: MYITEMS_SHOW,
  tabsState
});

export const showFilters = tabsState => ({
  type: FILTERS_SHOW,
  tabsState
});

export const showTools = tabsState => ({
  type: TOOLS_SHOW,
  tabsState
});
