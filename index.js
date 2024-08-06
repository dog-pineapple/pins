
window.addEventListener('scroll', function () {
  var element = this.document.querySelector('.pin1');
  var position = element?.getBoundingClientRect();
  if (position) {

    if (position.top < this.window.innerHeight && position?.bottom >= 0) {
      element?.classList.add('visible')
    } else {
      element?.classList.remove('visible')
    }
  }
})
window.addEventListener('scroll', function () {
  var element = this.document.querySelector('.pin3');
  var position = element?.getBoundingClientRect();
  if (position) {

    if (position.top < this.window.innerHeight && position?.bottom >= 0) {
      element?.classList.add('visible')
    } else {
      element?.classList.remove('visible')
    }
  }
})
window.addEventListener('scroll', function () {
  var element = this.document.querySelector('.bigger');
  var position = element?.getBoundingClientRect();
  if (position) {

    if (position.top < this.window.innerHeight && position?.bottom >= 0) {
      element?.classList.add('visible')
    } else {
      element?.classList.remove('visible')
    }
  }
})
window.addEventListener('scroll', function () {
  var element = this.document.querySelector('.body');
  var position = element?.getBoundingClientRect();
  if (position) {

    if (position.top < this.window.innerHeight && position?.bottom >= 0) {
      element?.classList.add('visible')
    } else {
      element?.classList.remove('visible')
    }
  }
})
window.addEventListener('scroll', function () {
  var element = this.document.querySelector('.pins');
  var position = element?.getBoundingClientRect();
  if (position) {

    if (position.top < this.window.innerHeight && position?.bottom >= 0) {
      element?.classList.add('visible')
    } else {
      element?.classList.remove('visible')
    }
  }
})
const scene = new THREE.Scene;
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg'), alpha: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(500, 500);
camera.position.setZ(30);
renderer.render(scene, camera);
function animate() {
  requestAnimationFrame(animate);
  pin.rotation.x += 0.01;
  pin.rotation.y += 0.01;
  pin.rotation.z += 0.01;

  renderer.render(scene, camera);
}

const texture = new THREE.TextureLoader().load('https://ir-3.ozone.ru/s3/multimedia-1-b/wc1000/7081505291.jpg');
const pin = new THREE.Mesh(new THREE.BoxGeometry(15, 45, 20), new THREE.MeshBasicMaterial({ map: texture }));

scene.add(pin);
animate();


/* function sendMail() {
  var params = {
      name: string = document.getElementById("name").value,
      phone: string = document.getElementById("phone").value,
  }
  console.log(params);
  emailjs.send("service_lpil0xz", "template_874m79e", params).then(alert('email is send!')); 

}
 */
