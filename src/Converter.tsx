import React, { useState } from 'react'
import * as hex2rgb from 'hex2rgb';

export default function Converter(): JSX.Element {
    const [color, setColor] = useState('#A9A9A9');
    const hexRegExp = /^#[0-9A-F]{6}$/i;
    
    const convertHEX = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;

      if (value.length < 7) 
        return;
      if (!(hexRegExp.test(value))) {
        setColor('Ошибка!');
        return;
      }

      setColor(hex2rgb(value).rgbString);
      return hex2rgb(value).rgbString
    }

    return (
    <div style={{backgroundColor: color || '#FFFFFF' }} className='convertor-background'>
      <div className='convertor-div'>
          <form onSubmit={event => event.preventDefault()}>
            <input onChange={convertHEX} type='text' className='hex-input'/>
            <p className='hex-output'>{color}</p>
          </form>
      </div>
    </div>
  )
}
