import './emerald.css'
import Silk from '../components/Silk';


// this is just a texting page to test colorSpaceToWorking, css, vectorComponents. 

function Emerald() {
    return (
        <>
            <div className="emerald-bg py-20">
                <div className="emerald-noise" />
                <div className="emerald-vignette" />
                <div className="gold-accent-line" />
                helo
                {/* your content */}


            </div>


            <Silk
                speed={5}
                scale={0.4}
                color="#12502ad9"
                noiseIntensity={1.5}
                rotation={3}
            />
        </>
    )
}

export default Emerald
