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
    camera.position.x = 20;
    camera.position.y = 20;
    camera.position.z = 20;

    // говорим, что камера смотрит в нулевую точку отсчёта
    camera.lookAt(axes.position);

    // выводим на экран то, что видит камера
    renderer.render(scene, camera);


    // создадим материал зелёного цвета
    let material_for_lines_first = new THREE.LineBasicMaterial({ color: "#00FF00" });

    // создаём структуру для хранения точек
    let container_of_tochki_first = new THREE.Geometry();

    // добавляем точки
    container_of_tochki_first.vertices.push(new THREE.Vector3(1, 0, 0));
    container_of_tochki_first.vertices.push(new THREE.Vector3(5, 1, 0));
    container_of_tochki_first.vertices.push(new THREE.Vector3(1, 2, 0));
    container_of_tochki_first.vertices.push(new THREE.Vector3(5, 3, 0));

    // создаём ломанную линию из точек
    let figura_first = new THREE.Line(container_of_tochki_first, material_for_lines_first);

    // добавляем ломанную линию на сцену
    scene.add(figura_first);

    // выводим на экран то, что видит камера
    renderer.render(scene, camera);
});