import React from 'react'

function ThinRowDensityIcon({ className }: { className?: string }) {
  return (
    <svg className={className} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ViewHeadlineIcon">
        <path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"></path>
    </svg>
  )
}

export default ThinRowDensityIcon;