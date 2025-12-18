console.log('focuss.js loaded')

function fitScene() { 
    const scene = document.getElementById('a-scene');
    const scale = Math.min(
        window.innerWidth / 1280,
        window.innerHeight / 720

    )
    scene.style.transform = `scale(${scale})`;




}
window.addEventListener('resize', fitScene)
fitScene()