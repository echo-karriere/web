import styled from "styled-components";

interface LinkProps {
  isWhite?: boolean;
  underlineOnHover?: boolean;
}

const Link = styled.a`
    text-decoration: ${(props: LinkProps) =>
      props.underlineOnHover ? "none" : "underline"}

    :link, :visited, :hover, :active {
        color: ${(props: LinkProps) => (props.isWhite ? "white" : "unset")}
    }

    :hover {
        text-decoration: ${(props: LinkProps) =>
          props.underlineOnHover ? "underline" : "unset"}
    }
`;

export default Link;
