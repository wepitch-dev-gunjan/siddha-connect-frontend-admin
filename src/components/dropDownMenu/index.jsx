// DropDownMenu.jsx
import React, { useState, useRef, useEffect } from 'react';
import './style.scss';

const DropDownMenu = ({ menuItems, style, clickableRef }) => {
  let container = null;
  useEffect(() => {
    container = clickableRef.current;
    if (container) {
      container.style.position = 'relative';
    }

  }, [clickableRef]);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);

  const defaultStyle = {
    container: {
      width: '100%',
      backgroundColor: 'rgb(217, 217, 217)',
      padding: '20px',
      borderRadius: '10px',
      ...style.container,
    },
    items: {
      padding: '10px',
      color: '#111231',
      cursor: 'pointer',
      backgroundColor: 'transparent',
      ...style.items,
    },
    hover: {
      backgroundColor: 'lightgray',
    },
  };

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <div ref={containerRef} className='DropDownMenu-container' style={defaultStyle.container}>
      {menuItems.map((el, i) => (
        <div
          key={i}
          className="menu-item"
          style={{
            ...defaultStyle.items,
            ...(hoveredIndex === i && defaultStyle.hover), // Apply hover style if index matches
          }}
          onClick={el.onClick}
          onMouseEnter={() => handleHover(i)}
          onMouseLeave={() => handleHover(null)}
        >
          {el.item}
        </div>
      ))}
    </div>
  );
};

export default DropDownMenu;
