import React from 'react';
import PreloaderStyles from './Preloader.module.css'


const Preloader = (props) => {
   return props.isFetching ? <div class={PreloaderStyles.ldshourglass}></div>: null 
}

export default Preloader;