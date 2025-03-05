/***********************************************************************************************************/
/*تمرین 28: خروجی کد زیر چیست و چرا*/
function outer() {
    var x = 10;
    function inner() {
        console.log(x);
    }
    inner();
}
outer(); //10
/*پاسخ : این کداز دو تابع تو در تو تشکیل شده است. تابع inner به مقدار x دسترسی دارد
چون هم تابع و هم متغیر در داخل اسکوپ تابع outer تعریف شده اند.
پس مقدار 10 به عنوان لاگ برگردانده می شود. */

/***********************************************************************************************************/
/*تمرین ۲۹: کد زیر را کامل کن تا تابع counter هر بار که اجرا شد، مقدار قبلی خودش را حفظ کند و یکی به آن اضافه کند:*/
function counter() {
    var count = 0;
    return function() {
        count++;
        return count;
    };
}

var myCounter = counter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3

/************************************************************************************************************/
/*تمرین ۳۰: یک برنامه بنویس که ابتدا عددهای زوج آرایه را جدا کند و سپس مقدار هرکدام را دو برابر کند و در قالب یک آرایه برگرداند.*/
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var result =[];

numbers.forEach(function(element) {
    if(element%2 === 0){
        result.push(element * 2);
    }
    else{

    }
});
console.log(result); // [4, 8, 12, 16]

/************************************************************************************************************/
/*تمرین ۳۱: در نمونه آبجکت زیر نام کلیدهای آبجکت به صورت snake_case تعریف شده است لطفا تابعی به نام convert بنویسید که نام کلیدها رو به camelCase تبدیل کند.*/
var obj = {
    charlize_theron: 23,
    brad_pitt: ['angelina_jolie', 'Nicole Kidman'],
    jennifer_lawrence: {
      jennifer_aniston: 22,
      jennifer_connelly: 63
    }
  }

  function convert(obj){

    Object.keys(obj).forEach(
        
        function(element){

            if(typeof(obj[element]) === 'object' && !Array.isArray(obj[element])){
                console.log(toCamelCase(element))
                convert(obj[element]);

            }
            else{

                console.log(toCamelCase(element))
            }
        }
    )
  }

  function toCamelCase(str) {
    return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}
  
  var newObj = convert(obj)


 /*********************************************************************************************************************/ 
 /*تمرین ۳۲: تابعی به نام convert بنویسید که متغیر data را دریافت می کند و خروجی مشابه زیر تولید می کند.*/

    function convert2(data) {
      var map = new Map();
      var newData;
    
      data.forEach(function(item) {
        map.set(item.id, { id: item.id, title: item.title, children: [] });
      });
    
      data.forEach(function(item) {
        if (item.parentId === null) {
          newData = map.get(item.id);
        } else {
          var parent = map.get(item.parentId);
          if (parent) {
            parent.children.push(map.get(item.id));
          }
        }
      });
    
      return newData;
    }
  
    var data = [
      { id: 1, title: 'Yek', parentId: null },
      { id: 2, title: 'Do', parentId: 1 },
      { id: 3, title: 'Se', parentId: 1 },
      { id: 4, title: 'Chahar', parentId: 2 },
      { id: 5, title: 'Panj', parentId: 2 },
      { id: 6, title: 'Shesh', parentId: 3 }
    ];
  var newData = convert2(data);
  console.log(JSON.stringify(newData, null, 2));


  /******************************************************************************************* */
  /*تمرین ۳۴: تابعی بنویسید به نام sort که یک آرایه ای 
  از اعداد رو میگیرد و با استفاده از الگوریتم مرتب سازی حبابی (Bubble Sort)  آن رو به صورت صعودی مرتب میکند.*/
  function sort(input){
    var temp;
    for(var i= 0 ; i < input.length-1; i++){
        for(var j=0 ; j < input.length - i - 1 ; j++){
          if(input[j] > input[j+1]){
            temp = input[j];
            input[j] = input[j+1];
            input[j+1] = temp; 
          }
          else{

          }
        } 
    }
    return input;
  }

  var array = [3,1,10,11,9,6,4]
  console.log(sort(array));
  /************************************************************************************************************/