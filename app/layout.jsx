import { Fragment } from 'react';
import '../styles/globals.css'
import Header from '@/components/header';

export default function RootLayout({children}){

  return(
    <html lang='en'>
    { 

    }
  
    <Header>
    <body>{children}</body>
    </html>
  )
}
// import '@/styles/globals.css';
// import Layout from '@/app/layout';
// import { FavoritesContextProvider } from '@/components/favorite/fav-context';

// export default function App({ Component, pageProps }) {
//   return (
//     <FavoritesContextProvider>
//       <div>
//         <Layout>
//           <Component {...pageProps} />
//         </Layout>
//       </div>
//     </FavoritesContextProvider>
//   );
// }
