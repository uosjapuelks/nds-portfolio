import {LayoutDesktop, LayoutMobile} from "../../components/layout";
import {NavCard} from "../../components/layout/navcard";
import {Outlet} from "react-router-dom";
import {useWindowDimensions} from "../../utils/App";


const Layout = (props) => {
    const { height, width } = useWindowDimensions();
    const ChosenLayout = (width > 750 ? LayoutDesktop : LayoutMobile);
    console.log(width);
    return (
        <ChosenLayout>
            <div>
                {props.children}
            </div>
        </ChosenLayout>
)
};

export const LandingPage = (props)=> {
    return (
        <Outlet/>
    )
}

export { Layout };
