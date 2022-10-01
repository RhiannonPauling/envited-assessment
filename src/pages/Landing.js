import {Outlet, useNavigate} from 'react-router-dom'
import {ReactComponent as LandingImage} from './../assets/landing_page_image.svg'
import React, {useCallback} from 'react'

const Landing = () => {
  const navigate = useNavigate();
  const handleCreateEventClick = useCallback(() => navigate('/create', {replace: false}), [navigate])

  return (
    <div className="App">
      <div className="grid sm:grid-cols-1 xl:grid-cols-2">
        <div className="mb-14 xl:mb-0 text-center xl:text-right xl:col-start-2 xl:col-span-1 xl:row-span-2 xl:grid xl:row-start-1 xl:content-center">
          <h1 className="mb-4 md:text-xl_landing text-lg_landing font-bold text-center xl:text-right text-primary-dark-purple">Imagine if<div className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light-purple to-primary-pink">Snapchat</div>had events.</h1>
          <p className="md:text-sm_landing text-xs_landing font-light text-darkest-grey landing__paragraph">Easily host and share events with your friends across any social media.</p>
        </div>
        <div className="col-start-1 col-span-1 mb-13 display-block inline-flex justify-center mb-9">
          <LandingImage className="drop-shadow-md"/>
        </div>
        <div className="xl:col-start-1 xl:col-span-1 align-items-center">
          <button className="lg:w-80 py-4 px-5 text-xs_landing font-bold rounded-xl bg-gradient-to-r from-primary-light-purple to-primary-pink" onClick={handleCreateEventClick}>🎉 Create my event</button>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Landing;