

    function loadData(element) {
        
    
        var xmlhttp;
        if (window.XMLHttpRequest)
    {
        xmlhttp= new XMLHttpRequest();
    }
    else 
    {
        xmlhttp= new ActiveXObject("Microsoft.XMLHTTP")
    }


      xmlhttp.onreadystatechange= function()

      {
        if (   xmlhttp.readyState == 4 && xmlhttp.status == 200)

        {

            document.getElementById("#myModalBody").innerHTML = xmlhttp.responseText;

        }

    }
        switch(element.id){
          case 'img': xmlhttp.open("GET", "../assignement9/text.html", true);
        }

        xmlhttp.send()

      }






