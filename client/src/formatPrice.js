function formatPrice(price) {
  let harga = price;

  harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // if(harga > 999999) {
  //   harga = harga / 1000000 + "m";
  // } else if(harga > 999) {
  //   harga = harga / 1000 + "k";
  // }

  return "Rp" + harga;
}

export default formatPrice;