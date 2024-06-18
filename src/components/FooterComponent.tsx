import {Spacer, Link} from "@chakra-ui/react";
import {Footer} from "flowbite-react";

const FooterComponent = () => {
    return (
        <div className="footer" style={{background: 'black', color: 'white'}}>
            <Footer container>
                <Link ms={7} href={"/imprint"} fontFamily={"Poppins, sans-serif"}>Impressum</Link>
                <Link ms={7} href={""} fontFamily={"Poppins, sans-serif"}>Organisation</Link>
                <Link ms={7} href={""} fontFamily={"Poppins, sans-serif"}>Contact us</Link>
                <Link ms={7} href={""} fontFamily={"Poppins, sans-serif"}>Support</Link>
                <Spacer/>
                <Footer.Copyright by=" RiskyRoads" year={2024} />
            </Footer>
        </div>
    );
};

export default FooterComponent;