
import React from "react";

const Plasma = ({className}) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden transition duration-700 ${className}`}>
      
      <div className="plasma-container">
        <span className="plasma blob1"></span>
        <span className="plasma blob2"></span>
        <span className="plasma blob3"></span>
      </div>

      <style>{`
        .plasma-container{
          position:absolute;
          inset:0;
          filter: blur(90px);
          opacity:0.65;
        }

        .plasma{
          position:absolute;
          width:28vw;
          height:28vw;
          border-radius:50%;

          /* rays */
          background:
            conic-gradient(
              from 0deg,
              transparent,
              #d4af37,
              transparent,
              #c89b2c,
              transparent
            );

          animation:
            drift 22s ease-in-out infinite alternate,
            rotate 35s linear infinite,
            pulse 12s ease-in-out infinite;
        }

        .blob1{
          top:-8%;
          left:-5%;
        }

        .blob2{
          bottom:-10%;
          right:-6%;
          animation-duration: 24s, 40s, 14s;
        }

        .blob3{
          top:40%;
          right:22%;
          animation-duration: 26s, 50s, 16s;
        }

        /* floating movement */
        @keyframes drift{
          0%{
            transform: translate(0px,0px) scale(1);
          }
          50%{
            transform: translate(60px,-40px) scale(1.15);
          }
          100%{
            transform: translate(-40px,40px) scale(0.9);
          }
        }

        /* twisting rays */
        @keyframes rotate{
          0%{
            transform: rotate(0deg);
          }
          100%{
            transform: rotate(360deg);
          }
        }

        /* energy breathing */
        @keyframes pulse{
          0%,100%{
            opacity:0.5;
          }
          50%{
            opacity:0.8;
          }
        }
      `}</style>

    </div>
  );
};

export default Plasma;
