import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
const shoe =
  "https://w7.pngwing.com/pngs/247/15/png-transparent-arrow-arrow-angle-triangle-black-thumbnail.png";
const logo =
  "https://w7.pngwing.com/pngs/247/15/png-transparent-arrow-arrow-angle-triangle-black-thumbnail.png";
export const Home = () => {
  return (
    <div className="Homepage">
      <div
        className="Frame1"
        style={{
          width: 1600,
          height: 1200,
          position: "absolute",
          top: 72,
          bottom: 500,
          background: "#060606",
        }}
      >
        <div
          className="Bg"
          style={{
            width: 1400,
            height: 960,
            left: 0,
            top: 0,
            position: "absolute",
          }}
        />
        <div
          className="Subject"
          style={{
            width: 1731.98,
            height: 1496.06,
            left: 364,
            top: -523,
            position: "absolute",
          }}
        >
          <div
            className="Ellipse3"
            style={{
              width: 296,
              height: 296,
              left: 538.75,
              top: 740.68,
              position: "absolute",
              background: "rgba(125.38, 125.38, 125.38, 0.15)",
              borderRadius: 9999,
              backdropFilter: "blur(42px)",
            }}
          />
          <img
            className="AirRemovebgPreview1"
            style={{
              width: 1000.8,
              height: 1110.54,
              left: 0,
              top: 648.1,
              position: "absolute",
              transform: "rotate(-26.26deg)",
              objectFit: "contain",
              transformOrigin: "0 0",
            }}
            src={shoe}
          />
          <div
            className="Shadow"
            style={{
              width: 736,
              height: 68,
              left: 393.75,
              top: 1332.68,
              position: "absolute",
              background:
                "linear-gradient(270deg, rgba(0, 0, 0, 0) 3%, rgba(0, 0, 0, 0.56) 100%)",
              boxShadow: "45px 45px 45px ",
              borderRadius: 9999,
              filter: "blur(45px)",
            }}
          />
          <div
            className="Ellipse1"
            style={{
              width: 196,
              height: 196,
              left: 1040,
              top: 870,
              position: "absolute",
              background: "rgba(125.38, 125.38, 125.38, 0.20)",
              borderRadius: 9999,
              backdropFilter: "blur(42px)",
            }}
          />
          <div
            className="Ellipse2"
            style={{
              width: 223,
              height: 223,
              left: 697,
              top: 1083,
              position: "absolute",
              background: "rgba(125.38, 125.38, 125.38, 0.11)",
              borderRadius: 9999,
              backdropFilter: "blur(42px)",
            }}
          />
        </div>
        <div
          className="TextSection"
          style={{
            width: 935,
            height: 656.27,
            left: 137,
            top: 154,
            position: "absolute",
          }}
        >
          <div
            className="AirJordan"
            style={{
              width: 900,
              height: 156,
              left: 0,
              top: 0,
              position: "absolute",
              color: "white",
              fontSize: 100.1,
              fontFamily: "Barlow",
              marginRight: 40,
              fontWeight: "900",
              wordWrap: "break-word",
            }}
          >
            AIR JORDAN
          </div>
          <div
            className="AjRetro4"
            style={{
              width: 391,
              height: 56,
              left: 32,
              top: 241,
              position: "absolute",
              color: "white",
              fontSize: 40,
              fontFamily: "Barlow",
              fontWeight: "500",
              letterSpacing: 6,
              wordWrap: "break-word",
            }}
          >
            AJ RETRO 4
          </div>
          <div
            className="Rectangle2"
            style={{
              width: 160,
              height: 54.55,
              left: 31,
              top: 601.73,
              position: "absolute",
              background: "#CBD6E0",
              borderRadius: 27.27,
            }}
          />
          <a href="/carts/:Id">
            <div
              className="AddToCart"
              style={{
                width: 95,
                height: 22,
                left: 65,
                top: 621,
                position: "absolute",
                color: "#171717",
                fontSize: 14,
                fontFamily: "Barlow",
                fontStyle: "italic",
                fontWeight: "600",
                wordWrap: "break-word",
              }}
            >
              ADD TO CART
            </div>
          </a>
          <div
            className="description"
            style={{
              width: 526,
              height: 98,
              color: "#C2D4E3",
              fontSize: 14,
              fontFamily: "Barlow",
              fontStyle: "italic",
              fontWeight: "500",
              marginTop: 450,
              letterSpacing: 0.9,
              wordWrap: "break-word",
            }}
          >
            The Air Jordan 4 Retro ‘Infrared’ features distinctive color
            blocking that recalls the ‘Green Glow’ AJ4 release from 2013. The
            upper is crafted from smooth nubuck in a charcoal finish. A lighter
            shade of grey distinguishes the forefoot overlay, while black
            accents land on the quarter panel netting, structural wings and
            Jumpman-branded heel tab.
          </div>
          <div
            className="2899900"
            style={{
              width: 391,
              height: 56,
              left: 32,
              top: 339,
              position: "absolute",
              color: "white",
              fontSize: 45,
              fontFamily: "Barlow",
              fontStyle: "italic",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            ₹28,999.00
          </div>
        </div>
        <div
          className="Ellipse4"
          style={{
            width: 96,
            height: 96,
            left: 700,
            top: 105,
            position: "absolute",
            background: "rgba(125.38, 125.38, 125.38, 0.15)",
            borderRadius: 9999,
            backdropFilter: "blur(42px)",
          }}
        />
        <div
          className="Rectangle1"
          style={{
            width: 126,
            height: 960,
            left: 0,
            top: 0,
            position: "absolute",
            background: "#CBD6E0",
          }}
        />
        <div className="navigation">
          <div
            className="Menu"
            style={{
              width: 800,
              height: 18,
              left: 555,
              top: 53,
              position: "absolute",
            }}
          >
            <a href="/">
              <div
                className="Home"
                style={{
                  left: 0,
                  top: 0,
                  position: "absolute",
                  color: "white",
                  fontSize: 15,
                  fontFamily: "Barlow",
                  fontWeight: "600",
                  letterSpacing: 2.02,
                  wordWrap: "break-word",
                }}
              >
                HOME
              </div>
            </a>
            <a href="/products">
              <div
                className="Collection"
                style={{
                  left: 129,
                  top: 0,
                  position: "absolute",
                  color: "white",
                  fontSize: 15,
                  fontFamily: "Barlow",
                  fontWeight: "600",
                  letterSpacing: 2.02,
                  wordWrap: "break-word",
                }}
              >
                COLLECTION
              </div>
            </a>
            <a href="/">
              <div
                className="Sales"
                style={{
                  left: 317,
                  top: 0,
                  position: "absolute",
                  color: "white",
                  fontSize: 15,
                  fontFamily: "Barlow",
                  fontWeight: "600",
                  letterSpacing: 2.02,
                  wordWrap: "break-word",
                }}
              >
                SALES
              </div>
            </a>
            <a href="/contact">
              <div
                className="Contact"
                style={{
                  left: 456,
                  top: 0,
                  position: "absolute",
                  color: "white",
                  fontSize: 15,
                  fontFamily: "Barlow",
                  fontWeight: "600",
                  letterSpacing: 2.02,
                  wordWrap: "break-word",
                }}
              >
                CONTACT
              </div>
            </a>
            <i type="text" placeholder="Search.." />
          </div>
        </div>
        <div
          className="SneakerheadsUnite"
          style={{
            left: 76,
            top: 128,
            position: "absolute",
            transform: "rotate(90deg)",
            transformOrigin: "0 0",
            textAlign: "center",
            color: "#282828",
            fontSize: 18,
            fontFamily: "Barlow",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: 28.53,
            wordWrap: "break-word",
          }}
        >
          SNEAKERHEADS UNITE.
        </div>
        <img
          className="Vector"
          style={{
            width: 50,
            height: 40,
            left: 38,
            top: 44,
            position: "absolute",
            mixBlendMode: "darken",
          }}
          src={logo}
        />
      </div>
    </div>
  );
};
export default Home;
