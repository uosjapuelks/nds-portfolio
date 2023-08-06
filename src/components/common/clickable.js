import styled from 'styled-components'
import "../../styles/font.css"
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
  margin: .4rem 5vw 1.5vw 2vw;
  //width: 60vw;
  height: 77vh;
  min-height: 44.7rem;
  //min-width: 25rem;
  border-radius: 1.25rem;
  background: #FFF;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.25);
  padding: 0 3.75vw;
`

export const VisitGit = ({project}) => {
    return (
        <>
            <br/><br/><DownRes className="gitlink"
                               style={{padding: "0.625rem 1.25rem"}}
                               href={project.git} target="_blank"
                               style={{textDecoration:"none"}}>
            Click to visit the Github Repo</DownRes>
            <br/><br/><br/>
        </>

    )
}

export const CheckReport = (props) => {
    return (
        <>
            <br/><br/><DownRes className="gitlink"
                               style={{padding: "0.625rem 1.25rem"}}
                               href={props.src} target="_blank"
                               style={{textDecoration:"none"}}>
            {props.children}</DownRes>
            <br/><br/><br/>
        </>

    )
}

export {Themed, DownRes, Maincard};

// #810e3a
// #a48851