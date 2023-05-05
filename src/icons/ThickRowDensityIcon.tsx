import React from 'react'

function ThickRowDensityIcon({ className }: { className?: string }) {
  return (
    <svg className={className} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ViewStreamIcon">
        <path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"></path>
    </svg>
  )
}

export default ThickRowDensityIcon;