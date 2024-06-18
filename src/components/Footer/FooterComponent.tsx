import './footer.css'
import {Link} from "@chakra-ui/react";
import {Footer} from "flowbite-react";

const FooterComponent = () => {
    return (
        <div className="footer">
            <Footer>
                <Link href={"/imprint"}>Impressum</Link>&nbsp;
                <Link href={`mailto:adatid20@htl-kaindorf.at`}>Contact us</Link>
                <Footer.Copyright by=" RiskyRoads" year={2024}/>
            </Footer>
        </div>
    );
};

export default FooterComponent;
