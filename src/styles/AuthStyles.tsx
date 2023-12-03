import { styled, Typography } from "@mui/material";

const AuthWrapper = styled('div')`
  width: 442px;
  padding: 56px;
  background-color:white;
  box-sizing: border-box;
  border-radius: 16px;
`
const AuthTitle = styled(Typography)`
  font-size: 24px;
  text-align: center;
  line-height: 36px;
  font-weight: 600;
`

export {AuthWrapper, AuthTitle}