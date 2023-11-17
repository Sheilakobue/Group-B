import Link from "next/link";
import { Fragment } from "react";

export default function Home() {

  return (
    <Fragment>
      <main className="homeContainer">
        
      <div
          className="mainContent"
          style={{
            backgroundImage: `url('/spices-black.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            height: '100vh',
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            color: 'white',
          }}
        >
          <h2 className="title">Explore Food From Around the World!</h2>
          
          <p className="subtitle">
            Join Us to Discover Amazing Culinary Experiences!
          </p>
          
          <Link href="/recipe">
            <button className="btn">Explore</button>
          </Link>
        
          </div>
      </main>
    </Fragment>
  );
};


