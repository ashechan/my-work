import React from 'react';
import clip from "../images/clip.jpg";
import vervain from "../images/vervain.jpg";
import bay from "../images/ivyp.png";
import osm from "../images/nscwebs.png";
import nier from "../images/nier.png";
import bayo from "../images/bayo2.png";
import brm from "../images/brm.png";
import brp from "../images/brp.png";
import outer from "../images/outer.png";
import breathe from "../images/breathe.png";
import netta from "../images/netta.jpg";
import rps from "../images/rps.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import Popup from 'reactjs-popup';
import {PopupboxManager, PopupboxContainer} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";


function Portfolio() {
//Clippendales
    
    const openPopupboxClip = () => {
        const content = (
        <>
        <img className="portfolio-image-popupbox" src={clip} alt="Clippendales Mobile Pet salon website" />
        <p className="popup-text">Clippendales Mobile Pet Salon website created using Hostinger and Wordpress.</p>
        <b className="hyper-text">To visit</b><a className="hyper-link" onClick={() => window.open("https://clippendalesnc.com/")}> Click Here</a>
        </>
        )
        PopupboxManager.open({content})
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Clippendales Website",
              },
            },
          });
    }

    const popupboxConfigClip = {
        titleBar: {
            enable: true,
            text: "Clippendales Website"
        },
        fadeIn: true,
        fadeInSpeed: 500

    }
     //Neighborly Cleaning
    
     const openPopupboxOsm = () => {
      const content = (
      <>
      <img className="portfolio-image-popupbox" src={osm} alt="Neighborly Cleaning Services" />
      <p className="popup-text">Neighborly Cleaning Services website created with WordPress and Hostinger</p>
      <b className="hyper-text">To Visit:</b><a className="hyper-link" onClick={() => window.open("https://neighborlycleaningservices.com/", "_blank")}> Click Here</a> <br/>
      </>
      )
      PopupboxManager.open({content})
      PopupboxManager.update({
          content,
          config: {
            titleBar: {
              text: "Neighborly Cleaning Services Website",
            },
          },
        });
  }

  const popupboxConfigOsm = {
  
      titleBar: {
          enable: true,
          text: "Neighborly Cleaning Services Website"
      },
      fadeIn: true,
      fadeInSpeed: 500

  }

    //Vervain
    
    const openPopupboxVervain = () => {
        const content = (
        <>
        <img className="portfolio-image-popupbox" src={vervain} alt="A bootstrap theme called Vervain" />
        <p className="popup-text">Bootstrap theme I named Vervain. Pictures edited using Photoshop </p>
        <b className="hyper-text">Demo:</b><a className="hyper-link" onClick={() => window.open("https://ashechan.github.io/vervain-theme/", "_blank")}> Click Here</a> <br/>
        <b className="hyper-text">Code:</b><a className="hyper-link" onClick={() => window.open("https://github.com/ashechan/vervain-theme")}> Click Here</a>
        </>
        )
        PopupboxManager.open({content})
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Vervain: Bootstrap theme project",
              },
            },
          });
    }

    const popupboxConfigVervain = {
    
        titleBar: {
            enable: true,
            text: "Vervain: Bootstrap theme project"
        },
        fadeIn: true,
        fadeInSpeed: 500

    }

     

      //Ivy Park
    
      const openPopupboxBay = () => {
        const content = (
        <>
        <img className="portfolio-image-popupbox" src={bay} alt="Ivy Park Mock Web" />
        <p className="popup-text"> UI Design inspired by Ivy Park's new "Rodeo" collection. <br/> In demo click arrows to switch between images.  </p>
        <b className="hyper-text">Demo:</b><a className="hyper-link" onClick={() => window.open("https://xd.adobe.com/view/d4a46f2c-6669-47e1-a8d7-cc1b5b8c0419-81f7/?fullscreen", "_blank")}> Click Here</a> <br/>
        
        </>
        )
        PopupboxManager.open({content})
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Ivy Park Super Sleek Shoes",
              },
            },
          });
    }

    const popupboxConfigBay = {
    
        titleBar: {
            enable: true,
            text: "Ivy Park: Super Sleek Shoes"
        },
        fadeIn: true,
        fadeInSpeed: 500

    }

    //Nier 
    
    const openPopupboxNier = () => {
      const content = (
      <>
      <img className="portfolio-image-popupbox" src={nier} alt="Nier Mock Web" />
      <p className="popup-text"> UI Design for the a Nier franchise e-shop  </p>
      <b className="hyper-text">Demo:</b><a className="hyper-link" onClick={() => window.open("https://xd.adobe.com/view/98e22863-aad1-4c9c-b737-4c780422339c-cdb1/?fullscreen", "_blank")}> Click Here</a> <br/>
      
      </>
      )
      PopupboxManager.open({content})
      PopupboxManager.update({
          content,
          config: {
            titleBar: {
              text: "Nier E-Shop",
            },
          },
        });
  }

  const popupboxConfigNier = {
  
      titleBar: {
          enable: true,
          text: "Nier E-Shop"
      },
      fadeIn: true,
      fadeInSpeed: 500

  }

    //Bayo2
    
    const openPopupboxBayo = () => {
      const content = (
      <>
      <img className="portfolio-image-popupbox" src={bayo} alt="Bayonetta 2 mock e shop" />
      <p className="popup-text"> Mock Bayonetta 2 launch site made with Adobe XD  </p>
      <b className="hyper-text">Demo:</b><a className="hyper-link" onClick={() => window.open("https://xd.adobe.com/view/9046650a-f76b-487a-a618-2b223aee4544-c515/?fullscreen", "_blank")}> Click Here</a> <br/>
      
      </>
      )
      PopupboxManager.open({content})
      PopupboxManager.update({
          content,
          config: {
            titleBar: {
              text: "Bayonetta 2 E-Shop",
            },
          },
        });
  }

  const popupboxConfigBayo = {
  
      titleBar: {
          enable: true,
          text: "Bayonetta 2 E-Shop"
      },
      fadeIn: true,
      fadeInSpeed: 500

  }

    //Blue Rose Music
    
    const openPopupboxBrm = () => {
      const content = (
      <>
      <img className="portfolio-image-popupbox" src={brm} alt="Blue Rose music landing page" />
      <p className="popup-text"> Old school iTunes landing page re-imagined as "Blue Rose Music" <br/> Created in VScode using HTML and CSS   </p>
      <b className="hyper-text">Demo:</b><a className="hyper-link" onClick={() => window.open("https://ashechan.github.io/br-music/", "_blank")}> Click Here</a> <br/>
      <b className="hyper-text">Code:</b><a className="hyper-link" onClick={() => window.open("https://github.com/ashechan/br-music", "_blank")}> Click Here</a>
      
      </>
      )
      PopupboxManager.open({content})
      PopupboxManager.update({
          content,
          config: {
            titleBar: {
              text: "Blue Rose Music",
            },
          },
        });
  }

  const popupboxConfigBrm = {
  
      titleBar: {
          enable: true,
          text: "Blue Rose Music"
      },
      fadeIn: true,
      fadeInSpeed: 500

  }


   //BRP
    
   const openPopupboxBrp = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src={brp} alt="Basic Blog Template" />
    <p className="popup-text"> Basic blog template created in VSCode using HTML and CSS  </p>
    <b className="hyper-text">Demo:</b><a className="hyper-link" onClick={() => window.open("https://ashechan.github.io/basic-blog/", "_blank")}> Click Here</a> <br/>
    <b className="hyper-text">Code:</b><a className="hyper-link" onClick={() => window.open("https://github.com/ashechan/basic-blog", "_blank")}> Click Here</a>
    
    </>
    )
    PopupboxManager.open({content})
    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Basic Blog Template",
          },
        },
      });
}

