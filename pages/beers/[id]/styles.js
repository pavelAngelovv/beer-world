const styles = {
  buttonBack: {
    float: "left",
    ml: { lg: 35, md: 30 },
    mt: { xlg: 2, lg: 10, md: 10, sm: 8, xs: 8 },
    width: 50,
    height: 50,
  },
  detailsContainer: {
    m: 2,
    ml: 1.3,
    mr: "5%",
    textAlign: "center",
    flexDirection: "column",
  },
  detailsCard: {
    mt: 10,
    ml: { lg: 50, md: 30, sm: 10, xs: 0 },
    borderRadius: "186px",
    backgroundColor: "white",
    width: { xl: "70%", lg: "70%", md: "80%", sm: "80%", xs: "100%" },
    height: { lg: "60%", md: "50%" },
  },
  cardContent: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: { lg: "row", sm: "column", xs: "column" },
    color: "black",
    textDecoration: "none",
    textDecorationColor: "black",
  },
  beerImg: {
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "3%",
    width: { xl: "50%", lg: "50%", md: "40%", sm: "100%" },
    height: "24cm",
    objectFit: "contain",
    float: "left",
  },
  courierFontElement: {
    fontFamily: '"Courier New", Courier, monospace',
    fontWeight: "bold",
    fontSize: 20,
  },
  brushScriptElement: {
    fontFamily: '"Brush Script MT", cursive',
    fontWeight: "bold",
    fontSize: 35,
    color: "black",
  },
};

export default styles;
