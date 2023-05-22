import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Cookies from "js-cookie";
import './App.css'
const GoogleTranslator = () => {
  // const Cookies = useCookies();

  // const[opt,setOpt] =useState("en");

  // var options = document.querySelectorAll(options);
  //   const getID = document.getElementsByClassName("goog-te-combo");
  //  console.log(getID, options);
  // useEffect(() => {
  //   // console.log("what is here ", options);
  //   if (options.length) {
  //     options.forEach(function (item) {
  //       // console.log("first  ");
  //       item.style.color = "red"; //"10px !important";
  //       item.style.backgroundColor = "green";
  //       item.style.fontSize = "20px";
  //     });
  //   }
  // }, [options]);

  const handleClear = () => {
    Cookies.remove("googtrans");
  };
  const selected = (idOfElement, idOfChild) => {
    let element = document.getElementById(idOfElement);
    return element.querySelector(`[id=${idOfChild}]`);
}

  
  return (
    <>
      <main className="dashboard-content" id="main">
        <section
          className="collection banner-top-space full-page-view"
          id="main-content"
        >
          <div className="container most-recent-content-wrapper">
            <div className="most-recent-content-wrapper collection-list">
              <div>
                <Helmet>
                  <script type="text/javascript">
                    {`function googleTranslateElementInit() {
                    new google.translate.TranslateElement(
                    { 
                      defaultLanguage:'en',
                      pageLanguage: 'en',
                      includedLanguages : 'ar,ceb,es,en',            
                    },
                    'google_translate_element'
                    );
                  }`}
                  </script>
                  {/* <script type="text/javascript">
                    {`$.cookie('googtrans', '/en/" . $this->session->data['language'] . "');`}
                  </script> */}

                  <script
                    type="text/javascript"
                    src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
                  ></script>
                </Helmet>
                <div id="google_translate_element"></div>
                <div>
                  DemoCode
                  <h1>Hi There</h1>
                  <p>Hello everybody!</p>
                  <p>Translate this page: This is my demo page</p>
                </div>
                <button onClick={handleClear}>logout </button>
                <br></br>
                <br></br>
               
                <button>12 </button>
                <button>13 </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default GoogleTranslator;