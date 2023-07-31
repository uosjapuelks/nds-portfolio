import logo from "../../logo.svg";
import {LayoutDesktop} from "../../components/layout";
import {ContentCard} from "../../components/layout/info";
import {NavCard} from "../../components/layout/navcard";


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

export { Layout };
