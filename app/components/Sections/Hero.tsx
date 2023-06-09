import React from 'react'

const Hero = () => {
  return (
    <>
        <div id="hero-text-container">
            <span id="hero-text1"></span>
            <span id="hero-text2"></span>
        </div>

        <svg id="filters">
            <defs>
                <filter id="threshold">
                    <feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0
                                            0 1 0 0 0
                                            0 0 1 0 0
                                            0 0 0 255 -140" />
                </filter>
            </defs>
        </svg>
    </>
  )
}

export default Hero