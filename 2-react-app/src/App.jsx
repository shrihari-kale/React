import "./App.css";
import Box from "./component/box/box";
import Footer from "./component/footer/footer";
import Header from "./component/header/header";
import Counter from "./counter";
//import Counter from "./component/counter/";

// function App() {
//   return (
//     <>
//       <Header />
//       <section className="content">Content</section>
//       <Footer />
//     </>
//   );
// }

// export default App;

function App() {
  return (
    <>
      <Header />

      <section className="content">
        <Box size="small" style={{ backgroundColor: "red" }}>
          Box 1
        </Box>
        <Box
          size="medium"
          style={{
            backgroundColor: "royalblue",
            fontWeight: 600,
            fontStyle: "normal",
          }}
        >
          Box 2
        </Box>
        <Box
          size="large"
          style={{ backgroundColor: "pink" }}
          children={"Box 3"}
        />
      </section>
      < Counter />
      <input type="text" value={name} onChange={(event) => setnName(event.target.value)}/>
      <label>{name}</label>

      <Footer />
    </>
  );
}

export default App;