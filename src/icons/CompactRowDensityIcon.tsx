import React from "react";

export default function CompactRowDensityIcon({ ...props }) {
    return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect width="100" height="16" />
            <rect y="20.75" width="100" height="16" />
            <rect y="41.5" width="100" height="16" />
            <rect y="62.25" width="100" height="16" />
            <rect y="83" width="100" height="16" />
        </svg>
    );
}