import { useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

export default function Home() {
  useEffect(() => {
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 30)
    camera.position.set(0, 0, 0)

    const scene = new THREE.Scene()

    const loader = new GLTFLoader().setPath('/models/gltf/blue_archivekasumizawa_miyu/')
    loader.load('scene.gltf', function (gltf) {
      scene.add(gltf.scene)
      scene.getObjectByName('Sketchfab_Scene').position.set(0, -1, -1)
      render()
    })

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1
    renderer.outputEncoding = THREE.sRGBEncoding

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.addEventListener('change', render) // use if there is no animation loop
    controls.minDistance = 2
    controls.maxDistance = 10
    controls.target.set(0, 0, -1)
    controls.update()

    function render() {
      renderer.render(scene, camera)
    }
    document.getElementById('box').appendChild(renderer.domElement)
    render()
  })

  return (
    <div>
      <Head>
        <title>ChenYanfei</title>
        <meta name="description" content="movie,music,image,news" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.hero + ' text-5xl text-center p-8'}>Welcome to my website!!</h1>
      <div id="box" className={styles.box}></div>
    </div>
  )
}
