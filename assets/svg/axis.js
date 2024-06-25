import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use,ClipPath,Rect ,Pattern,Image} from "react-native-svg"

function Axis(props) {
  return (
    <Svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path d="M22 0H0v22h22V0Z" fill="url(#a)" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="scale(.0025)" />
      </Pattern>
      <Image
        id="b"
        width={400}
        height={400}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
    
  )
}

export default Axis;