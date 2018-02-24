export const SHOW_MYITEMS = "SHOW_MYITEMS";
export const SHOW_FILTERS = "SHOW_FILTERS";
export const SHOW_TOOLS = "SHOW_TOOLS";

export const showMyItems = () => ({
  type: SHOW_MYITEMS
});

export const showFilters = () => ({
  type: SHOW_FILTERS
});

export const showTools = error => ({
  type: SHOW_TOOLS
});
