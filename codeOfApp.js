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
    camera.position.x = 70;
    camera.position.y = 60;
    camera.position.z = 70;

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


    // описываем размер плоскости
    let planeGeometry_1 = new THREE.PlaneGeometry(70, 70, 1, 1);
    // описываем цвет плоскости
    let planeMaterial_1 = new THREE.MeshLambertMaterial({color: "#ff1821"});
    // создаём плоскость с заданными выше параметрами
    let plane_1 = new THREE.Mesh(planeGeometry_1, planeMaterial_1);
    // поворачиваем плоскость на 90 градусов
    plane_1.rotation.x = (-0.5) * Math.PI;
    // задаём координаты плоскости
    plane_1.position.x = 0;
    plane_1.position.y = 0;
    plane_1.position.z = 0;
    // добавляем плоскость на сцену
    scene.add(plane_1);

    // описываем размер куба
    let cubeGeometry_1 = new THREE.CubeGeometry(4, 4, 2);
    // описываем цвет куба
    let cubeMaterial_1 = new THREE.MeshLambertMaterial({color: "#0000FF"});
    // создаём куб с заданными выше параметрами
    let cube_1 = new THREE.Mesh(cubeGeometry_1, cubeMaterial_1);
    // задаём позицию куба
    cube_1.position.x = -4;
    cube_1.position.y = 3;
    cube_1.position.z = 0;
    // добавляем куб на сцену
    scene.add(cube_1);



    // цвет света
    let lightColor = "#FFFFFF";
    // интенсивность света
    let intensive = 0.9;

    // создаём новый свет
    let directionalLight_1 = new THREE.DirectionalLight(lightColor, intensive);
    // задаём позицию света
    directionalLight_1.position.x = 0;
    directionalLight_1.position.y = 1;
    directionalLight_1.position.z = 0;
    directionalLight_1.rotation.y = 60;
    scene.add( directionalLight_1 );



    ///////////////////////////////////////////////////////



    // выводим на экран то, что видит камера
    renderer.render(scene, camera);


    ///////////////////////////////////////////////////////

    // задаём позицию камеры
    camera.position.x = 0;
    camera.position.y = 30;
    camera.position.z = 0;
    // выводим на экран то, что видит камера
    renderer.render(scene, camera);

    // add events for moving camera

    let front = false;
    let back = false;
    let right = false;
    let left = false;

    window.onkeydown = function(event) {
        const n = event.keyCode;
        switch(n){
            case 38: front = true; break;
            case 40: back = true; break;
            case 37: left = true; break;
            case 39: right = true; break;
        }
    };

    window.onkeyup = function(event){
        const n = event.keyCode;
        switch(n){
            case 38: front = false; break;
            case 40: back = false; break;
            case 37: left = false; break;
            case 39: right = false; break;
        }
    };

    const speed = -0.6;

    let cameraMoveInterval = setInterval(function(){
        if(front === true){
            camera.position.x += speed;
        }

        if(back === true){
            camera.position.x -= speed;
        }

        if(left === true){
            camera.position.z -= speed;
        }

        if(right === true){
            camera.position.z += speed;
        }

        // выводим на экран то, что видит камера
        renderer.render(scene, camera);
    }, 50);

});





