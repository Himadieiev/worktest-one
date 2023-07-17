const Home = () => {
  const homeStyle = {
    backgroundColor: "#f2f2f2",
    padding: "120px 30px 30px",
    textAlign: "center",
    minHeight: "100vh",
    fontSize: "20px",
  };

  return (
    <div style={homeStyle}>
      This is the store's Home page. To see the recipes, go to the "Recipes"
      page
    </div>
  );
};

export default Home;
