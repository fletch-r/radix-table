import React from 'react'

function MediumRowDensityIcon({ className }: { className?: string }) {
  return (
    <svg className={className} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="TableRowsIcon">
        <path d="M21,8H3V4h18V8z M21,10H3v4h18V10z M21,16H3v4h18V16z"></path>
    </svg>
  )
}

export default MediumRowDensityIcon