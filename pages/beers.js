import RenderBeers from "components/RenderBeers";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <Box sx={{ marginLeft: { md: 31.5, sm: 0 } }}>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "90px",
          fontFamily: ' "Brush Script MT", cursive;',
          paddingBottom: 10,
          paddingTop: 10,
        }}
      >
        Beers
      </Typography>
      <RenderBeers />
    </Box>
  );
}
