import styled, { css } from "styled-components";

export const StyledSectionHeading = styled.h2`
  font-size: 20px;
  font-weight: 400;
  -ms-flex-preferred-size: auto;
  flex-basis: auto;
  margin: 0 0 2.5rem;
  padding: 0;
  line-height: 1;
  position: absolute;
  top: calc(38px - 0.5em);
  left: 75px;
  z-index: 1;

  &:after {
    background: #161616;
    content: "";
    position: absolute;
    top: 0;
    left: -1em;
    bottom: 0;
    right: -1em;
    z-index: -1;
  }

  @media (max-width: 768px) {
    -ms-flex-preferred-size: auto !important;
    flex-basis: auto !important;
    font-size: 1rem;
    padding: 0 !important;
    left: 10vw;
    top: calc(5vw - 0.5em);
  }
`;

export const StyledSection = styled.section`
  position: relative;
  outline: 1px solid;
  outline-offset: -38px;
  padding: 90px 75px 60px 75px;

  @media screen and (max-width: 767px) {
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    outline-offset: -5vw;
    padding: 15vw 10vw;
  }
`;

export const StyledSectionBlue = styled(StyledSection)`
  outline: 1px solid #88f6fd;

  ${StyledSectionHeading} {
    color: #88f6fd;
  }
`;

export const StyledSectionGreen = styled(StyledSection)`
  outline: 1px solid #83c487;

  ${StyledSectionHeading} {
    color: #83c487;
  }
`;

export const StyledSectionOrange = styled(StyledSection)`
  outline: 1px solid #d77a05;

  ${StyledSectionHeading} {
    color: #d77a05;
  }
`;

export const StyledSectionList = styled.div`
  -ms-flex-line-pack: start;
  align-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: none;

  @media (max-width: 767px) {
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
  }
`;

export const StyledSectionListItem = styled.div`
  margin: 0;
  padding: 0 0 3em;
  ${props => {
    return (
      !props.fill &&
      css`
        -ms-flex-item-align: start;
        align-self: flex-start;
        -webkit-box-flex: 0;
        flex: 0 1 30%;
      `
    );
  }}

  ${props => {
    return (
      props.fill &&
      css`
        font-size: 1.2rem;
      `
    );
  }}
`;

export const StyledSectionListItemTitle = styled.h3`
  color: #808080;
  display: block;
  margin: 0 0 1em;
  font-size: 0.9em;
  font-weight: 400;

  a,
  span {
    margin-right: 0.25em;
    border-bottom: 1px dotted currentColor;

    ${StyledSectionBlue} & {
      color: #88f6fd;
    }

    ${StyledSectionGreen} & {
      color: #83c487;
    }
  }
`;

export const StyledSectionListItemDetail = styled.div`
  color: #ccc;
  font-size: 0.75em;
  line-height: 1.5;
`;
