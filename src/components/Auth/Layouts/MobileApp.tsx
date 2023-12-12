import { Box, Stack } from "@mui/material";
import Iphone from "../../../assets/iPhone12.svg";
import AppGalery from "../../../assets/AppGallery.svg";
import AppStore from "../../../assets/AppStore.svg";
import GooglePlay from "../../../assets/GooglePlay.svg";
import QR from "../../../assets/QR.svg";
import Lines from "../../../assets/Lines.svg";
import { AuthHugeText, AuthHugestText } from "../../../styles/AuthStyles";

export default function MobileApp() {
  return (
    <Stack
      direction="row"
      width={"480px"}
      display={{ xs: "none", md: "flex" }}
      alignItems="center"
      backgroundColor="#f3f3f3"
      justifyContent="end"
      useFlexGap
      flexWrap="wrap"
      position="relative"
    >
      <div
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
          <img src={AppGalery} />
        </div>
      </div>
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
          <AuthHugeText component="span">Отслеживайте доставку</AuthHugeText>
          <br />
          <AuthHugestText component="span">
            в мобильном приложении
          </AuthHugestText>
        </div>
        <img src={Lines} />
      </div>
    </Stack>
  );
}
