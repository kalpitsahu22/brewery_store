import styled from "styled-components";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  margin-left: 20px;
  padding: 0.5rem 1.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-600);
  }
`;

export default ButtonIcon;
