import styled from 'styled-components'

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  & > ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding: 0;

    & > li {
      padding: 10px;

      a {
        font-size: 16px;
        text-decoration: none;
      }
    }
  }
`

export default {}
