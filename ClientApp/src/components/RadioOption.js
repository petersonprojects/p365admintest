import {useState } from 'react';
import { useSelector } from 'react-redux';

const RadioOption = ({height, label, id, children}) => {
  const reduxState = useSelector(state => state.accentColor);

  const [isHovered, setIsHovered] = useState(false);
  const [color, setColor] = useState('transparent');
  const [colorBG, setBGColor] = useState('#F5F5F5');
  const [isChecked, setIsChecked] = useState(false);
  const [onClickColor, setClickColor] = useState('transparent');

  let handleMouseEnter = (e) => {
      setIsHovered(true);
      if(isChecked === true)
      {
        return
      }
      setColor(reduxState);
      setBGColor(reduxState);
  }
  let handleMouseLeave = (e) => {
      setIsHovered(false);
      if(isChecked === true)
      {
        return
      }

      setColor('transparent');
      setBGColor('#F5F5F5');

  }
  let handleClick = (e) => {
      setIsChecked(!isChecked);

      if(isChecked === true){
        setClickColor('#F5F5F5')
        setBGColor('transparent')
      }
      else
      {
        setClickColor(reduxState)
        setBGColor(reduxState)
      }
  }
  return (
    <>
            <div className="radio-option-container"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{border: `2px solid ${color}`}}>
                    <input style={{display:'none'}} type="radio" id={id} name="test1"/>
                    <label className="label-radio" onClick={handleClick} for={id} >

                        <div className="hole-punch-container" style={{height:height}}>
                            <div className="ugly-hole-punch" style={{border:`2px solid ${colorBG}`}}>
                                <div className="innermost-circle" style={{backgroundColor: `${onClickColor}`}} ></div>
                            </div>
                        </div>
                        {children}
                        {label}
                    </label>
                </div>
    </>
  )
}

export default RadioOption
