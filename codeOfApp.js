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
    let axes = new THREE.AxisHelper(200);
    // добавить вспомогательные осевые линии на сцену
    scene.add(axes);

    // связать рендер с боксом
    document.getElementById("centerBoxMain").append(renderer.domElement);

    // задаём позицию камеры
    camera.position.x = 100;
    camera.position.y = 100;
    camera.position.z = 100;

    // говорим, что камера смотрит в нулевую точку отсчёта
    camera.lookAt(axes.position);

    // выводим на экран то, что видит камера
    renderer.render(scene, camera);

    ///////////////////////////////////////////////////////

    // создание сетки

    // размер стороны ВСЕЙ сетки
    let sizeOfOneKv = 70;
    // на сколько частей разбита каждая сторона сетки
    let divisions = 8;
    // цвет опорных осей сетки
    let color_1 = "#47ffec";
    // цвет клеток сетки
    let color_2 = "#00FF00";

    // создаём сетку
    let gridHelper_1 = new THREE.GridHelper( sizeOfOneKv, divisions, color_1, color_2);
    // добавляем сетку на сцену
    scene.add( gridHelper_1 );


    ///////////////////////////////////////////////////////






    // выводим на экран то, что видит камера
    renderer.render(scene, camera);

});