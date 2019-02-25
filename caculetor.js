<html>
    <head>
        <body>
            <p> a = <input type="number" id="anumber"/></p>
            <p> b = <input type="number" id="bnumber"/></p>
            <button onclick =alert(add(anumber,bnumber))>add</button>
        </body>
        <script>
            

            function add(a1 , b1)
            {
                return parseInt(a1) + parseInt(b1)
            }
        </script>
    </head>
</html>
