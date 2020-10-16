
var province = document.getElementById("province");
var city = document.getElementById("city");
var country = document.getElementById("country");
select_province();
//选择省份
function select_province() {
    for (var i = 0; i < pro.length; i++) {
        var pro_option = document.createElement("option");
        pro_option.innerHTML = pro[i].item_name;
        province.appendChild(pro_option);

    }
    province.onchange = function () {
        select_city()
    };
}


//选择城市
function select_city() {
    city.options.length = 1;
    country.options.length = 1;
    //var arr = [];
    var name = province.value;
    for (var i = 0; i < pro.length; i++) {
        if (pro[i].item_name === name) {
            var code = pro[i].item_code;
        }
    }
    for (var j = 0; j < ci.length; j++) {
        if (ci[j].item_code.substring(0, 2) === code.substring(0, 2)) {
            //arr.push(ci[j]);
            var ci_option = document.createElement("option")
            ci_option.innerHTML = ci[j].item_name;

            city.appendChild(ci_option);
        }
    }
    /*for(var i= 0; i<arr.length; i++){;
        var ci_option = document.createElement("option")
        ci_option.innerHTML = arr[i].item_name;
        
        city.appendChild(ci_option);
    }*/
    city.onchange = function () {
        select_country()
    };
}

//选择区/县
function select_country() {
    country.options.length = 1;
    //var arr = [];
    var name = city.value;
    for (var i = 0; i < ci.length; i++) {
        if (ci[i].item_name === name) {
            var code = ci[i].item_code;
        }
    }

    for (var j = 0; j < cou.length; j++) {
        if (cou[j].item_code.substring(0, 4) === code.substring(0, 4)) {
            //arr.push(cou[j]);
            var cou_option = document.createElement("option");
            cou_option.innerHTML = cou[j].item_name;

            country.appendChild(cou_option);
        }
    }
    /*for(var i=0; i<arr.length; i++){
        var cou_option = document.createElement("option");
        cou_option.innerHTML = arr[i].item_name;

        country.appendChild(cou_option);
    }*/
}
