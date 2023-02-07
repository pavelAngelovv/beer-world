import RenderBeers from "@/components/RenderBeers";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <div className="content">
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
    </div>
  );
}
