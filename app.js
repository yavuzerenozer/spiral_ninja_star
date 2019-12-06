

var gl;

var theta = 0.0;
var thetaLoc;

var radius = 0.0;
var radiusLoc;

var spiral = 0.0;
var spiralLoc;

var ScaleAmount = 1.0;
var scaleLoc;

var StartSpin = false;
var SpinAmount;

var StartScale = false;
var ScaleDirection;

var StartSpiral = false;
var SpiralAmount;



var vertices = [
        //X,Y            R,   G,   B
        0.0, 0.125,       0.5, 0.5, 0.5,      
        -0.25, 0.25,      0.5, 0.5, 0.5,
        -0.125, 0.0,      0.5, 0.5, 0.5,
        
        
        -0.125, 0.0,      0.5, 0.5, 0.5,
        -0.25, -0.25,     0.5, 0.5, 0.5,
        0.0, -0.125,      0.5, 0.5, 0.5,
         
        
        0.0, -0.125,      0.5, 0.5, 0.5,
        0.25, -0.25,      0.5, 0.5, 0.5,
        0.125, 0.0,       0.5, 0.5, 0.5,
        
        
        0.125, 0.0,       0.5, 0.5, 0.5,
        0.25, 0.25,       0.5, 0.5, 0.5,
        0.0, 0.125,       0.5, 0.5, 0.5,
           
        -0.125, 0.0,      0.5, 0.5, 0.5,
        0.0, 0.125,       0.5, 0.5, 0.5,
        0.125, 0.0,       0.5, 0.5, 0.5,
        
        -0.125, 0.0,      0.5, 0.5, 0.5,
        0.0, -0.125,      0.5, 0.5, 0.5,
        0.125, 0.0,       0.5, 0.5, 0.5,
                         
];

var vertices1 = [];
var vertices2 = [];
var vertices3 = [];
var vertices4 = [];
var vertices5 = [];