const popupboxConfigBrp = {

    titleBar: {
        enable: true,
        text: "Basic Blog Template"
    },
    fadeIn: true,
    fadeInSpeed: 500

}

//Tumblr Bayonetta
    
const openPopupboxNetta = () => {
  const content = (
  <>
  <img className="portfolio-image-popupbox" src={netta} alt="Bayonetta 2 mock e shop" />
  <p className="popup-text"> Image of Bayonetta as a tumbler doll from the game "Bayonetta" created using HTML/CSS. <br/> Placed fourth in the international Bayonetta 10th Anniversary art contest.</p>
  <b className="hyper-text">Demo:</b><a className="hyper-link" onClick={() => window.open("https://codepen.io/blu3ros33/full/dyygOPN", "_blank")}> Click Here</a> <br/>
  <b className="hyper-text">Code:</b><a className="hyper-link" onClick={() => window.open("https://codepen.io/blu3ros33/pen/dyygOPN", "_blank")}> Click Here</a> 
  
  </>
  )
  PopupboxManager.open({content})
  PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Bayonetta 10th Anniversary",
        },
      },
    });
}

const popupboxConfigNetta = {

  titleBar: {
      enable: true,
      text: "Bayonetta 10th Anniversary"
  },
  fadeIn: true,
  fadeInSpeed: 500

}

//Breathe App
    
const openPopupboxBreathe = () => {
  const content = (
  <>
  <img className="portfolio-image-popupbox" src={breathe} alt="Breathe App" />
  <p className="popup-text"> Stop and take a breath with this Breathe App <br/> Created in VSCode using vanilla Javascript</p>
  <b className="hyper-text">Demo:</b><a className="hyper-link" onClick={() => window.open("https://ashechan.github.io/Breathe-App/", "_blank")}> Click Here</a> <br/>
  <b className="hyper-text">Code:</b><a className="hyper-link" onClick={() => window.open("https://github.com/ashechan/Breathe-App", "_blank")}> Click Here</a> 
  
  </>
  )
  PopupboxManager.open({content})
  PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Breathe App",
        },
      },
    });
}

const popupboxConfigBreathe = {

  titleBar: {
      enable: true,
      text: "Breathe App"
  },
  fadeIn: true,
  fadeInSpeed: 500

}


//SM Memory Game
    
