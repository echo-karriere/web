import { createGlobalStyle } from "styled-components";
import { math } from "polished";

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

ul, ol {
  margin-left: ${props => props.theme.size.spacing};
}

li {
  > ul,
  > ol {
    margin-bottom: 0;
  }
}

a {
  color: ${props => props.theme.color.brandColor};
  text-decoration: none;

  &:visited {
    color: ${props => props.theme.color.brandColorDarkened};
  }

  &:hover, &:focus {
    text-decoration: underline;
  }
}

blockquote {
  border-left: 4px solid ${props => props.theme.color.greyLightened};
  color: ${props => props.theme.color.grey};
  font-size: 18px;
  font-style: italic;
  letter-spacing: -1px;
  padding-left: ${props => math(`${props.theme.size.spacing} / 2`)};

  > :last-child {
    margin-bottom: 0;
  }

  pre, code {
    color: ${props => props.theme.color.textColor};
  }
}

hr {
  background-color: ${props => props.theme.color.greyLightened};
  border: 0;
  height: 4px;
  margin: ${props => math(`${props.theme.size.spacing} / 2`)} 0;
}
`;

export default GlobalStyle;
