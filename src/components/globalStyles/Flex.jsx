import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : 'center')};
  // * eğer justify değeri tanımlanmışsa onu kullanıyoruz, eğer tanımlanmış değilse center olarak kullanıyoruz
  align-items: ${({ align }) => (align ? align : 'center')};
  // ? eğer align değeri tanımlanmışsa onu kullanıyoruz, eğer tanımlanmış değilse center olarak kullanıyoruz
  flex-wrap: ${({ wrap }) => wrap && wrap};
  
`;

export default Flex;
