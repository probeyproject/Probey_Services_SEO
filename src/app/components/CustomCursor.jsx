import React from 'react';
// Import with next's dynamic import
import dynamic from 'next/dynamic';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false,
});
function CustomCursor() {
  return (
    <AnimatedCursor
      innerSize={10}      // Size of the inner part of the cursor
      outerSize={10}      // Size of the outer part of the cursor
      color="100, 100, 100"    // Black color for the cursor (RGB: 0, 0, 0)
      outerAlpha={0.2}   // Outer cursor transparency
      innerScale={0.7}   // Inner cursor scale
      outerScale={5}     // Outer cursor scale
      clickables={[
        'a',
        
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        '.modal', // Any other clickable elements (optional)
        {
          target: '.modal-dialog',
          options: {
            innerSize: 12,
            outerSize: 12,
            color: '255, 255, 255',
            outerAlpha: 0.3,
            innerScale: 0.7,
            outerScale: 5
          }
        }
      ]}
      style={{zIndex:"9999999 !important"}}
    />
  );
}

export default CustomCursor;