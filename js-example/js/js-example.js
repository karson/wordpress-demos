
alert("this javascript was loaded with js-example.php plugin");

alert("this is a single value that was added" + js_example_params_single);

for(var i =0; i< js_example_params_object.length; i++){
    alert("value" + i.toString() + " an array that was added" + js_example_params_object[i]);    
}