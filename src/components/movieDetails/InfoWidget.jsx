import { useTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const InfoWidget = ({ Icon, data }) => {
  const {
    palette: { primary },
  } = useTheme();
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Icon sx={{ fill: primary.main }} />
      <Typography>{data}</Typography>
    </Stack>
  );
};

export default InfoWidget;
