import React from "react";
import errorStyle from '../style/ErrorBoundary.module.css'
import errorImg from '../assets/no-results.png'
function ErrorFallback({error,resetErrorBoundary}) {
    console.log("Thisss");
    return (
        <div role="alert " className={errorStyle?.errorContainer}>
             <img src={errorImg} alt="eror-img" width={200} style={{margin:"0 auto"}} />
             <p className={errorStyle?.errorText}>Something went wrong</p>
             <pre><span className={errorStyle?.errorText}>ERROR:</span>{error.message}</pre>
             <button onClick={resetErrorBoundary} className={errorStyle?.btn}>Try Again</button>
        </div>
    )
}

export default ErrorFallback;