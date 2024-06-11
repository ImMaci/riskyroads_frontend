import {Footer} from "flowbite-react";
import './FooterComponentCSS.css'

const FooterComponent = () => {
    return (
        <div className="root">
            <Footer container>
                <Footer.Copyright by=" RiskyRoads" year={2024} />
            </Footer>
        </div>
    );
};

export default FooterComponent;