<html>
    <head>
        <title>html rocks!!</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"> </script> 
    </head>
    <body>
        <p> a =<input type="number" id="ainput"/></p>
        <p> b =<input type="number" id="binput"/></p>
        <button onclick="add()">add</button>
        <button onclick="multiply()">multiply</button>
        <button onclick="minus()">minus</button>
        <button onclick="divide()">divide</button>
    </body>
    <script>
        function add()
        {
            var a = parseInt($('#ainput').val())
            var b = parseInt($('#binput').val())
            alert(a + b)
        }
        function multiply()
        {
            var a = parseInt($('#ainput').val())
            var b = parseInt($('#binput').val())
            alert(a * b)
        }
        function minus()
        {
            var a = parseInt($('#ainput').val())
            var b = parseInt($('#binput').val())
            alert(a - b)
        }
        function divide()
        {
            var a = parseInt($('#ainput').val())
            var b = parseInt($('#binput').val())
            alert(a / b)
        }
    </script>
</html>
