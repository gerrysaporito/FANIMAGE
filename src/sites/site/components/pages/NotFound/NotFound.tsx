import React from "react";

// import NOT_FOUND_IMAGE from "../../../../../common/images/other/404NotFound/404NotFoundImage.png";
// import NOT_FOUND_BLOBS from "../../../../../common/images/other/404NotFound/404NotFoundBlobs.png";
import NotFoundHooks from "./NotFoundHooks";

const Login: React.FunctionComponent = () => {
    const { goBack } = NotFoundHooks();

    const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        goBack();
    };

    return (
        <section className="not-found">
            <div className="not-found--container clearfix">
                {/* <img src={NOT_FOUND_BLOBS} alt="Not Found Blobs" className="not-found--blobs" /> */}

                <div className="not-found--logo-container">
                    <div className="not-found--image-block">
                        {/* <img src={NOT_FOUND_IMAGE} alt="Not Found Image" className="not-found--image" /> */}
                        <button className="not-found--back-button button button--primary" onClick={onClick}>GO BACK</button>
                    </div>
                </div>

            </div>
        </section >
    );
};

export default Login;
