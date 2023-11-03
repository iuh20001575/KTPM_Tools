const arrInput = document.getElementById('full-name');
const resultInput = document.getElementById('result');
const button = document.querySelector('button');
const invalidFeedback = document.querySelector('.invalid-feedback');

function reset() {
    arrInput.classList.remove('is-invalid');
    resultInput.value = '';
}

arrInput.addEventListener('focus', reset);

button.addEventListener('click', () => {
    const value = arrInput.value.trim();

    if (!value) {
        arrInput.classList.add('is-invalid');
        invalidFeedback.innerText = 'Mảng không được để trống';
        return;
    }

    const elements = value.split(/\s+/);
    console.log('🚀 ~ button.addEventListener ~ elements:', elements);

    if (elements.some((element) => !+element)) {
        arrInput.classList.add('is-invalid');
        invalidFeedback.innerText = 'Các phần tử của mảng phải là số';
        return;
    }

    if (elements.some((element) => !Number.isInteger(+element))) {
        arrInput.classList.add('is-invalid');
        invalidFeedback.innerText = 'Các phần tử của mảng phải là số nguyên';
        return;
    }

    const arr = elements.map((element) => Number.parseInt(element));

    quickSort(arr, 0, arr.length - 1);

    resultInput.value = arr.join(' ');
});
