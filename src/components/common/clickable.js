import styled from 'styled-components'

const Themed = styled.div`
  display: inline-flex;
  padding: 0.625rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1.25rem;
  background: linear-gradient(127deg, #A4508B 0%, #400B83 100%);

  &:hover {
    cursor: pointer;
    background: linear-gradient(127deg, #A4508B 0%, #4870ad 100%);
  }


`

export {Themed};

// #810e3a
// #a48851