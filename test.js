// type: 1 for logo and promo items
// type: 2 for web and ecommerce
// type: 3 for stationary and brouchers

const all = [];

const logoImages = [
  "/images/logo_design/Animal.jpg",
  "/images/logo_design/Business_and_Consulting.jpg",
  "/images/logo_design/Computer_and_Networking.jpg",
  "/images/logo_design/Education_and_Training.jpg",
  "/images/logo_design/Industrial.jpg",
];

let w = 1;
let e = 1;
let logo = 0;
let stationary = 0;
let promo = 0;
let broucher = 0;

for (let i = 1; i <= 40; i++) {
  //--------------------------------------------------------------------------------------------
  // Logo
  //--------------------------------------------------------------------------------------------
  if (i % 6 === 1) {
    const num = Math.floor(logo / 4);
    const top = num * 298 + "px";
    const left = (promo % 4) * 233 + "px";
    all.push({
      type: 1,
      imageSrc: logoImages[logo % 4],
      left,
      top,
    });
    logo++;
  }
  //--------------------------------------------------------------------------------------------
  // Stationary
  //--------------------------------------------------------------------------------------------
  else if (i % 6 === 2) {
    const num = Math.floor(stationary / 3);
    const top = num * 299.1 + "px";
    const left = (stationary % 3) * 234 + "px";
    all.push({
      type: 3,
      imageSrc: "/images/stationery_mockups/spritesheet.jpg",
      left,
      top,
      modalSrc: `/images/stationery_mockups/popups/stationery_mockups_${
        stationary + 1
      }.jpg`,
    });
    stationary++;
  }
  //--------------------------------------------------------------------------------------------
  // WEB
  //--------------------------------------------------------------------------------------------
  else if (i % 6 === 3) {
    all.push({
      type: 2,
      imageSrc: `/images/web_design/${w}.jpg`,
    });
    w++;
  }
  //--------------------------------------------------------------------------------------------
  // ECOMMERCE
  //--------------------------------------------------------------------------------------------
  else if (i % 6 === 4) {
    all.push({
      type: 2,
      imageSrc: `/images/ecomerce_website_development/ecommerce_website_development_${e}.png`,
    });
    e++;
  }
  //--------------------------------------------------------------------------------------------
  // PROMO
  //--------------------------------------------------------------------------------------------
  else if (i % 6 === 5) {
    const num = Math.floor(promo / 3);
    const top = num * 298 + "px";
    const left = (promo % 3) * 233 + "px";
    all.push({
      type: 1,
      imageSrc: "/images/promo_items/spritesheet.jpg",
      left,
      top,
    });
    promo++;
  }
  //--------------------------------------------------------------------------------------------
  // BROUCHURE
  //--------------------------------------------------------------------------------------------
  else if (i % 6 === 0) {
    const num = Math.floor(broucher / 4);
    // const top = num * 234 + "px";
    // const left = (broucher % 4) * 298.5 + "px";
    const top = num * 298.5 + "px";
    const left = (broucher % 4) * 234 + "px";
    all.push({
      type: 3,
      imageSrc: "/images/brochuer/spritesheet.jpg",
      left,
      top,
      modalSrc: `/images/brochuer/popups/popup_${broucher + 1}.jpg`,
    });

    broucher++;
  }
}

console.log(JSON.stringify(all));
