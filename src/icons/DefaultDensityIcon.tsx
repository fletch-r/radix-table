import * as React from "react"

export default function DefaultDensityIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path d="M21 6.625q0 .425-.288.713T20 7.625H4q-.425 0-.713-.288T3 6.626V4q0-.425.288-.713T4 3h16q.425 0 .713.288T21 4v2.625Zm0 6.725q0 .425-.288.713T20 14.35H4q-.425 0-.713-.287T3 13.35v-2.725q0-.425.288-.713T4 9.625h16q.425 0 .713.288t.287.712v2.725ZM21 20q0 .425-.288.713T20 21H4q-.425 0-.713-.288T3 20v-2.65q0-.425.288-.713T4 16.35h16q.425 0 .713.288t.287.712V20Z"></path>
        </svg>
    )
}