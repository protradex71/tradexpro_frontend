import * as React from "react"
import Svg, { Defs, Path, G, Mask, Use,ClipPath,Rect } from "react-native-svg"

function Remove(props) {
  return (
    <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)" fill="#B9B9B9">
      <Path d="M5.666.063a1.45 1.45 0 0 0-.888.9c-.047.13-.06.259-.06.543v.369H1.673l-.16.075a.908.908 0 0 0-.543.863c0 .39.194.7.543.862l.16.075h12.656l.16-.075a.908.908 0 0 0 .543-.862c0-.391-.194-.7-.543-.863l-.16-.075H11.281v-.369c0-.284-.012-.412-.06-.543a1.43 1.43 0 0 0-.9-.904C10.154.003 10.048 0 7.989.003c-2.022 0-2.17.006-2.322.06Zm4.421.953c.175.106.232.234.25.565l.016.294H5.647l.015-.294c.022-.397.116-.55.385-.615.053-.013.96-.022 2.016-.02 1.862.007 1.925.01 2.024.07ZM1.938 4.747c0 .16.815 9.919.843 10.081.085.525.482.972.997 1.128.216.066 8.228.066 8.444 0 .516-.156.912-.603.997-1.128.028-.162.844-9.922.844-10.081 0-.06-.116-.06-6.063-.06s-6.063 0-6.063.06Zm3.49.972c.206.125.184-.07.434 3.937.125 2.019.232 3.775.232 3.903 0 .263-.066.41-.219.488-.21.11-.51.018-.616-.181-.04-.082-.09-.772-.278-3.772a347.82 347.82 0 0 1-.231-3.9c0-.147.019-.263.047-.322a.437.437 0 0 1 .39-.216.49.49 0 0 1 .241.063Zm2.797-.01c.05.032.122.107.16.166l.068.11v3.89c0 3.834 0 3.89-.062 3.994-.182.3-.6.3-.782 0-.062-.104-.062-.16-.062-3.994v-3.89l.066-.104c.137-.215.406-.29.612-.172Zm2.806-.006c.153.078.219.225.219.488 0 .128-.106 1.884-.231 3.903-.188 3-.238 3.69-.278 3.772-.107.2-.407.29-.616.18-.153-.077-.219-.224-.219-.487 0-.128.106-1.884.231-3.903.185-2.984.238-3.69.279-3.772.106-.203.403-.29.615-.181Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
    
  )
}

export default Remove;