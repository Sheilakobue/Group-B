import Link from "next/link";
import { Fragment } from "react";

const Home = () => {
  
  return (
    <Fragment>
      
      <main className="homeContainer">
        <div
          className="mainContent"
          style={{
            backgroundImage: `url('/spices-black.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            position: "relative",
            height: "100vh",
            margin: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            color: "white",
          }}
        >
          <h2 className="title">Explore food from around the world</h2>
          <p className="subtitle">
            Join us to discover amazing culinary experiences!
          </p>
          <Link href="/recipe">
            <button className="btn">Explore</button>
          </Link>
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
