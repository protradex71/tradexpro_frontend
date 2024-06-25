import * as React from 'react';
import Svg, {Defs, Path, G, Mask, Use, ClipPath, Rect} from 'react-native-svg';

function Star(props) {
  return (
    <Svg
    width={18}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m5.813.966-.106.054-.738 1.485c-.406.816-.75 1.498-.764 1.512-.012.014-.746.13-1.63.256C.786 4.53.803 4.528.71 4.71c-.065.127-.068.216-.01.34.031.065.4.436 1.217 1.23.74.72 1.172 1.153 1.174 1.184.003.026-.12.752-.267 1.615-.147.862-.27 1.605-.27 1.647 0 .113.08.251.176.312.07.045.108.05.23.042.138-.011.228-.054 1.594-.775L6 9.543l1.448.76c.795.419 1.486.77 1.536.78.234.053.461-.12.461-.352 0-.047-.122-.792-.27-1.655-.147-.864-.269-1.589-.269-1.607 0-.022.532-.558 1.184-1.191 1.207-1.179 1.254-1.23 1.254-1.4a.498.498 0 0 0-.052-.168c-.094-.185-.075-.18-1.882-.44-.888-.13-1.62-.242-1.624-.254a355.24 355.24 0 0 0-.75-1.51L6.293 1.02 6.188.966A.514.514 0 0 0 6 .914a.514.514 0 0 0-.187.052Z"
      fill="#F90"
    />
  </Svg>
  );
}

export default Star;
