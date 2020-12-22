import React from "react";

import GeneralContactForm from "../../../containers/forms/GeneralContactForm/GeneralContactForm";

// import BLOB_1 from "../../../../../common/images/other/Contact/blob.png";
// import IMAGE_ASSET from "../../../../../common/images/other/Contact/contact-icon.png";
import { THEME_TYPES } from "../../../../../store/actions/theme";
import { GENERAL_CONTACT_FORM_TYPES } from "../../../containers/forms/GeneralContactForm/GeneralContactFormHooks";

interface IContactUsComponentProps {
    themeType: string;
}

const ContactUs: React.FunctionComponent<IContactUsComponentProps> = (props: IContactUsComponentProps) => {
    return (
        <section className="contact-us">
            <div className="contact-us--assets">
                <h1 className="contact-us--header">Get In Touch</h1>
                {/* <img className="contact-us--image-asset" src={image} alt="Person standing next to speech bubbles" /> */}
                {/* <img className="contact-us--blob" src={BLOB_1} alt="Green blob" /> */}
            </div>
            <div className="contact-us--form">
                <div className="form--card-width">
                    <GeneralContactForm type={GENERAL_CONTACT_FORM_TYPES.GENERAL} />
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
