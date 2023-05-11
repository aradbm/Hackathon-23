import { styled } from "@mui/system";

const GlobalStyle = styled("div")(({ theme }) => ({
  "&, & *": {
    boxSizing: "border-box",
  },
  "html, body": {
    height: "100%",
  },
  body: {
    margin: 0,
    background: `linear-gradient(45deg, #f4f1de, #e07a5f, #3d405b, #81b29a, #f2cc8f) !important`,
    fontFamily: "sans-serif",
    fontWeight: 100,
  },
}));

const Wrapper = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  background: `linear-gradient(45deg, ${theme.palette.primary.main}88, ${theme.palette.secondary.main}88)`,
}));

export { GlobalStyle, Wrapper };
