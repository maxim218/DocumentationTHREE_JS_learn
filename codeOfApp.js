window.addEventListener("load", function() {

    // задаём размеры игрового поля
    const ww = 800;
    const hh = 600;

    // создаём сцену
    let scene = new THREE.Scene();

    // создаём камеру
    let camera = new THREE.PerspectiveCamera(45, ww / hh, 0.1, 1000);

    // создаём визуализатор
    let renderer = new THREE.WebGLRenderer();
    // задаём цвет фона
    renderer.setClearColor("#5ca8d2");
    // задаём размер окна с 3D графикой
    renderer.setSize(ww,hh);

    // создать вспомогательные осевые линии
    let axes = new THREE.AxisHelper(30);
    // добавить вспомогательные осевые линии на сцену
    scene.add(axes);

    // связать рендер с боксом
    document.getElementById("centerBoxMain").append(renderer.domElement);

    // задаём позицию камеры
    camera.position.x = 10;
    camera.position.y = 10;
    camera.position.z = 10;
    // делаем камеру смотрящей на 0-ую точку осей координат
    camera.lookAt(axes.position);

    // выводим на экран то, что видит камера
    renderer.render(scene, camera);


    // выполняем блок кода циклически
    let myInterval = setInterval(function(){
        // увеличиваем положение камеры
        camera.position.x += 0.3;
        // делаем камеру смотрящей на 0-ую точку осей координат
        camera.lookAt(axes.position);

        // выводим на экран то, что видит камера
        renderer.render(scene, camera);
    }, 50);
});