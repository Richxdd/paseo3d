import { Entity, Scene } from 'aframe-react'
import Head from 'next/head'

export default function Home() {


  return (
    <div >
      <Head>
        <script src="https://aframe.io/releases/1.2.0/aframe.min.js" />
      </Head>
      asfasff

      <a-scene >
        <a-sky src="./images/loby.jpg" ></a-sky>

        <a-sphere vista id="salas" color="#63CC55" height="1" width="1" position="-28 1.5 -20" rotation="0 -15 0"
          animation="property: position;to: -28 1.6 -20; loop: true; dur: 800;easing:linear">
        </a-sphere>

        {/* <a-sky src="/image/360/lobby.jpg" rotation="0 -90 0"></a-sky> */}

        <a-entity cursor="rayOrigin:mouse"></a-entity>
      </a-scene>

    </div>
  )
}
