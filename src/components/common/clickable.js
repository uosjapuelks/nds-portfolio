import styled from 'styled-components'

const Themed = styled.a`
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1.25rem;
  background: #E1E8EF;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    background: linear-gradient(127deg, #A4508B 0%, #E1E8EF 100%);
  }
  
  &:active {
    background: linear-gradient(127deg, #A4508B 0%, #400B83 100%);
  }
`

const DownRes = styled.a`
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1.25rem;
  background: #E1E8EF;
  text-decoration: none;
  background: linear-gradient(127deg, #A4508B 0%, #400B83 100%);

  &:hover {
    cursor: pointer;
    background: linear-gradient(127deg, #A4508B 0%, #036550 100%);
  }

`

const Maincard = styled.div`
  margin: .4rem auto auto 2%;
  width: auto;
  height: 80vh;
  min-height: 44.7rem;
  flex-shrink: 0;
  border-radius: 1.25rem;
  background: #FFF;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.25);
  padding: 0 3.75rem;
`

export {Themed, DownRes, Maincard};

// #810e3a
// #a48851