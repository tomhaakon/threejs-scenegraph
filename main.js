import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { sendError } from "./errorHandler.js";
sendError("Loaded", "main.js");
//const controls = new OrbitControls(camera, renderer.domElement);
const loader = new GLTFLoader();
