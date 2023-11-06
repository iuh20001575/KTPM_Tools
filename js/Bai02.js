const decimalInput = document.getElementById('so-decimal1');
const binaryInput = document.getElementById('so-binary2');
const resultBinaryInput = document.getElementById('so-binary1');
const resultDecimalInput = document.getElementById('so-decimal2');
const buttonDecToBin = document.getElementById('btnDecToBin');
const buttonBinToDec = document.getElementById('btnBinToDec');
const invalidFeedbacks = document.querySelectorAll('.invalid-feedback');

function reset1() {
    decimalInput.classList.remove('is-invalid');
    resultBinaryInput.value = '';
}

function reset2() {
    binaryInput.classList.remove('is-invalid');
    resultDecimalInput.value = '';
}

decimalInput.addEventListener('focus', reset1);
binaryInput.addEventListener('focus', reset2);

buttonDecToBin.addEventListener('click', () => {
    const value = decimalInput.value.trim();

    if (!value) {
        decimalInput.classList.add('is-invalid');
        invalidFeedbacks[0].innerText = 'Chuỗi không được để trống';
        return;
    }
    const regexSoNguyenDuong = /^[1-9]\d*$/;
    if (!regexSoNguyenDuong.test(value)) {
        decimalInput.classList.add('is-invalid');
        invalidFeedbacks[0].innerText =
            'Chuỗi được nhập phải là số nguyên dương';
        return;
    }
    const regexSoNguyen = /^-?\d+$/;
    if (!regexSoNguyen.test(value)) {
        decimalInput.classList.add('is-invalid');
        invalidFeedbacks[0].innerText = 'Chuỗi được nhập phải là số nguyên';
        return;
    }
    if (!regexSoNguyen.test(value)) {
        decimalInput.classList.add('is-invalid');
        invalidFeedbacks[0].innerText = 'Chuỗi được nhập phải là số nguyên';
        return;
    }
    const regexSo = /^\d+$/;
    if (!regexSo.test(value)) {
        decimalInput.classList.add('is-invalid');
        invalidFeedback.innerText = 'Chuỗi được nhập phải là số';
        return;
    }
    const regexDoDaiChuoi = /^.{1,64}$/;
    if (!regexDoDaiChuoi.test(value)) {
        decimalInput.classList.add('is-invalid');
        invalidFeedback.innerText = 'Chuỗi không được quá 64 ký tự';
        return;
    }

    const bin = DecToBin(value);

    resultBinaryInput.value = bin;
});

buttonBinToDec.addEventListener('click', () => {
    const value = binaryInput.value.trim();

    if (!value) {
        binaryInput.classList.add('is-invalid');
        invalidFeedbacks[1].innerText = 'Chuỗi không được để trống';
        return;
    }
    const regexBin = /^[01]+$/;
    if (!regexBin.test(value)) {
        binaryInput.classList.add('is-invalid');
        invalidFeedbacks[1].innerText =
            'Chuỗi được nhập phải là chuỗi nhị phân';
        return;
    }
    const regexDoDaiChuoi = /^.{1,64}$/;
    if (!regexDoDaiChuoi.test(value)) {
        binaryInput.classList.add('is-invalid');
        invalidFeedbacks[1].innerText = 'Chuỗi không được quá 64 ký tự';
        return;
    }

    const dec = BinToDec(value);

    resultDecimalInput.value = dec;
});

function DecToBin(dec) {
    if (dec === 0) {
        return '0'; // Trường hợp đặc biệt khi số thập phân là 0.
    }

    var bin = '';
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
