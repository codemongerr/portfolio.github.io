import styled, {css} from 'styled-components';

// Creates the container to wrap banner icons
export const SocialIconList = styled.div`
  ${({gutterBottom}) => css`
    margin-top: 10px;
    overflow: hidden;

    ${gutterBottom &&
    css`
      margin-bottom: 1rem;
    `}
  `}
`;

// Creates the styled wrapper to contain icon
export const SocialIcon = styled.a`
  font-size: 1.7em;
  margin-right: 2rem;
  transition: color 0.3s, color 0.3s;
  display: inline-block;
  position: relative;
  color: var(--color-white);

  &:hover {
    color: var(--color-primary-alt);
  }
`;
