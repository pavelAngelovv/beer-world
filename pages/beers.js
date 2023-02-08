import RenderBeers from "@/components/RenderBeers";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ marginLeft: { md: "6.7cm", sm: "0" } }}>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "90px",
          fontFamily: ' "Brush Script MT", cursive;',
          paddingBottom: "2cm",
          paddingTop: "2cm",
        }}
      >
        Beers
      </Typography>
      <RenderBeers />
    </Box>
  );
}
