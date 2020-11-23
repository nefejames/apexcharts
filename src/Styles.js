import Styled from 'styled-components';

export const Container = Styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 0;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
`
export const Card = Styled.div`
  border-radius: 5px;
  padding: .5rem;
  box-shadow: 10px 10px 40px rgba(153, 153, 153, 0.3)
`   