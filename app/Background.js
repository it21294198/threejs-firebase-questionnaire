"use client";
import React, { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const Background = () => {
  useEffect(() => {
    const canvas = document.getElementById("webgl");
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const galaxyPosition = {
      x: 5,
      y: 1,
      z: 10,
    };
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(galaxyPosition.x, galaxyPosition.y, galaxyPosition.z);

    const controls = new OrbitControls(camera, renderer.domElement);

    const loader1 = new GLTFLoader();

    loader1.load("galaxy.glb", function (gltf) {
      // loader.load('scene.gltf', function (gltf) {
      scene.add(gltf.scene);
      camera.lookAt(scene.position);
      // camera.position.set(50,50,13);
    });

    // const loader2 = new GLTFLoader();
    // loader2.load('scene.gltf', function (gltf) {
    //   scene.add(gltf.scene);
    //   camera.position.set(20,20,23);
    // });

    // const light = new THREE.PointLight(0x000000, 20, 100);
    // light.position.set(50, 30, 50);
    // scene.add(light);

    // const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    // scene.add(ambientLight);

    // controls.update();
    // controls.autoRotate = true
    controls.enableRotate = false;
    controls.enableZoom = false;

    const animate = () => {
      requestAnimationFrame(animate);

      // galaxyPosition.x = galaxyPosition.x + 0.01
      // galaxyPosition.y = galaxyPosition.y + 0.01
      // galaxyPosition.z = galaxyPosition.z - 0.01
      // camera.position.set(galaxyPosition.x,galaxyPosition.y,galaxyPosition.z);
      // camera.rotation.set(galaxyPosition.x,galaxyPosition.y,galaxyPosition.z);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <div>
      <canvas id="webgl"></canvas>
    </div>
  );
};

export default Background;
