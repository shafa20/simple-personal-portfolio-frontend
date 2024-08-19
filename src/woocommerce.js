// src/woocommerce.js
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const WooCommerce = new WooCommerceRestApi({
  url: "http://localhost/wordpress/", // Your WordPress site URL
  consumerKey: "ck_c123f4fac7b5faab93518b37391745e686533490", // Your Consumer Key
  consumerSecret: "cs_16c039e23762e26d8e11c5021c0606bee2dd3c3d", // Your Consumer Secret
  version: "wc/v3" // WooCommerce API version
});

export default WooCommerce;
