import React from 'react'
import styled from 'styled-components'

function Button({ name, icon, onClick, bPad, bRad, bg, color }) {
  return (
    <button
      type="submit"   // ✅ add this
      style={{
        padding: bPad,
        borderRadius: bRad,
        background: bg,
        color: color,
        border: 'none',
        outline: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      {icon}
      {name}
    </button>
  );
}




export default Button