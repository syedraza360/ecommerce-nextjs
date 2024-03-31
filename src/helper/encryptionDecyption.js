import CryptoJS from "crypto-js";

const encrypt = (data) => {
  return CryptoJS.AES.encrypt(data, process.env.encrypt_orderId).toString();
};

const decrypt = (data) => {
  let bytes = CryptoJS.AES.decrypt(data, process.env.encrypt_orderId);
  let originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};

export { encrypt, decrypt };
