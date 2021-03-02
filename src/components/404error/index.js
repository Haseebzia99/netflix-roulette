import React from 'react';
import defaultErrorImage from "../../assets/images/not-available.jpg";


export function Error() {
        return (
            <div>
                <h1>This is a 404 error</h1>
                <img src={defaultErrorImage} alt="error"/>
            </div>
        );
    };

