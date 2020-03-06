import { createGlobalStyle } from "styled-components";
import c from "./constants";

const GlobalStyle = createGlobalStyle`
table {
  margin: 0 0 20px 0;
  text-align: left;
  width: 100%;
}
img {
  max-width: 100%;
  vertical-align: middle;
}
figure > img {
  display: block;
}
figcaption {
  font-size: $small-font-size;
}
ul, ol {
  margin-left: ${c.size.spacingUnit}px;
}
li {
  > ul,
  > ol {
    margin-bottom: 0;
  }
}
a {
  color: ${c.color.brandColor};
  text-decoration: none;
  &:visited {
    color: darken($brand-color, 10%);
  }
  &:hover, &:focus {
    text-decoration: underline;
  }
}
blockquote {
  border-left: 4px solid lighten(${c.color.grey}, 45%);
  color: ${c.color.grey};
  font-size: 18px;
  font-style: italic;
  letter-spacing: -1px;
  padding-left: ${c.size.spacingUnit / 2}px;
  > :last-child {
    margin-bottom: 0;
  }
  pre, code {
    color: ${c.color.textColor};
  }
}
hr {
  background-color: lighten(${c.color.grey}, 45%);
  border: 0;
  height: 4px;
  margin: ${c.size.spacingUnit / 2} 0;
}
`;

export default GlobalStyle;
