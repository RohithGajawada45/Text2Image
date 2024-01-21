import React from 'react';

const GlitchLoader = () => {
  const loaderStyle = {
    position: 'relative',
    fontSize: '25px',
    fontWeight: 700,
    lineHeight: 1.2,
    color: '#fff',
    letterSpacing: '5px',
    zIndex: 1,
    animation: 'shift 1s ease-in-out infinite alternate',
  };

  const glitchBeforeAfterStyle = {
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0.8,
  };

  const glitchBeforeStyle = {
    ...glitchBeforeAfterStyle,
    animation: 'glitch 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite',
    color: '#8b00ff',
    zIndex: -1,
  };

  const glitchAfterStyle = {
    ...glitchBeforeAfterStyle,
    animation: 'glitch 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite',
    color: '#00e571',
    zIndex: -2,
  };

  return (
    <div className="loader" style={loaderStyle}>
      <div data-glitch="Loading..." className="glitch" style={glitchBeforeStyle}>
        Loading...
      </div>
      <div data-glitch="Loading..." className="glitch" style={glitchAfterStyle}></div>
    </div>
  );
};

export default GlitchLoader;
