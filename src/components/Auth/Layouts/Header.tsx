import { HeaderHelpText, HeaderWrapper } from "@styles/AuthStyles";
import { SmallText } from "@styles/GlobalStyles";
import Logo from "@assets/Logo.svg";

export default function Header() {
  return (
    <HeaderWrapper>
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div>
        <div>
          <HeaderHelpText>Поддержка</HeaderHelpText>
        </div>
        <div>
          <SmallText>+375 (29) 6666-565</SmallText>
        </div>
      </div>
    </HeaderWrapper>
  );
}
