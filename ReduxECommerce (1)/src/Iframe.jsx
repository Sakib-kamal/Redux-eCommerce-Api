import React from 'react'

const Iframe = () => {
    const isValidUrl = urlString=> {
        var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
      '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
      return urlPattern.test(urlString);
  }
const onError = ()=> {
    console.log("Something wrong happened");
  }
  const call = ()=>{
    
  }

    
    const url = "";
    const image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRQQJeurX3KGXFxnlsUR9PTmM3yBKU-gC4Xg&usqp=CAU'
    return (
    <div>Iframe
        <div>
        <iframe
         title="error checking"
            id="inlineFrameExample"
            src= {isValidUrl(url) ? url : image }
           // src={url}
            onError = {onError}
            onLoad = {call}
            width="50%"
            height="100%"
            sandbox="allow-pointer-lock allow-top-navigation allow-scripts"
          />

        </div>
    </div>
  )
}

export default Iframe