function main() {
    var canvas = document.querySelector("#glCanvas");
    gl = canvas.getContext("webgl2");
    
    if(!gl) {
        alert("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
    }
    


    
    var program = initShaders( gl, "vertex-shader", "fragment-shader" );
    

   

   
    var origin1 = [-0.125, 0.0];
    var origin2 = [0.0, -0.125];
    var origin3 = [0.125, 0.0];
    var origin4 = [0.0, 0.125];
    var origin5 = [0.0, 0.0];
    
    vertices1.push(origin1[0]);
    vertices1.push(origin1[1]);
    
    vertices2.push(origin2[0]);
    vertices2.push(origin2[1]);
    
    vertices3.push(origin3[0]);
    vertices3.push(origin3[1]);
    
    vertices4.push(origin4[0]);
    vertices4.push(origin4[1]);
    
    vertices5.push(origin5[0]);
    vertices5.push(origin5[1]);
    
    
    vertices1.push(1.0);  //The yellow color for fragment shader
    vertices1.push(1.0);  //The yellow color for fragment shader
    vertices1.push(0.0);  //The yellow color for fragment shader
    
    vertices2.push(1.0);  //The yellow color for fragment shader
    vertices2.push(1.0);  //The yellow color for fragment shader
    vertices2.push(0.0);  //The yellow color for fragment shader
    
    vertices3.push(1.0);  //The yellow color for fragment shader
    vertices3.push(1.0);  //The yellow color for fragment shader
    vertices3.push(0.0);  //The yellow color for fragment shader
    
    vertices4.push(1.0);  //The yellow color for fragment shader
    vertices4.push(1.0);  //The yellow color for fragment shader
    vertices4.push(0.0);  //The yellow color for fragment shader
    
    vertices5.push(1.0);  //The yellow color for fragment shader
    vertices5.push(1.0);  //The yellow color for fragment shader
    vertices5.push(0.0);  //The yellow color for fragment shader
    
  
        
    
    
    for(var i = 0; i <= 360; i+=1){
        
        var j = i * Math.PI/180;
        
        var vert1 = [Math.sin(j)/40 -0.125,Math.cos(j)/40];//-0.5
        var vert2 = [Math.sin(j)/40,Math.cos(j)/40-0.125];
        var vert3 = [Math.sin(j)/40 +0.125,Math.cos(j)/40];//+0.5
        var vert4 = [Math.sin(j)/40,Math.cos(j)/40+0.125];
        var vert5 = [Math.sin(j)/40,Math.cos(j)/40];
        
        vertices1.push(vert1[0]);
        vertices1.push(vert1[1]);
        
        vertices2.push(vert2[0]);
        vertices2.push(vert2[1]);
        
        vertices3.push(vert3[0]);
        vertices3.push(vert3[1]);
        
        vertices4.push(vert4[0]);
        vertices4.push(vert4[1]);
        
        vertices5.push(vert5[0]);
        vertices5.push(vert5[1]);
        
        
        vertices1.push(1.0);  //The yellow color for fragment shader
        vertices1.push(1.0);  //The yellow color for fragment shader
        vertices1.push(0.0);  //The yellow color for fragment shader
    
        vertices2.push(1.0);  //The yellow color for fragment shader
        vertices2.push(1.0);  //The yellow color for fragment shader
        vertices2.push(0.0);  //The yellow color for fragment shader
    
        vertices3.push(1.0);  //The yellow color for fragment shader
        vertices3.push(1.0);  //The yellow color for fragment shader
        vertices3.push(0.0);  //The yellow color for fragment shader
    
        vertices4.push(1.0);  //The yellow color for fragment shader
        vertices4.push(1.0);  //The yellow color for fragment shader
        vertices4.push(0.0);  //The yellow color for fragment shader
    
        vertices5.push(1.0);  //The yellow color for fragment shader
        vertices5.push(1.0);  //The yellow color for fragment shader
        vertices5.push(0.0);  //The yellow color for fragment shader
        
        
    }

    /*var positionLocation = gl.getAttribLocation(program, "vPosition");
    
    var translationLocation = gl.getUniformLocation(
             program, "u_translation");

    var rotationLocation = gl.getUniformLocation(program, "u_rotation");*/
    
    
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    
    gl.bufferData(gl.ARRAY_BUFFER, (vertices.length + vertices1.length + vertices2.length + vertices3.length + vertices4.length + vertices5.length)* Float32Array.BYTES_PER_ELEMENT, gl.STATIC_DRAW);
                
                
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(vertices), 0);
    gl.bufferSubData(gl.ARRAY_BUFFER, vertices.length * Float32Array.BYTES_PER_ELEMENT, new Float32Array(vertices1), 0);
    gl.bufferSubData(gl.ARRAY_BUFFER, (vertices1.length + vertices.length) * Float32Array.BYTES_PER_ELEMENT, new Float32Array(vertices2), 0);
    gl.bufferSubData(gl.ARRAY_BUFFER, (2*vertices1.length + vertices.length) * Float32Array.BYTES_PER_ELEMENT, new Float32Array(vertices3), 0);
    gl.bufferSubData(gl.ARRAY_BUFFER, (3*vertices1.length + vertices.length) * Float32Array.BYTES_PER_ELEMENT, new Float32Array(vertices4), 0);
    gl.bufferSubData(gl.ARRAY_BUFFER, (4*vertices1.length + vertices.length) * Float32Array.BYTES_PER_ELEMENT, new Float32Array(vertices5), 0);
    
    

    /*
    const numOfComponents = 2;  // A vertex is defined by 3 values(x,y,z). If it was 2, it would be defined as 2 values(x,y)
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    const vertexCountTriangle = 18;  // How many vertices will we draw (3 for one triangle, 6 for 2, ...)
    */
    
    
    



    
    
    /*
        RENDER TIME
    */
    
    
    
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
       
    gl.clearColor(1.0,1.0,0.0,1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    gl.useProgram(program);

    gl.enableVertexAttribArray(gl.getAttribLocation(program, "vPosition"));
    gl.enableVertexAttribArray(gl.getAttribLocation(program, "vColor"));
    
    
    gl.vertexAttribPointer(         //attribPointer for 4 triangles
        gl.getAttribLocation(program, "vPosition"), 
        2, 
        gl.FLOAT, 
        gl.FALSE, 
        5 * Float32Array.BYTES_PER_ELEMENT, 
        0,
    );
    
    gl.vertexAttribPointer(         //attribPointer for the square(2 triangle)
        gl.getAttribLocation(program, "vColor"), 
        3,  //Number of elements per attribute
        gl.FLOAT,   //Type of elements per attribute
        gl.FALSE,   //Normalizing
        5*Float32Array.BYTES_PER_ELEMENT,   //Size of an individual vertex(includes both vertex coordinates and color)
        2*Float32Array.BYTES_PER_ELEMENT,   //Offset(Since triangle has 2 vertex values, (x,y) offset should be 2 to get to the color section)
    );   
    
    
    thetaLoc = gl.getUniformLocation( program, "theta" );
    radiusLoc = gl.getUniformLocation(program, "radius");
    spiralLoc = gl.getUniformLocation(program, "spiral");
    scaleLoc = gl.getUniformLocation( program, "scale" );
    
    
    
    //Event Handling

    SpinAmount = 1;
    ScaleAmount = 1.00;
    ScaleDirection = 1;
    
    gl.uniform1f(scaleLoc, ScaleAmount);
    
    document.getElementById("StartSpin").onclick = function (event) {
        StartSpin = true;
    };    
    document.getElementById("StopSpin").onclick = function (event) {
        StartSpin = false;
    };  
    document.getElementById("SpinSpeed").onclick = function (event) {
        switch(event.target.index) {    
         
            case 0:
                if(SpinAmount <= 10 && StartSpin == true){
                    SpinAmount += 1;
                    break;
                }
                break;
                
            case 1:
                if(SpinAmount >= -10 && StartSpin == true){
                    SpinAmount -= 1;
                    break;                    
                }

        }
    };
    
    document.getElementById("StartScale").onclick = function (event) {
        StartScale = true;
    };    
    document.getElementById("StopScale").onclick = function (event) {
        StartScale = false;
    };     
    document.getElementById("StartSpiral").onclick = function (event) {
        StartSpiral = true;
    };    
    document.getElementById("StopSpiral").onclick = function (event) {
        StartSpiral = false;
    };      

    render();
}

ScaleDirection;

function render(){
    gl.clear( gl.COLOR_BUFFER_BIT );

    if(StartSpin == true){
        theta += 0.01 * SpinAmount;
        gl.uniform1f(thetaLoc, theta);
    }
       
    if(StartScale == true){

        if(ScaleDirection == 1){
            ScaleAmount += 0.01;
            gl.uniform1f(scaleLoc, ScaleAmount);
            if(ScaleAmount >= 1.50){
                ScaleDirection = -1;
            }
        }
        else{
            ScaleAmount -= 0.01;
            gl.uniform1f(scaleLoc, ScaleAmount);
            if(ScaleAmount <= 0.50){
                ScaleDirection = 1;
            }
        }

       
    }

    if(StartSpiral == true){
        radius += 0.005;       
        spiral -= 0.01;
        gl.uniform1f(radiusLoc, radius);
        
        gl.uniform1f(spiralLoc,spiral);
    }

    gl.drawArrays(gl.TRIANGLES, 0, vertices.length/5);
    gl.drawArrays(gl.TRIANGLE_FAN, vertices.length/5, vertices1.length/5);
    gl.drawArrays(gl.TRIANGLE_FAN, vertices.length/5 + (vertices1.length)/5, vertices2.length/5);
    gl.drawArrays(gl.TRIANGLE_FAN, vertices.length/5 + (2 * vertices1.length)/5, vertices3.length/5);
    gl.drawArrays(gl.TRIANGLE_FAN, vertices.length/5 + (3 * vertices1.length)/5, vertices4.length/5);
    gl.drawArrays(gl.TRIANGLE_FAN, vertices.length/5 + (4 * vertices1.length)/5, vertices5.length/5);

    requestAnimationFrame(render); 
    
}

main();