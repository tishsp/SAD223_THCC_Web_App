const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item => {
    const li = item.parentElement;

    item.addEventListener('click', function () {
        allSideMenu.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});



// ==================== TOGGLE SIDEBAR ==================== 
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
    sidebar.classList.toggle('hide');
})


// ==================== END OF TOGGLE SIDEBAR ====================


// ==================== SEARCH ====================
const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault();
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchButtonIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchButtonIcon.classList.replace('bx-x', 'bx-search');
        }
    }
})


if (window.innerWidth < 768) {
    sidebar.classList.add('hide');
} else if (window.innerWidth > 576) {
    searchButtonIcon.classList.replace('bx-x', 'bx-search');
    searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
    if (this.innerWidth > 576) {
        searchButtonIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
})
// ==================== END OF SEARCH ====================



// ==================== DARK MDOE ====================
// const switchMode = document.getElementById('switch-mode');

// switchMode.addEventListener('change', function () {
//     if (this.checked) {
//         document.body.classList.add('dark');
//     } else {
//         document.body.classList.remove('dark');
//     }
// })
// ==================== END OF DARK MODE ====================



/* ==================== LOGIN.html ==================== */
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});
// ====================END OF LOGIN.html ====================



// ==================== QUADRANT BLOCK UNIT ====================



// ==================== CONCATENATE NAME ====================
// ??????????????????????????????????????????????????????????
function concatenateNames() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;

    var fullName = firstName + ' ' + lastName;
    alert('Full Name: ' + fullName);
}
// ??????????????????????????????????????????????????????????

// ==================== ROLE LOGIN
function getUserRoleFromServer() {
    const username = 'your_username'; // Replace with actual username retrieval (e.g., from cookies)

    return fetch('/get_user_role', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username })
    })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                console.error('Error fetching user role:', data.error);
                // Handle error (e.g., display a generic error message)
                return 'unknown';
            }
            return data.role;
        });
}

