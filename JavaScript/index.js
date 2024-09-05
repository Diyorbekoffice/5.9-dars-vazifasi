document.getElementById('submitBtn').addEventListener('click', function() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const commentInput = document.getElementById('comment');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const comment = commentInput.value.trim();

    const emailPattern = /@/;
    const errorMessage = document.getElementById('error-message');

    // Xatolikni tozalash
    errorMessage.textContent = '';

    if (!name) {
        alert('F.I.SH maydonini to\'ldiring!');
        nameInput.focus();
    } else if (!email) {
        alert('Email maydonini to\'ldiring!');
        emailInput.focus();
    } else if (!comment) {
        alert('Izoh maydonini to\'ldiring!');
        commentInput.focus();
    } else if (!emailPattern.test(email)) {
        alert('Iltimos, to\'g\'ri email kiriting!');
        emailInput.focus();
    } else {
        // Ma'lumotlarni ko'rsatish uchun yangi blok yaratish
        const resultDiv = document.getElementById('result');
        const newBlock = document.createElement('div');
        newBlock.classList.add('result-block');

        // Tahrirlash va uchirish tugmalarini yaratish
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Tahrirlash';
        editBtn.classList.add('edit-btn');

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Uchirish';
        deleteBtn.classList.add('delete-btn');

        // Tugmalarga hodisalar qo'shish
        editBtn.addEventListener('click', function() {
            nameInput.value = name;
            emailInput.value = email;
            commentInput.value = comment;
            resultDiv.removeChild(newBlock);
        });

        deleteBtn.addEventListener('click', function() {
            resultDiv.removeChild(newBlock);
        });

        // Blok ichida kiritilgan ma'lumotlarni yozish
        newBlock.innerHTML = `
            <p><strong>F.I.SH:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Izoh:</strong> ${comment}</p>`;

        // Tugmalarni qo'shish
        newBlock.appendChild(editBtn);
        newBlock.appendChild(deleteBtn);

        // Ma'lumotlarni natijalar blokiga qo'shish
        resultDiv.appendChild(newBlock);

        // Input maydonlarini tozalash
        nameInput.value = '';
        emailInput.value = '';
        commentInput.value = '';
    }
});

