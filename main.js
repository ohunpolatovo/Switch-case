//1. Baholash tizimi (Switch)
//Foydalanuvchi 1 dan 5 gacha son kiritadi. Shu songa mos ravishda natijani chiqaring:

//1 — "Yomon"

//2 — "Qoniqarsiz"

//3 — "Qoniqarli"

//4 — "Yaxshi"

//5 — "A'lo"
//Default: "Xato ball kiritildi"
//let ball = +prompt("bahoyingizni kiriting");
//switch (ball) {
// case 1:
//   console.log("Yomon");
//   break;
// case 2:
//   console.log("Qoniqarsiz");
//   break;
// case 3:
//    console.log("Qoniqarli");
//   break;
//  case 4:
//    console.log("Yaxshi");
//   break;
// case 5:
//   console.log("Alo");
//   break;
// default:
//   console.log("Xato ball kiritildi");}
//=======================================
//2. Fasllar (Switch case grouping)
//Oy raqami kiritilganda (1-12) qaysi fasl ekanligini aniqlang.
//Namuna: 12, 1, 2 bo'lsa — "Qish"; 3, 4, 5 bo'lsa — "Bahor" va hokazo.
//let son = +prompt("oy raqamini kiriting");
//switch (son) {
//case 12:
//case 1:
//case 2:
//  console.log("Qish");
//  break;
//case 3:
//case 4:
// case 5:
//   console.log("Bahor");
//   break;
// case 6:
// case 7:
// case 8:
//   console.log("Yoz");
//   break;
// case 9:
// case 10:
// case 11:
//   console.log("Kuz");
//   break;
// default:
//  console.log("Xato oy raqami kiritildi");}
//========================================
//3. Kabisa yili (Mantiqiy operatorlar)
//Yil kiritiladi (masalan: 2024). Agar yil 4 ga bo'linsa va 100 ga bo'linmasa, YOKI 400 ga bo'linsa — "Kabisa yili", aks holda "Oddiy yil" deb chiqsin.
//let yil = +prompt("yilni kiriting");
//if ((yil % 4 === 0 && yil % 100 !== 0) || yil % 400 === 0) {
// console.log("Kabisa yili");}
// // else {console.log("oddiy yil");}
//==========================================
//4. Kattasini aniqlash (Ternary)
//Ikkita a va b sonlari berilgan. ternary operatoridan foydalanib, ularning kattasini max degan o'zgaruvchiga o'zlashtiring.
//let a = +prompt("son kiriting");
//let b = +prompt("son kiriting");
//let max = a > b ? a : b;
//console.log(max);
//==========================================
//5. Juft yoki Toq (Ternary)
//Berilgan sonning juft yoki toqligini bitta satrda aniqlang va natijani konsolga chiqaring.
//let son = +prompt("son kiriting");
//let natija = son % 2 === 0 ? "juft" : "toq";
//console.log(natija);
//===========================================
//6. Supermarket chegirmasi (If + Logical)
//Xarid summasi va foydalanuvchida kupon bor-yo'qligi (true/false) beriladi.
//Agar summa 100,000 dan katta VA kupon bo'lsa — "20% chegirma".
//Agar faqat summa 100,000 dan katta bo'lsa — "5% chegirma".
//Aks holda — "Chegirma yo'q".
//let summa = +prompt("xarid summasini kiriting");
//let kupon = prompt("kuponingiz bormi?(true/false)") === "true";
//if (summa > 100000 && kupon) { console.log("20% chegirma");}//
//  else if (summa > 100000) {console.log("5% chegirma");}
// else { console.log("Chegirma yoq");}

//7. Hafta kuni (Switch)
//1 dan 7 gacha son kiritilganda haftaning mos kunini chiqaring. 6 va 7 raqamlari uchun qo'shimcha ravishda "Dam olish kuni" yozuvi ham chiqsin.
//let kun = +prompt("hafta kunlarini kiriting");
//switch (kun) {
// case 1:
//   console.log("dushanba");
//  break;
//case 2:
// console.log("seshanba ");
//  break;
// case 3:
//   console.log("chorshanba ");
//    break;
//  case 4:
//   console.log("payshanba ");
//   break;
//  case 5:
//   console.log("juma ");
//   break;
// case 6:
//   console.log("shanba ");
//   break;
//  case 7:
//   console.log("yakshanba ");
//  break;
// default:
//   console.log("hato kunni kiritdingiz");}
//==========================================
//8. Kirish huquqi (Complex Logic)
//Foydalanuvchi yoshi va yonida ota-onasi borligi haqida ma'lumot berilgan.
//Agar yoshi >= 18 bo'lsa — "Ruxsat berildi".
//Agar yoshi < 18 bo'lsa va ota-onasi bilan bo'lsa — "Faqat ota-ona bilan ruxsat".
//Aks holda — "Ruxsat berilmadi".
//let yosh = +prompt("yoshingizni kiriting");
//let otaOnaBorligi = prompt("ota-onasi bilan bormi?(true/false)") === "true";
//let ruxsat =
//  yosh >= 18
//   ? "ruxsat berildi"
//    : yosh < 18 && otaOnaBorligi
//      ? "faqat ota ona bilan ruxsat"
//      : "ruxsat berilmadi";
//console.log(ruxsat);
//==========================================
//9. Sonning holati (If else chain)
//Berilgan sonning musbat, manfiy yoki nolga tengligini aniqlang.
//let son = +prompt("son kiriting");
//if (son > 0) console.log("musbat son");
//else if (son < 0) console.log("manfiy son");
//else console.log("son nolga teng");

//10. Type Checker (Switch + typeof)
//O'zgaruvchining turini (type) tekshiring.
//Agar number bo'lsa — "Son kiritdingiz".
//Agar string bo'lsa — "Matn kiritdingiz".
//Agar boolean bo'lsa — "Mantiqiy qiymat".
// 10. Type Checker (Switch + typeof)
// O'zgaruvchining turini (type) tekshiring.
let input = prompt("biror narsa kiriting");
switch (typeof input) {
  case "number":
    console.log("Son kiritdingiz");
    break;
  case "string":
    console.log("Matn kiritdingiz");
    break;
  case "boolean":
    console.log("Mantiqiy qiymat");
    break;
  default:
    console.log("Boshqa turdagi ma'lumot");
}
