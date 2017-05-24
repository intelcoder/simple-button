import React, { PropTypes } from 'react'

import css from './style.css'

const SimpleButton = ({full, style, float, label, onClick}) => {
  let cssClass = css.simpleButton;
  if(full) cssClass = cssClass + ' ' + css.full;
  if(style) cssClass = cssClass + ' ' + css[style];
  if(float) cssClass = cssClass + ' ' + css[float];

  return (
    <button className={ cssClass } onClick={onClick}>{label}</button>
  )
};

SimpleButton.propTypes = {
  /**
   * Make button width to 100%
   */
  full: PropTypes.bool,
  style: PropTypes.oneOf(['blue', 'lightBlue', 'full','half']),
  float: PropTypes.oneOf(['floatRight', 'floatLeft']),
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default SimpleButton
/*
Learning git tag
*/