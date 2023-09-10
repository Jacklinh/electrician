import React from 'react';
import Header from './Header';
import Footer from './Footer';


const DefaultLayout = ({children}:{children: React.ReactNode}) => {
    return (
        <>
            <Header />
            <main className='py-[100px]'>
				<div className="container">
					{children}
				</div>
			</main>
            <Footer />
        </>
    )
  }
  
  export default DefaultLayout