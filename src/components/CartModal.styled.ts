import styled from "styled-components";

export const CartProductRow = styled.div`
  padding: 10px;
  display: flex;
  margin: 10px;
`;

export const CartProductInfo = styled.div`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  display: flex;
`;

export const CartProductDesc = styled.div`
  color: #b1afad;
  padding: 10px;
`;

export const CartProductImage = styled.div`
  align-items: center;
  padding: 15px 15px 15px 15px;
  img {
    width: 120px;
    height: 120px;
  }
`;

export const CartProductTitle = styled.div`
  margin-top: 15px;
  padding: 10px;
`;

export const CartProductPrice = styled.div`
  display: flex;
  color: black;
  justify-content: center;

  span {
    padding: 0px 3px;
  }
`;
export const CartProductCount = styled.div`
  padding: 10px;
  color: black;
`;

export const CartButtonsWrapper = styled.div`
  padding: 10px;
`;
export const CartCount = styled.div`
  display: inline-block;
`;

// export const CheckOutWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
// `;
