import { style } from "@vanilla-extract/css";

import { SPACING_UNIT } from "../../theme.css";

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: `${SPACING_UNIT}px`,
});

export const description = style({
  marginBottom: `${SPACING_UNIT * 2}px`,
});
