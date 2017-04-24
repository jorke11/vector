<html>
    <head>
        <script src="./jquery-1.11.0.min.js"></script>
    </head>

    <style>
        #micanvas{
            border:1px #000 solid;
        }
    </style>
    <body>
        <div class="col-lg-2">
            <button id="btnPrint" class="btn btn-success" type="button">Print</button>
            <input type="text" id="quantity" name="quantity">
        </div>
        <table id="data" border="1">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Aleatorio</th>
                    <th>Pasos</th>
                    <th>Aleatorio</th>
                    <th>Radianes(2*PI)</th>
                    <th>Angulo (Rad * (180/PI))</th>
                    <th>Opuesto(Pasos Sen(Angulo))</th>
                    <th>Adyacente(Pasos Cos(Angulo))</th>
                    <th>Hipotenusa</th>
                </tr>
            </thead>
            <tbody>

            </tbody>

        </table>
        <canvas height="500px" width="500px" id="micanvas">
            Su navegador no soporta en elemento CANVAS
        </canvas>
    </body>
    <script src="./vector.js"></script>
</html>