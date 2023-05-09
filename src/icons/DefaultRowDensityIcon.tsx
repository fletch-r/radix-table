import React from "react";

export default function DefaultRowDensityIcon({ ...props }) {
    return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect width="100" height="20" />
            <rect y="25.6666" width="100" height="20" />
            <rect y="51.3334" width="100" height="20" />
            <rect y="77" width="100" height="20" />
        </svg>
    );
}