const openPopupboxOuter = () => {
  const content = (
  <>
  <img className="portfolio-image-popupbox" src={outer} alt="Bayonetta 2 mock e shop" />
  <p className="popup-text"> Outer Senshi Memory game created in VSCode using vanilla Javascript <br/> Works best in Google Chrome</p>
  <b className="hyper-text">Demo:</b><a className="hyper-link" onClick={() => window.open("https://ashechan.github.io/outer-senshi-memory/", "_blank")}> Click Here</a> <br/>
  <b className="hyper-text">Code:</b><a className="hyper-link" onClick={() => window.open("https://github.com/ashechan/outer-senshi-memory", "_blank")}> Click Here</a> 
  
  </>
  )
  PopupboxManager.open({content})
  PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Outer Senshi Memory Game",
        },
      },
    });
}

const popupboxConfigOuter = {

  titleBar: {
      enable: true,
      text: "Outer Senshi Memory Game"
  },
  fadeIn: true,
  fadeInSpeed: 500

}

   //RPS
    
   const openPopupboxRps = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src={rps} alt="Rock Paper Scissors game" />
    <p className="popup-text"> Rock Paper Scissors game created in VScode using vanilla Javascript   </p>
    <b className="hyper-text">Demo:</b><a className="hyper-link" onClick={() => window.open("https://ashechan.github.io/Rock-Paper-Scissors/", "_blank")}> Click Here</a> <br/>
    <b className="hyper-text">Code:</b><a className="hyper-link" onClick={() => window.open("https://github.com/ashechan/Rock-Paper-Scissors", "_blank")}> Click Here</a>
    
    </>
    )
    PopupboxManager.open({content})
    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Rock Paper Scissors",
          },
        },
      });
}

const popupboxConfigRps = {

    titleBar: {
        enable: true,
        text: "Rock Paper Scissors"
    },
    fadeIn: true,
    fadeInSpeed: 500

}

   

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">My work</h1>
                < div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxClip}>
                    <img className="portfolio-image" src={clip} alt="Clippendales mobile dog salon website" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>

                  {/*..*/}
                  <div className="portfolio-image-box" onClick={openPopupboxOsm}>
                    <img className="portfolio-image" src={osm} alt="Neighborly LCeaning Services" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>    
                
                {/*..*/}
                <div className="portfolio-image-box" onClick={openPopupboxVervain}>
                    <img className="portfolio-image" src={vervain} alt="Vervain a Bootstrap theme" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
                {/*..*/}
                <div className="portfolio-image-box" onClick={openPopupboxBay}>
                    <img className="portfolio-image" src={bay} alt="Bayonetta created with HTML/CSS" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>

                 {/*..*/}
                 <div className="portfolio-image-box" onClick={openPopupboxNier}>
                    <img className="portfolio-image" src={nier} alt=" Nier mock e shop" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>   
                 {/*..*/}
                 <div className="portfolio-image-box" onClick={openPopupboxBayo}>
                    <img className="portfolio-image" src={bayo} alt="Neighborly LCeaning Services" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>  

                {/*..*/}
                 <div className="portfolio-image-box" onClick={openPopupboxBrm}>
                    <img className="portfolio-image" src={brm} alt="Blue Rose Music" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>  

                {/*..*/}
                 <div className="portfolio-image-box" onClick={openPopupboxBreathe}>
                    <img className="portfolio-image" src={breathe} alt="Breathe App" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>  

                 {/*..*/}
                 <div className="portfolio-image-box" onClick={openPopupboxBrp}>
                    <img className="portfolio-image" src={brp} alt="Basic Blog template" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>   


               {/*..*/}
               <div className="portfolio-image-box" onClick={openPopupboxNetta}>
                    <img className="portfolio-image" src={netta} alt="Bayonetta 10th Anniversary" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>  

                {/*..*/}
                 <div className="portfolio-image-box" onClick={openPopupboxOuter}>
                    <img className="portfolio-image" src={outer} alt="Outer Senshi Memory Game" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>  

                {/*..*/}
                 <div className="portfolio-image-box" onClick={openPopupboxRps}>
                    <img className="portfolio-image" src={rps} alt="Rock Paper Scissors game" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>   
              
        
            </div>
            
            </div>
            <PopupboxContainer {...popupboxConfigClip} />
            <PopupboxContainer {...popupboxConfigOsm} />
            <PopupboxContainer {...popupboxConfigVervain} />
            <PopupboxContainer {...popupboxConfigBay} />
            <PopupboxContainer {...popupboxConfigNier} />
            <PopupboxContainer {...popupboxConfigBayo} />
            <PopupboxContainer {...popupboxConfigBrm} />
            <PopupboxContainer {...popupboxConfigBrp} />
            <PopupboxContainer {...popupboxConfigBreathe} />
            <PopupboxContainer {...popupboxConfigNetta} />
            <PopupboxContainer {...popupboxConfigOuter} />
            <PopupboxContainer {...popupboxConfigRps} />



         
            <div id="view">
            <a href="https://github.com/ashechan" target="_blank" className="btn-main-offer">View More</a>
            </div>
        </div>
    )
}

export default Portfolio
