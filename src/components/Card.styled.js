import styled from 'styled-components';

const StyledCard = styled.div`
  --gradient-from: rgba(55, 65, 81, 0.5);
  --gradient-to: rgb(0, 0, 0, 0);
  --gradient-stops: var(--gradient-from), transparent, var(--gradient-to);

  position: relative;
  padding: 15px 20px;
  border: 0px solid #e5e7eb;
  background-color: rgba(31, 41, 55, 0.5);
  border-radius: 8px;
  background-image: linear-gradient(to bottom left, var(--gradient-stops));
  box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px inset,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px;
`;

export default StyledCard;
