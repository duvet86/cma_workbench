export const DELAY_START = "DELAY_START";
export const DELAY_END = "DELAY_END";

export const startDelay = () => ({
  type: DELAY_START
});

export const endDelay = () => ({
  type: DELAY_END
});
