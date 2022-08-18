import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button({icon, text, action, bgColor}) {

    let textColor;
    let hover;
    switch (bgColor) {
        case "white":
            bgColor="white";
            hover="hover:bg-peachred transition hover:text-white";
            textColor="text-black";
            break;
        case "black":
            hover="hover:bg-peachred transition";
            textColor="text-white";
            break;
        default:
            bgColor="peachred"
            hover="hover:bg-deeporange transition";
            textColor="text-white";
            break;
    }

    return (
            <button className={`bg-${bgColor} ${textColor} p-2 px-4 rounded-lg ${hover}`} type={ action ? "button" : "submit"} onClick={action ? action : null}>
                {
                    icon ? <FontAwesomeIcon icon={icon} className="mr-2" /> : null
                }
                <span>{text}</span>
            </button>
    );
}