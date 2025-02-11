//تمرین 1 : چند متغیر را بانام، نام خانوادگی، سن و شهر محل زندگیتون مقداردهی کنید و خروجی بسازید
var name = "Masoume" , familyName = "Arabi" , age =34 , city = "Karaj";
console.log("My name is " + name +" "+ familyName + "\nI have " + age +" years old" + "\nI'm living in " + city)

/*output:
My name is Masoume Arabi
I have 34 years old
I'm living in Karaj
*/


//تمرین 2: خروجی 99999999999999999 را بررسی کنید و دلیل این خروجی را توضیح دهید
console.log(99999999999999999);
/*output
100000000000000000
توضیح: جاوا اسکریپت از استاندارد IEEE754 استفاده میکند و این استاندارد تنها تا یک مقدار خاصی از دقت را نگه میدارد 
که این دقت برابر با 15 رقم اعشاری است و زمانی که مقدار از این حد بیشتر شود، با خطا مواجه می شویم
*/


//تمرین 3: خروجی 0.1+0.2  را بررسی کنید و دلیل آن را توضیح دهید
console.log(0.1+0.2)
/*output
0.30000000000000004
توضیح:زبانی مثل جاوااسکریپت از استاندارد IEE754 استفاده میکند و 
اعداد اعشاری به شکل دقیق نمی توانند به شکل دودویی دقیق در کامپیوترها ذخیره شوند
بنابراین در محاسبه میزانی خطا وجود خواهد داشت
*/

var masoume={
    name:"Masoume",
    familyName:"Arabi",
    age:34,
    famiy:{
        fatherName:"Ali",
        motherName:"Maryam",
    },
    friends:{
        firstFriend:"Mahya",
        secondFriend:"Elham",
        thirdFriend:"Zeynab"
    }
}
console.log(masoume);


/*output
{
    "name": "Masoume",
    "familyName": "Arabi",
    "age": 34,
    "famiy": {
        "fatherName": "Ali",
        "motherName": "Maryam"
    },
    "friends": {
        "firstFriend": "Mahya",
        "secondFriend": "Elham",
        "thirdFriend": "Zeynab"
    }
}
*/

//تمرین 5 : دلیل typeOf null = "Object" چیست
//توضیح: به دلیل اینکه null اولین خانه از حافظه را به خود اختصاص میدهد، یعنی خانه صفرم، پس آن را به شکل یک
//آبجکت میشناسد