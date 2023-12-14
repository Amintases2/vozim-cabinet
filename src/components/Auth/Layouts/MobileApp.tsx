import { Stack, Box } from "@mui/material";
import Iphone from "@assets/iPhone12.svg";
import AppGallery from "@assets/AppGallery.svg";
import AppStore from "@assets/AppStore.svg";
import GooglePlay from "@assets/GooglePlay.svg";
import QR from "@assets/QR.svg";
import Lines from "@assets/Lines.svg";
import { HugestText } from "@styles/GlobalStyles";
import { MobileHugeText, MobileAppWrapper } from "@styles/AuthStyles";

export default function MobileApp() {
  return (
    <MobileAppWrapper>
      <Box
        style={{
          backgroundColor: "white",
          borderRadius: "16px 0 0 16px",
          padding: "24px",
        }}
      >
        <div style={{ marginBottom: "40px" }}>
          <img src={QR} />
        </div>
        <div style={{ marginBottom: "16px" }}>
          <img src={GooglePlay} />
        </div>
        <div style={{ marginBottom: "16px" }}>
          <img src={AppStore} />
        </div>
        <div>
          <img src={AppGallery} />
        </div>
      </Box>
      <div style={{ maxWidth: "440px" }}>
        <img src={Iphone} />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "0",
          width: "100%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            marginBottom: "16px",
            textAlign: "left",
            paddingLeft: "80px",
          }}
        >
          <MobileHugeText component="span">
            Отслеживайте доставку
          </MobileHugeText>
          <br />
          <HugestText component="span">в мобильном приложении</HugestText>
        </div>
        <img src={Lines} />
      </div>
    </MobileAppWrapper>
  );
}
