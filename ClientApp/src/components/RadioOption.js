import React from 'react'

const RadioOption = (props) => {
  return (
    <>
                      <div className="radio-option-container" onMouseEnter={props.handleMouseEnter} onMouseLeave={props.handleMouseLeave} style={{border: `2px solid ${props.color}`}}>
                    <input style={{display:'none'}} type="radio" id="0" name="test1"/>
                    <label className="label-radio" for="0">

                        <div className="hole-punch-container" style={{height:'30px'}}>
                            <div className="ugly-hole-punch">
                                <div className="innermost-circle" ></div>
                            </div>
                        </div>

                        <svg width="100%" height="40%" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.22 6.781a.75.75 0 0 1-.073-.976l.073-.085 2.367-2.37a.77.77 0 0 1 .664-.35c.252 0 .475.109.611.276l.053.075 2.367 2.37.073.084a.75.75 0 0 1 .007.882l-.08.094-.084.073a.75.75 0 0 1-.883.007l-.094-.08L17 5.56v14.784l-.007.089c-.05.32-.363.567-.743.567s-.694-.247-.743-.567l-.007-.09V5.56l-1.22 1.221-.084.073a.75.75 0 0 1-.976-.073ZM6.25 3.992A2.25 2.25 0 0 0 4 6.242v11.5a2.25 2.25 0 0 0 2.25 2.25h6a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 1-.75-.75v-11.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 0 0-1.5h-4Z" fill="#222F3D"/></svg>
                        Top Story
                    </label>
                </div>
    </>
  )
}

export default RadioOption
