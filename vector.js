function Vectors() {
    var table;
    var canvas = document.getElementById("micanvas");
    var ctx = canvas.getContext("2d");

    this.init = function () {
        $("#btnPrint").click(function () {
            obj.printGraph($("#quantity").val());
        });
    }

    this.printGraph = function (quantity = 10) {

        quantity = quantity || $("#quantity").val();
        var data = [];
        var ale = 0, ale2 = 0, pasos = 0, hip = 0, angulo = 0, radianes = 0, opuesto = 0, adyacente = 0;

        for (var i = 0; i < quantity; i++) {
            ale = Math.random() * (1 - 0) + 0;
            ale2 = Math.random() * (1 - 0) + 0;

//            angulo = ((Math.atan((ale2 / ale))) * 100).toFixed(1);

            radianes = ale2 * 2 * Math.PI;
            angulo = radianes * (180 / Math.PI);

            data.push({
                aleatorio: ale,
                opuesto: opuesto,
                adyacente: adyacente,
//                x: ale * 500,
                x: adyacente * 500,
                y: opuesto * 500,
//                y: ale2 * 500,
                hip: 0,
                pasos: 0,
                aleatorio2: ale2,
                hipotenusa: 0,
                angulo: angulo,
                radianes: radianes,
                opuesto: 0,
                adyacente: 0
            });
        }

        for (var j = 0; j < quantity; j++) {
            if (data[j].aleatorio >= 0 && data[j].aleatorio <= 0.1) {
                data[j].pasos = 1;
            } else if (data[j].aleatorio > 0.1 && data[j].aleatorio <= 0.2) {
                data[j].pasos = 2;
            } else if (data[j].aleatorio > 0.2 && data[j].aleatorio <= 0.3) {
                data[j].pasos = 3;
            } else if (data[j].aleatorio > 0.3 && data[j].aleatorio <= 0.4) {
                data[j].pasos = 4;
            } else if (data[j].aleatorio > 0.4 && data[j].aleatorio <= 0.5) {
                data[j].pasos = 5;
            } else if (data[j].aleatorio > 0.5 && data[j].aleatorio <= 0.6) {
                data[j].pasos = 6;
            } else if (data[j].aleatorio > 0.6 && data[j].aleatorio <= 0.7) {
                data[j].pasos = 7;
            } else if (data[j].aleatorio > 0.7 && data[j].aleatorio <= 0.8) {
                data[j].pasos = 8;
            } else if (data[j].aleatorio > 0.8 && data[j].aleatorio <= 0.9) {
                data[j].pasos = 9;
            } else {
                data[j].pasos = 10;
            }

            data[j].opuesto = data[j].pasos * Math.sin(data[j].angulo)
            data[j].opuesto = (data[j].opuesto > 0)?data[j].opuesto:data[j].opuesto*-1
            data[j].adyacente = data[j].pasos * Math.cos(data[j].angulo)
            data[j].adyacente = (data[j].adyacente > 0)?data[j].adyacente:data[j].adyacente*-1
            data[j].angulo2 = data[j].opuesto / data[j].pasos;
            data[j].hipotenusa = Math.sqrt(Math.pow(data[j].opuesto,2) + Math.pow(data[j].adyacente,2));
            
        }


        
        ctx.moveTo(0, 500);

        for (i = 0; i < quantity; i++) {
            ctx.lineTo(data[i].opuesto*50, 500 - data[i].adyacente*50);
            ctx.fillText(i + " (" + data[i].opuesto.toFixed(2) + " , " + data[i].adyacente.toFixed(2) + ")", (data[i].opuesto*50 + -1).toFixed(2), (500 - 1 - data[i].adyacente*50).toFixed(2));
        }


        ctx.closePath();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, 500);
        ctx.lineTo(data[quantity - 1].opuesto*50, 500 - data[quantity - 1].adyacente*50);
        data[quantity - 1].angulo = ((Math.atan((data[quantity - 1].aleatorio2 / data[quantity - 1].aleatorio))) * 100).toFixed(1);

        ctx.fillText("Longitud T: " + data[quantity - 1].hipotenusa.toFixed(2), ((data[quantity - 1].opuesto*50 + 15) / 2), (500 - data[quantity - 1].adyacente*50 / 2));


        ctx.lineWidth = 5;
        ctx.strokeStyle = '#FF0000';
        ctx.stroke();

        var html = "";
        $("#data tbody").empty();
        for (i = 0; i < quantity; i++) {
            html += '<tr><td>' + i + '</td><td>' + data[i].aleatorio + '</td><td>' + data[i].pasos + '</td><td>' + data[i].aleatorio2 + '</td><td>' + data[i].radianes + '</td>';
            html += '<td>' + data[i].angulo + '</td><td>' + data[i].opuesto + '</td><td>' + data[i].adyacente + '</td><td>' + data[i].hipotenusa + '</td></tr>';
        }
        $("#data tbody").html(html);
        console.log(data);
    }

    this.printLine = function (x1, y1, x2, y2) {
        var canvas = document.getElementById("micanvas");
        var ctx = canvas.getContext("2d");
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, 500 - y2);
        ctx.stroke();
    }


}

var obj = new Vectors();
obj.init();

