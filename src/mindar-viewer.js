import React, { useEffect, useRef } from "react";
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod.js";
import arImg from "./rotatedimg.jpg";
import "mind-ar/dist/mindar-image.prod.js";

const MindARViewer = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const sceneEl = sceneRef.current;
    const arSystem = sceneEl.systems["mindar-image-system"];

    sceneEl.addEventListener("renderstart", () => {
      arSystem.start(); // Start AR
    });

    return () => {
      arSystem.stop();
    };
  }, []);

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <a-scene
        ref={sceneRef}
        mindar-image="imageTargetSrc: /targets.mind; autoStart: true;minConfidence: 0.3 uiLoading: no; uiError: no; uiScanning: no; "
        color-space="sRGB"
        renderer="colorManagement: true, physicallyCorrectLights"
        vr-mode-ui="enabled: false"
        embedded
        device-orientation-permission-ui="enabled: false"
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          margin: 0, // Prevent margins from interfering
          padding: 0, // Prevent padding from interfering
        }}
      >
        <a-assets>
          <img id="card" src={arImg} />
          <a-asset-item
            id="avatarModel"
            src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.0/examples/image-tracking/assets/card-example/softmind/scene.gltf"
          ></a-asset-item>
        </a-assets>

        <a-camera
          position="0 0 0"
          look-controls="enabled: false;pointerLockEnabled: true; touchEnabled: true; smoothing: 0.5"
          style={{
            width: "100vw", // Ensure the camera takes the full width
            height: "100vh", // Ensure the camera takes the full height
            position: "absolute",
            top: 0,
            left: 0,
            margin: 0, // Remove any margins
            padding: 0, // Remove any padding
          }}
        ></a-camera>

        <a-entity mindar-image-target="targetIndex: 0">
          <a-plane
            src="#card"
            position="0 0 0"
            height="0.552"
            width="1"
            rotation="0 0 0"
          ></a-plane>
          <a-gltf-model
            rotation="0 0 0"
            position="0 0 0.1"
            scale="0.005 0.005 0.005"
            src="#avatarModel"
            animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"
          ></a-gltf-model>
        </a-entity>
      </a-scene>
    </div>
  );
};

export default MindARViewer;
