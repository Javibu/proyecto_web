       $(document).ready(function(){
            var prueba
            $("#btnconsultar").click(function(){
                var varid=$("#txtcedula").val();
               $.ajax({
                   type:"GET",
                   url:"http://localhost:3000/todo",
                   dataType:"json",
                   contentType:"text/plain"
               }).done(function(msg){
                   var htmlpuro='<table border=1>'
                   for (var dato in msg[0])
                   {
                       htmlpuro+='<tr>'
                           htmlpuro+='<td>'+  msg[0][dato].direccion+'</td>'
                           htmlpuro+='<td>'+ msg[0][dato].nombre+'</td>'
                        htmlpuro+='</tr>'

                   }
                   htmlpuro+='</table>'
                    $("#contenido").html(htmlpuro)
               });
               
               
               
            });
            
            $("#btninsertar").click(function(){
                
                var varcedula =$("#txtcedula").val();
                var varnombre=$("#txtnombre").val();
                var vardireccion=$("#txtdireccion").val();
                
                datos={"cedula":varcedula,"nombre":varnombre,"direccion":vardireccion};
                //datos={"razonsocial":"xxx","correo":"correo","token":"token"};
               $.ajax({
                   type:"POST",
                   url:"http://localhost:3000/todo",
                   dataType:"text",
                   contentType:"application/json",
                   data: JSON.stringify(datos)
               }).done(function(msg){
                   alert(msg);
               }); 
           
            });
            
            
            $("#btnmodificar").click(function(){
                
                var varcedula=$("#txtcedula").val();
                var varnombre=$("#txtnombre").val();
                var vardireccion=$("#txtdireccion").val();
                
                datos={"cedula":varcedula,"nombre":varnombre,"direccion":vardireccion};
                
               $.ajax({
                   type:"PUT",
                   url:"http://localhost:3000/todo",
                   dataType:"text",
                   contentType:"application/json",
                   data: JSON.stringify(datos)
               }).done(function(msg){
                   alert(msg);
               }); 
           
            });
            
            $("#btneliminar").click(function(){
                var varcedula=$("#txtcedula").val();
                var varnombre=$("#txtnombre").val();
                var vardireccion=$("#txtdireccion").val();
                datos={"cedula":varcedula,"nombre":varnombre,"direccion":vardireccion};

               $.ajax({
                   type:"DELETE",
                   url:"http://localhost:3000/todo" ,
                   dataType:"text",
                   contentType:"application/json",
                   data:JSON.stringify(datos)
               }).done(function(msg){
                   alert(msg);
               });
            });
            
            
            
            
            
            
            
            
        });
    