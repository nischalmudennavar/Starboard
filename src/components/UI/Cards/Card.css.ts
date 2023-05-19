import { style } from "@vanilla-extract/css";
import { vars } from "../../../styles/vars.css";

export const cardStyle = style({
  textAlign: "left",
  borderRadius: vars.styleTheme.borderRadiusOuter,
  background: vars.styleTheme.backgroundSecondary,
  minHeight: "12px",
  maxWidth: "30%",
  padding: "1%",
  margin: "1%",
});
