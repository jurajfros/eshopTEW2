import styled from "@emotion/styled";

const CartButton = styled.div`
  cursor: pointer;
  border: none;
  color: grey;
  padding: 0.5rem 1rem;
  font-weight: 700;
  font-size: 1.1rem;
  transition: background-color 0.7s ease-out;
  border-radius: 10px;

  &:hover,
  :active {
    background-color: #7ad3ff;
  }
`;

export default CartButton;
