export const SHOW_MYITEMS = "SHOW_MYITEMS";
export const SHOW_FILTERS = "SHOW_FILTERS";
export const SHOW_TOOLS = "SHOW_TOOLS";

export const showMyItems = disabledTabs => ({
  type: SHOW_MYITEMS,
  disabledTabs
});

export const showFilters = disabledTabs => ({
  type: SHOW_FILTERS,
  disabledTabs
});

export const showTools = disabledTabs => ({
  type: SHOW_TOOLS,
  disabledTabs
});
