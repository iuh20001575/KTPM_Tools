const splitBtn = document.querySelector('button');
const fullNameInput = document.querySelector('.full-name-txt');
const invalidFeedback = document.querySelector('.invalid-feedback');
const firstNameInput = document.getElementById('first-name');
const middleNameInput = document.getElementById('middle-name');
const lastNameInput = document.getElementById('last-name');

const UTF8_CHARS_UPPER =
    'ẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴ';
const UTF8_CHARS_LOWER = UTF8_CHARS_UPPER.toLowerCase();

function reset() {
    fullNameInput.classList.remove('is-invalid');
    firstNameInput.value = '';
    middleNameInput.value = '';
    lastNameInput.value = '';
}

fullNameInput.addEventListener('focus', reset);

splitBtn.addEventListener('click', () => {
    reset();

    const fullName = fullNameInput.value.trim();

    if (!fullName) {
        fullNameInput.classList.add('is-invalid');
        invalidFeedback.innerText = 'Họ tên không được để trống';
        return;
    }

    if (
        new RegExp(`[^A-Za-z${UTF8_CHARS_UPPER}${UTF8_CHARS_LOWER} ]`).test(
            fullName,
        )
    ) {
        fullNameInput.classList.add('is-invalid');
        invalidFeedback.innerText =
            'Họ tên chỉ được chứa các ký tự chữ cái và khoảng trắng';
        return;
    }

    const names = fullName.split(/\s+/);

    if (names.length < 2) {
        fullNameInput.classList.add('is-invalid');
        invalidFeedback.innerText = 'Họ tên phải có ít nhất 2 từ';
        return;
    }

    if (
        names.some(
            (name) =>
                !new RegExp(
                    `^[A-Z${UTF8_CHARS_UPPER}][a-z${UTF8_CHARS_LOWER}]*$`,
                ).test(name),
        )
    ) {
        fullNameInput.classList.add('is-invalid');
        invalidFeedback.innerText =
            'Họ tên phải bắt đầu bằng ký tự hoa và theo sao là ký tự thường';
        return;
    }

    const firstName = names[0];
    const lastName = names.at(-1);
    const middleName = names.slice(1, -1).join(' ');

    firstNameInput.value = firstName;
    middleNameInput.value = middleName;
    lastNameInput.value = lastName;
});
