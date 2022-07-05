
    let a = [
        {name_eng:"Guinea-Bissau", name_rus:"Гвинея-Биссау", iso_code:"GNB"},
        {name_eng:"Germany", name_rus:"Германия", iso_code:"DEU"},
        {name_eng:"Gibraltar",   name_rus:"Гибралтар", iso_code:"GIB"},
        {name_eng:"Honduras",   name_rus:"Гондурас", iso_code:"HND"},
        {name_eng:"Hong Kong", name_rus:"Гонконг", iso_code:"HKG"},
        {name_eng:"Grenada", name_rus:"Гренада", iso_code:"GRD"},
        {name_eng:"Greenland",   name_rus:"Гренландия", iso_code:"GRL"},
        {name_eng:"Greece",   name_rus:"Греция", iso_code:"GRC"},
        {name_eng:"Guam", name_rus:"Гуам", iso_code:"GUM"},
        {name_eng:"Denmark", name_rus:"Дания", iso_code:"DNK"},
        {name_eng:"Djibouti",   name_rus:"Джибути", iso_code:"DJI"},
        {name_eng:"Diego Garcia",   name_rus:"Диего-Гарсия", iso_code:"DJE"},                        
    ]

    function Insert_Data() {
        let table = document.getElementById("datas");
        table.innerHTML="";
        let tr="";
        a.forEach(x=>{
           tr+='<tr>';
           tr+='<td>'+x.name_eng+'</td>'+'<td>'+x.name_rus+'</td>'+'<td>'+x.iso_code+'</td>';
           tr+='</tr>';
        })
        table.innerHTML+=tr; 
      }

      function Insert_Add_Data() {
          if(document.getElementById('sign-in').style.display == 'block') {
            document.getElementById('sign-in').style.display = 'none';  
          } else {
            document.getElementById('sign-in').style.display = 'block';
          } 
    }

    function checkform() {
        let name_eng = document.getElementById ('name_eng').value
        let name_rus = document.getElementById ('name_rus').value
        let iso_code = document.getElementById ('iso_code').value

        let errors = '';

        if(name_eng == '') {
          errors+='<span>ошибка ввода name_eng</span><br>';
        }

        if(name_rus == '') {
          errors+='<span>ошибка ввода name_rus</span><br>';
        }

        if(iso_code == '') {
          errors+='<span>ошибка ввода iso_code</span><br>';
        }

        if(errors == '') {
          document.getElementById ('error_divss').innerHTML = '';

          let table = document.getElementById("datas");
          tr='<td>'+name_eng+'</td>'+'<td>'+name_rus+'</td>'+'<td>'+iso_code+'</td>';
          tr+='</tr>';
          table.innerHTML+=tr;

        } else{
          document.getElementById ('error_divss').innerHTML = errors;
        }
    }

    function isErorr() {
      let str = document.getElementById("erorr").value;
    }

    function isErorr(str){
      return (str == null) || (str.length == 0);
     }
