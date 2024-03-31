export const shoesMenu = [
  {
    title: "HOME",
    link: "/demo/shoes-store",
  },
  {
    title: "MEN",
    link: "/demo/shoes-store/men-shoes",
    submenu: [
      { title: "Slippers", link: `/demo/shoes-store/men-shoes` },
      { title: "Formal", link: `/demo/shoes-store/men-shoes` },
      { title: "Comfort", link: `/demo/shoes-store/men-shoes` },
      { title: "Sandals", link: `/demo/shoes-store/men-shoes` },
      { title: "Sports", link: `/demo/shoes-store/men-shoes` },
    ],
  },
  {
    title: "WOMEN",
    link: "/demo/shoes-store/women-shoes",
    submenu: [
      { title: "Flat", link: `/demo/shoes-store/women-shoes` },
      { title: "Heels", link: `/demo/shoes-store/women-shoes` },
      { title: "Party Wear", link: `/demo/shoes-store/women-shoes` },
      { title: "Pumps", link: `/demo/shoes-store/women-shoes` },
      { title: "Mule", link: `/demo/shoes-store/women-shoes` },
      { title: "Court", link: `/demo/shoes-store/women-shoes` },
      { title: "Sports", link: `/demo/shoes-store/women-shoes` },
    ],
  },
  {
    title: "NEW ARRIVALS",
    link: "/demo/shoes-store/new-arrivals",
  },
  {
    title: "CONTACT",
    link: "/demo/shoes-store/contact-us",
  },
  {
    title: "BLOG",
    link: "/demo/shoes-store/blogs",
  },
];

export const bagsMenu = [
  {
    title: "home",
    link: "/demo/bag-store",
  },
  {
    title: "Products",
    link: "/demo/bag-store/products",
  },
  {
    title: "Shop",
    link: "/demo/bag-store/women",
    submenu: [
      { title: "Women fashion bags", link: `/demo/bag-store/women` },
      { title: "Travel bags", link: `/demo/bag-store/travel` },
      { title: "Others bags", link: `/demo/bag-store/others` },
    ],
  },
  {
    title: "CONTACT",
    link: "/demo/bag-store/contact-us",
  },
  {
    title: "Blog",
    link: "/demo/bag-store/blogs",
  },
];

export const electronicsMenu = [
  {
    title: "Home",
    link: "/demo/electronics-store",
  },
  {
    title: "Products",
    link: "/demo/electronics-store/products",
  },
  {
    title: "Category",
    submenu: [
      { title: "Refrigerators", link: `/demo/electronics-store/fridge` },
      { title: "Fans", link: `/demo/electronics-store/fan` },
      { title: "Health & Beauty", link: `/demo/electronics-store/health-and-beauty` },
      { title: "Others", link: `/demo/electronics-store/other` },
    ],
  },
  {
    title: "CONTACT",
    link: "/demo/electronics-store/contact-us",
  },
  {
    title: "Blog",
    link: "/demo/electronics-store/blogs",
  },
];

export const clothingMenu = [
  {
    title: "home",
    link: "/demo/clothing-store",
  },
  {
    title: "Products",
    link: "/demo/clothing-store/products",
  },
  {
    title: "Shop",
    link: "/demo/clothing-store/women",
    submenu: [
      {
        title: "Women fashion",
        submenu: [
          { title: "Dresses", link: "/demo/clothing-store/dress" },
          { title: "Jackets", link: "/demo/clothing-store/jacket" },
          { title: "Sweaters", link: "/demo/clothing-store/sweater" },
        ],
      },
    ],
  },
  {
    title: "CONTACT",
    link: "/demo/clothing-store/contact-us",
  },
  {
    title: "Blog",
    link: "/demo/clothing-store/blogs",
  },
];

export const mainMenu = [
  {
    title: "home",
    // submenu: [
    //   { title: "Clothing", link: "/layout/clothing" },
    //   { title: "Grocery", link: "/" },
    //   { title: "Electronics", link: "/layout/electronics" },
    // ],
    link: "/",
  },
  {
    title: "demo",
    submenu: [
      { title: "Apparels", link: "/demo/clothing-store", target: "_blank" },
      { title: "Bags", link: "/demo/bag-store", target: "_blank" },
      { title: "Shoes", link: "/demo/shoes-store", target: "_blank" },
      { title: "Electronics", link: "/demo/electronics-store", target: "_blank" },
    ],
    link: "",
  },
  {
    title: "products",
    link: "#",
    submenu: [
      { title: "4-image", link: "/product/4-image" },
      { title: "Sticky", link: "/product/sticky" },
      {
        title: "Thumbnails",
        submenu: [
          { title: "Right thumbnail", link: "/product/right-thumbnail" },
          { title: "Left thumbnail", link: "/product/left-thumbnail" },
          { title: "Bottom thumbnail", link: "/product/bottom-thumbnail" },
        ],
      },
    ],
  },
  {
    title: "feature",
    link: "#",
    submenu: [
      {
        title: "Theme Element",
        submenu: [
          { title: "Category", link: "/feature/theme-element/category" },
          {
            title: "Collection Banner",
            link: "/feature/theme-element/collection-banner",
          },
          { title: "Home Slider", link: "/feature/theme-element/home-slider" },
          { title: "Service", link: "/feature/theme-element/service" },
          { title: "Title", link: "/feature/theme-element/title" },
        ],
      },
      { title: "Product Box", link: "/feature/product-element/product-box" },
      { title: "Multi slider", link: "/feature/product-element/multi-slider" },
      { title: "Tab", link: "/feature/product-element/tab" },
      {
        title: "Shop",
        submenu: [
          { title: "Left Sidebar", link: "/shop/left-sidebar" },
          { title: "Right Sidebar", link: "/shop/right-sidebar" },
          { title: "No Sidebar", link: "/shop/no-sidebar" },
          { title: "Three Grid", link: "/shop/three-grid" },
          { title: "Six Grid", link: "/shop/six-grid" },
          { title: "List View", link: "/shop/list-view" },
        ],
      },
    ],
  },
  {
    title: "pages",
    link: "#",
    submenu: [
      {
        title: "Account",
        submenu: [
          { title: "Dashboard", link: "/my-account/dashboard" },
          { title: "Orders", link: "/my-account/orders" },
          { title: "Wishlist", link: "/my-account/wishlist" },
          { title: "Settings", link: "/my-account/settings" },
          { title: "Compare", link: "/my-account/compare" },
        ],
      },
      { title: "Order Success", link: "/pages/order-success" },
      { title: "404 Page", link: "/404" },
      { title: "Collection", link: "/pages/collection" },
      {
        title: "Email Templates",
        submenu: [
          { title: "Template 1", link: "/email_template_1.html" },
          { title: "Template 2", link: "/email_template_2.html" },
          { title: "Template 3", link: "/email_template_3.html" },
          { title: "Template 4", link: "/email_template_4.html" },
          { title: "Template 5", link: "/email_template_5.html" },
          { title: "Template 6", link: "/email_template_6.html" },
          { title: "Template 7", link: "/email_template_7.html" },
          { title: "Template 8", link: "/email_template_8.html" },
        ],
      },
    ],
  },
  {
    title: "blog",
    link: "#",
    submenu: [
      { title: "With left sidebar", link: "/blog/blog-left-sidebar" },
      { title: "With right sidebar", link: "/blog/blog-right-sidebar" },
      { title: "Without sidebar", link: "/blog/no-sidebar" },
      { title: "Blog detail page", link: "/blog/1" },
    ],
  },
];
