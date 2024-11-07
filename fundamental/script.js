let produk = [
  {
    nama: "iPhone 13",
    harga: 10000000,
    tersedia: true,
    deskripsi: "Apple iPhone 13 dengan penyimpanan 128GB dan sistem kamera ganda.",
    gambar: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1645572315917"
  },
  {
    nama: "MacBook Air M1",
    harga: 20000000,
    tersedia: false,
    deskripsi: "Apple MacBook Air dengan chip M1, RAM 8GB, dan SSD 256GB.",
    gambar: "https://www.digimap.co.id/cdn/shop/files/0788-APPMGN63ID-A-1.jpg?v=1721641557&width=823"
  },
  {
    nama: "Sony WH-1000XM4",
    harga: 5000000,
    tersedia: true,
    deskripsi: "Headphone over-ear noise-cancelling Sony dengan baterai 30 jam.",
    gambar: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SX679_.jpg"
  }
];

function tampilkanProduk() {
    let kontainerProduk = document.getElementById("produk");

    produk.forEach((item, indeks) => {
        console.log(`Produk ${indeks + 1}:`, item);

        let divProduk = document.createElement("div");
        divProduk.classList.add("produk");

        let gambarProduk = document.createElement("img");
        gambarProduk.src = item.gambar;
        gambarProduk.alt = item.nama;
        divProduk.appendChild(gambarProduk);

        let namaProduk = document.createElement("h2");
        namaProduk.innerText = item.nama;
        divProduk.appendChild(namaProduk);

        let hargaProduk = document.createElement("p");
        hargaProduk.innerText = "Rp" + item.harga;
        divProduk.appendChild(hargaProduk);

        let deskripsiProduk = document.createElement("p");
        deskripsiProduk.innerText = item.deskripsi;
        divProduk.appendChild(deskripsiProduk);

        let ketersediaan = document.createElement("p");
        if (item.tersedia) {
            ketersediaan.innerText = "Tersedia";
            ketersediaan.classList.add("tersedia");
        } else {
            ketersediaan.innerText = "Tidak Tersedia";
            ketersediaan.classList.add("tidak-tersedia");
        }
        divProduk.appendChild(ketersediaan);

        if (item.tersedia) {
            let tombolBeli = document.createElement("button");
            tombolBeli.classList.add("btn");
            tombolBeli.innerText = "Beli Sekarang";
            tombolBeli.onclick = () => {
                console.log(`User mengklik Beli Sekarang untuk ${item.nama}`);
                alert(`Terima kasih telah membeli ${item.nama}!`);
            };
            divProduk.appendChild(tombolBeli);
        }

        kontainerProduk.appendChild(divProduk);
    });
}

tampilkanProduk();
