/* =========================
   24NT01014 - Lê Huy Hoàng - Bài 10
========================= */
/* 1. Tạo danh sách 10 con vật */
const danhSachConVat = [
    { ten: "Mèo", anh: "images/meo1.jpg", thuVien: taoThuVien("meo") },
    { ten: "Chó", anh: "images/cho1.jpg", thuVien: taoThuVien("cho") },
    { ten: "Cá", anh: "images/ca1.jpg", thuVien: taoThuVien("ca") },
    { ten: "Chim", anh: "images/chim1.jpg", thuVien: taoThuVien("chim") },
    { ten: "Thỏ", anh: "images/tho1.jpg", thuVien: taoThuVien("tho") },

    { ten: "Ngựa", anh: "images/ngua1.jpg", thuVien: taoThuVien("ngua") },
    { ten: "Bò", anh: "images/bo1.jpg", thuVien: taoThuVien("bo") },
    { ten: "Heo", anh: "images/heo1.jpg", thuVien: taoThuVien("heo") },
    { ten: "Dê", anh: "images/de1.jpg", thuVien: taoThuVien("de") },
    { ten: "Cừu", anh: "images/cuu1.jpg", thuVien: taoThuVien("cuu") },
];
/* Hàm tạo thư viện 8 ảnh cho mỗi con vật */
function taoThuVien(tenAnh) {
    const arr = [];
    for (let i = 1; i <= 8; i++) {
        arr.push(`images/${tenAnh}${i}.jpg`);
    }
    return arr;
}
/* 2. Lấy thẻ HTML */
const danhSachDiv = document.getElementById("danhsach");
const thuVienDiv = document.getElementById("thuvienanh");
/* 3. Hiển thị danh sách con vật */
danhSachConVat.forEach(convat => {
    const theConVat = document.createElement("div");
    theConVat.className = "con-vat";
    theConVat.innerHTML = `
        <img src="${convat.anh}" alt="${convat.ten}">
        <h3>${convat.ten}</h3>
    `;
    /* 4. Click → hiện thư viện ảnh */
    theConVat.addEventListener("click", () => {
        thuVienDiv.innerHTML = "";
        convat.thuVien.forEach(linkAnh => {
            const img = document.createElement("img");
            img.src = linkAnh;
            thuVienDiv.appendChild(img);
        });
    });
    danhSachDiv.appendChild(theConVat);
});
