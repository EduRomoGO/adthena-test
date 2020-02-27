import React from 'react'

export const Cancel = props => {
  const { className, ...rest } = props
  const cName = (className || '') + ' svg-icon cancel-svg'
  return (
    <svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19.587 16.001l6.096 6.096a1.015 1.015 0 010 1.435l-2.151 2.151a1.015 1.015 0 01-1.435 0L16 19.587l-6.097 6.096a1.014 1.014 0 01-1.434 0l-2.152-2.151a1.015 1.015 0 010-1.435l6.097-6.096-6.097-6.097a1.015 1.015 0 010-1.435L8.47 6.318a1.014 1.014 0 011.434 0L16 12.415l6.097-6.097a1.015 1.015 0 011.435 0l2.151 2.152a1.015 1.015 0 010 1.435l-6.096 6.096z" /></svg>)
}
export const CheckSquare = props => {
  const { className, ...rest } = props
  const cName = (className || '') + ' svg-icon check-square-svg'
  return (
    <svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.293 11.707l3 3a.999.999 0 001.414 0l10-10a.999.999 0 10-1.414-1.414L12 12.586l-2.293-2.293a.999.999 0 10-1.414 1.414zM20 12v7c0 .276-.111.525-.293.707S19.276 20 19 20H5c-.276 0-.525-.111-.707-.293S4 19.276 4 19V5c0-.276.111-.525.293-.707S4.724 4 5 4h11a1 1 0 000-2H5a2.997 2.997 0 00-3 3v14a2.997 2.997 0 003 3h14a2.997 2.997 0 003-3v-7a1 1 0 00-2 0z" /></svg>)
}
export const CheckboxUnchecked = props => {
  const { className, ...rest } = props
  const cName = (className || '') + ' svg-icon checkbox-unchecked-svg'
  return (
    <svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28 0H4C1.8 0 0 1.8 0 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm0 28H4V4h24v24z" /></svg>)
}
export const Square = props => {
  const { className, ...rest } = props
  const cName = (className || '') + ' svg-icon square-svg'
  return (
    <svg className={cName} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 2a2.997 2.997 0 00-3 3v14a2.997 2.997 0 003 3h14a2.997 2.997 0 003-3V5a2.997 2.997 0 00-3-3zm0 2h14c.276 0 .525.111.707.293S20 4.724 20 5v14c0 .276-.111.525-.293.707S19.276 20 19 20H5c-.276 0-.525-.111-.707-.293S4 19.276 4 19V5c0-.276.111-.525.293-.707S4.724 4 5 4z" /></svg>)
}
