const decimalInput = document.getElementById('decimal-input');
const binaryInput = document.getElementById('binary-input');
const resultBinaryInput = document.getElementById('binary-result');
const resultDecimalInput = document.getElementById('decimal-result');
const buttonDecToBin = document.getElementById('btnDecToBin');
const buttonBinToDec = document.getElementById('btnBinToDec');
const invalidFeedback = document.querySelector('.invalid-feedback');

function reset() {
    decimalInput.classList.remove('is-invalid');
    binaryInput.classList.remove('is-invalid');
    resultBinaryInput.value='';
    resultDecimalInput.value = '';
}

decimalInput.addEventListener('focus', reset);
binaryInput.addEventListener('focus', reset);

buttonDecToBin.addEventListener('click', () => {
    const value = decimalInput.value.trim();

    if (!value) {
        decimalInput.classList.add('is-invalid');
        invalidFeedback.innerText = 'Chuỗi không được để trống';
        return;
    }
    const regexSoNguyenDuong = /^[1-9]\d*$/;
    if (!regexSoNguyenDuong.test(value)) {
        decimalInput.classList.add('is-invalid');
        invalidFeedback.innerText =
            'Chuỗi được nhập phải là số nguyên dương';
        return;
    }
    const regexSoNguyen = /^-?\d+$/;
    if (!regexSoNguyen.test(value)) {
        decimalInput.classList.add('is-invalid');
        invalidFeedback.innerText =
            'Chuỗi được nhập phải là số nguyên';
        return;
    }
    if (!regexSoNguyen.test(value)) {
        decimalInput.classList.add('is-invalid');
        invalidFeedback.innerText =
            'Chuỗi được nhập phải là số nguyên';
        return;
    }
    const regexSo =/^\d+$/;
    if (!regexSo.test(value)) {
        decimalInput.classList.add('is-invalid');
        invalidFeedback.innerText =
            'Chuỗi được nhập phải là số';
        return;
    }
    const regexDoDaiChuoi =/^.{1,64}$/;
    if (!regexDoDaiChuoi.test(value)) {
        decimalInput.classList.add('is-invalid');
        invalidFeedback.innerText =
            'Chuỗi không được quá 64 ký tự';
        return;
    }

    const bin = DecToBin(value);

    resultBinaryInput.value = bin;
});

buttonBinToDec.addEventListener('click', () => {
    const value = binaryInput.value.trim();

    if (!value) {
        binaryInput.classList.add('is-invalid');
        invalidFeedback.innerText = 'Chuỗi không được để trống';
        return;
    }
    const regexBin = /^[01]+$/;
    if (!regexBin.test(value)) {
        binaryInput.classList.add('is-invalid');
        invalidFeedback.innerText =
            'Chuỗi được nhập phải là chuỗi nhị phân';
        return;
    }
    const regexDoDaiChuoi =/^.{1,64}$/;
    if (!regexDoDaiChuoi.test(value)) {
        binaryInput.classList.add('is-invalid');
        invalidFeedback.innerText =
            'Chuỗi không được quá 64 ký tự';
        return;
    }

    const dec = BinToDec(value);

    resultDecimalInput.value = dec;
});

function DecToBin(dec) {
    if (dec === 0) {
      return "0"; // Trường hợp đặc biệt khi số thập phân là 0.
    }
  
    var bin = "";
    while (dec > 0) {
      var soDu = dec % 2;
      bin = soDu + bin;
      dec = Math.floor(dec / 2);
    }
  
    return bin;
}

function BinToDec(bin) {
    var dec = 0;
    var doDai = bin.length;
  
    for (var i = 0; i < doDai; i++) {
      var bit = parseInt(bin.charAt(i));
      dec += bit * Math.pow(2, doDai - 1 - i);
    }
  
    return dec;
}