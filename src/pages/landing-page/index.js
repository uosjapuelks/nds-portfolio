import {LayoutDesktop} from "../../components/layout";
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
