import {LayoutDesktop} from "../../components/layout";
import {NavCard} from "../../components/layout/navcard";
import {About} from "../about";
import {Outlet} from "react-router-dom";


const Layout = (props) => {
    return (
        <LayoutDesktop>
            <div>
                <NavCard/>
                {props.children}
            </div>
        </LayoutDesktop>
)
};

export const LandingPage = (props)=> {
    return (
        <Outlet/>
    )
}

export { Layout };
