import { SvgIcon, SvgIconProps } from "@mui/material";
import "./footer.scss"

const Footer = () => {

    function HomeIcon(props: SvgIconProps) {
        return (
            <SvgIcon {...props}>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
        );
    }

    return (

        < div className="navbar" >
            <div className="logo">
                <HomeIcon color="primary" />
                <span>Shopping</span>
            </div>

            <span>💋 Aumii Desu published </span>
        </div >


    )
}

export default Footer
