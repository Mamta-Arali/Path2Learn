// ===============================
// PATH2LEARN COMPLETE SCRIPT.JS
// ===============================

// ===============================
// ADMIN SECURITY
// ===============================

let isAdminLoggedIn = false;

const ADMIN_EMAIL =
'admin@path2learn.com';

const ADMIN_PASSWORD =
'admin123';

// DYNAMIC SECTION

const dynamicContent =
document.getElementById('dynamicContent');

// DATA STORAGE

let donations = [];

let users = [

    {
        name: 'Admin',
        role: 'Administrator'
    },

    {
        name: 'Anushka',
        role: 'Donor'
    },

    {
        name: 'Rahul',
        role: 'Student'
    }

];

// LIVE COUNTER

const counter =
document.getElementById('liveCounter');

let count = 0;

setInterval(() => {

    count += 5;

    counter.innerText = count;

}, 1000);

// ===============================
// CHART.JS GRAPH
// ===============================

const ctx =
document.getElementById('myChart');

if(ctx) {

    new Chart(ctx, {

        type: 'line',

        data: {

            labels: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun'
            ],

            datasets: [{

                label: 'Donations',

                data: [
                    120,
                    190,
                    300,
                    500,
                    200,
                    700
                ],

                borderColor: '#00d4ff',

                tension: 0.4,

                fill: true,

                backgroundColor:
                'rgba(0,212,255,0.1)'

            }]

        },

        options: {

            responsive: true

        }

    });

}

// ===============================
// NOTIFICATION SYSTEM
// ===============================

function showNotification(message) {

    const notification =
    document.createElement('div');

    notification.classList.add(
    'notification');

    notification.innerText = message;

    document.body.appendChild(
    notification);

    setTimeout(() => {

        notification.remove();

    }, 3000);

}

// ===============================
// LOGIN BUTTON
// ===============================

// ===============================
// AUTH MODAL SYSTEM
// ===============================

const authModal =
document.getElementById('authModal');

const authContent =
document.getElementById('authContent');

const closeAuth =
document.getElementById('closeAuth');

// OPEN LOGIN MODAL

document.querySelector('.glow-btn')
.addEventListener('click', openLoginForm);

// CLOSE MODAL

closeAuth.addEventListener('click', () => {

    authModal.style.display = 'none';

});

// CLICK OUTSIDE CLOSE

window.addEventListener('click', (e) => {

    if(e.target === authModal) {

        authModal.style.display = 'none';

    }

});

// ===============================
// LOGIN FORM
// ===============================

function openLoginForm() {

    authModal.style.display = 'flex';

    authContent.innerHTML = `

        <h1>Login</h1>

        <input
        type="email"
        id="loginEmail"
        placeholder="Enter Email">

        <input
        type="password"
        id="loginPassword"
        placeholder="Enter Password">

        <button
        id="loginBtn"
        class="primary-btn">

            Login

        </button>

        <div class="auth-links">

            <span id="createAccountLink">

                Create Account

            </span>

            <span id="forgotPasswordLink">

                Forgot Password?

            </span>

        </div>

    `;

    setTimeout(() => {

        document.getElementById(
        'loginBtn'
        ).addEventListener(
        'click',
        loginUser
        );

        document.getElementById(
        'createAccountLink'
        ).addEventListener(
        'click',
        openRegisterForm
        );

        document.getElementById(
        'forgotPasswordLink'
        ).addEventListener(
        'click',
        openForgotPasswordForm
        );

    }, 100);

}

// ===============================
// LOGIN USER
// ===============================

function loginUser() {

    const email =
    document.getElementById(
    'loginEmail').value;

    const password =
    document.getElementById(
    'loginPassword').value;

    if(email === '' || password === '') {

        showNotification(
        'Please Fill Credentials'
        );

        return;
    }

    // ADMIN LOGIN

    if(
        email === ADMIN_EMAIL &&
        password === ADMIN_PASSWORD
    ) {

        isAdminLoggedIn = true;

        document.getElementById(
        'adminNav'
        ).style.display = 'block';

        showNotification(
        'Admin Login Successful'
        );

        authModal.style.display = 'none';

        dynamicContent.innerHTML = `

            <h1>
                Welcome Admin
            </h1>

            <p>
                Secure admin access granted.
            </p>

        `;

        return;
    }

    // NORMAL USER LOGIN

    showNotification(
    'User Login Successful'
    );

    authModal.style.display = 'none';

    dynamicContent.innerHTML = `

        <h1>
            Welcome User
        </h1>

        <p>
            Login Successful.
        </p>

    `;
}

// ===============================
// REGISTER FORM
// ===============================

function openRegisterForm() {

    authContent.innerHTML = `

        <h1>Create Account</h1>

        <input
        type="text"
        id="registerName"
        placeholder="Full Name">

        <input
        type="email"
        id="registerEmail"
        placeholder="Email">

        <input
        type="password"
        id="registerPassword"
        placeholder="Password">

        <button
        id="registerBtn"
        class="primary-btn">

            Create Account

        </button>

        <div class="auth-links">

            <span id="backToLogin">

                Back To Login

            </span>

        </div>

    `;

    setTimeout(() => {

        document.getElementById(
        'registerBtn'
        ).addEventListener(
        'click',
        registerUser
        );

        document.getElementById(
        'backToLogin'
        ).addEventListener(
        'click',
        openLoginForm
        );

    }, 100);

}

// ===============================
// REGISTER USER
// ===============================

function registerUser() {

    const name =
    document.getElementById(
    'registerName').value;

    const email =
    document.getElementById(
    'registerEmail').value;

    const password =
    document.getElementById(
    'registerPassword').value;

    if(
        name === '' ||
        email === '' ||
        password === ''
    ) {

        showNotification(
        'Please Fill All Fields'
        );

        return;
    }

    users.push({

        name: name,

        role: 'Donor'

    });

    showNotification(
    'Account Created Successfully'
    );

    openLoginForm();

}

// ===============================
// FORGOT PASSWORD FORM
// ===============================

function openForgotPasswordForm() {

    authContent.innerHTML = `

        <h1>Forgot Password</h1>

        <input
        type="email"
        id="forgotEmail"
        placeholder="Enter Email">

        <button
        id="resetBtn"
        class="primary-btn">

            Send Reset Link

        </button>

        <div class="auth-links">

            <span id="backLogin">

                Back To Login

            </span>

        </div>

    `;

    setTimeout(() => {

        document.getElementById(
        'resetBtn'
        ).addEventListener(
        'click',
        resetPassword
        );

        document.getElementById(
        'backLogin'
        ).addEventListener(
        'click',
        openLoginForm
        );

    }, 100);

}

// ===============================
// RESET PASSWORD
// ===============================

function resetPassword() {

    const email =
    document.getElementById(
    'forgotEmail').value;

    if(email === '') {

        showNotification(
        'Please Enter Email'
        );

        return;
    }

    showNotification(
    'Reset Link Sent Successfully'
    );

    openLoginForm();

}

// ===============================
// EXPLORE BUTTON
// ===============================

document.querySelector('.secondary-btn')
.addEventListener('click', () => {

    dynamicContent.innerHTML = `

        <h1>About Path2Learn</h1>

        <p>

            Path2Learn is a full-stack
            educational donation platform
            connecting donors, students
            and NGOs.

        </p>

        <br>

        <h2>Features</h2>

        <ul>

            <li>User Management</li>
            <li>Donation Management</li>
            <li>Admin Dashboard</li>
            <li>Analytics</li>
            <li>Inventory Tracking</li>
            <li>Notifications</li>

        </ul>

    `;

    window.location.href =
    '#dynamicSection';

});

// ===============================
// DONATE NOW BUTTON
// ===============================

document.querySelector('.hero .primary-btn')
.addEventListener('click', () => {

    dynamicContent.innerHTML = `

        <h1>Donation Form</h1>

        <input type="text"
        id="donorName"
        placeholder="Donor Name">

        <input type="text"
        id="itemName"
        placeholder="Item Name">

        <input type="number"
        id="quantity"
        placeholder="Quantity">

        <select id="category">

            <option>Books</option>
            <option>Laptops</option>
            <option>Stationery</option>

        </select>

        <button id="submitDonationBtn"
        class="primary-btn">

            Submit Donation

        </button>

    `;

    window.location.href =
    '#dynamicSection';

    setTimeout(() => {

        document.getElementById(
        'submitDonationBtn'
        ).addEventListener(
        'click',
        submitDonation
        );

    }, 100);

});

// ===============================
// SUBMIT DONATION
// ===============================

function submitDonation() {
    // Supports BOTH donation form variants in this project:
    // 1) Static donation section in index.html:
    //      name, email, details, category, quantity
    // 2) Dynamic donation form (hero/navbar):
    //      donorName, itemName, category, quantity

    const getValue = (id) => {
        const el = document.getElementById(id);
        return el ? el.value : undefined;
    };

    const donorName = getValue('donorName') ?? getValue('name');
    const itemName = getValue('itemName');
    const category = getValue('category');
    const quantity = getValue('quantity');

    const data = {
        donorName,
        category,
        itemName,
        quantity
    };


    console.log("Sending:", data);

    fetch('http://localhost:5000/api/donations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(async (res) => {
        // If backend returns HTML (404/500 page), res.json() will crash.
        const contentType = res.headers.get('content-type') || '';
        if (!contentType.includes('application/json')) {
            const text = await res.text();
            throw new Error(`Backend returned non-JSON response (status ${res.status}). First chars: ${text.slice(0, 80)}`);
        }
        return res.json();
    })

    .then(data => {
        alert("Donation Submitted ✅");
    })
    .catch(err => {
        console.error(err);
        alert("Error connecting backend ❌");
    });
}

// ===============================
// MODULE BUTTONS
// ===============================

document.querySelectorAll('.card button')
.forEach(button => {

    button.addEventListener(
    'click',
    () => {

        const module =
        button.parentElement
        .querySelector('h2')
        .innerText;

        // USER MANAGEMENT

        if(module ===
        'User Management') {

            dynamicContent.innerHTML = `

                <h1>
                    User Management Dashboard
                </h1>

                <table class="table">

                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                    </tr>

                    ${users.map(user => `

                        <tr>

                            <td>
                                ${user.name}
                            </td>

                            <td>
                                ${user.role}
                            </td>

                        </tr>

                    `).join('')}

                </table>

            `;
        }

        // DONATION MANAGEMENT

        else if(module ===
        'Donation Management') {

            dynamicContent.innerHTML = `

                <h1>
                    Donation Dashboard
                </h1>

                <table class="table">

                    <tr>

                        <th>Donor</th>
                        <th>Item</th>
                        <th>Status</th>

                    </tr>

                    ${donations.map(donation => `

                        <tr>

                            <td>
                                ${donation.donorName}
                            </td>

                            <td>
                                ${donation.itemName}
                            </td>

                            <td>
                                ${donation.status}
                            </td>

                        </tr>

                    `).join('')}

                </table>

            `;
        }

        // ANALYTICS

        else if(module ===
        'Dashboard Analytics') {

            dynamicContent.innerHTML = `

                <h1>
                    Analytics Dashboard
                </h1>

                <p>
                    Total Donations:
                    ${donations.length}
                </p>

                <p>
                    Total Users:
                    ${users.length}
                </p>

                <p>
                    Transparency:
                    95%
                </p>

            `;
        }

        // ADMIN PANEL

        else if(module === 'Admin Panel') {

    if(!isAdminLoggedIn) {

        dynamicContent.innerHTML = `

            <div class="glass"
            style="padding:40px;">

                <h1>
                    Access Denied
                </h1>

                <p>
                    Only admins can access
                    the Admin Control Center.
                </p>

            </div>

        `;

        return;
    }

    dynamicContent.innerHTML = `

        <h1>
            Admin Control Center
        </h1>

        <div class="admin-grid">

            <div class="card glass">

                <h2>
                    Pending Approvals
                </h2>

                <p>
                    Manage donation approvals.
                </p>

                <button id="approveBtn"
                class="primary-btn">

                    Approve

                </button>

            </div>

            <div class="card glass">

                <h2>
                    User Management
                </h2>

                <p>
                    Block, delete and manage users.
                </p>

                <button id="manageBtn"
                class="primary-btn">

                    Manage

                </button>

            </div>

            <div class="card glass">

                <h2>
                    Reports
                </h2>

                <p>
                    Generate reports and analytics.
                </p>

                <button id="generateBtn"
                class="primary-btn">

                    Generate

                </button>

            </div>

            <div class="card glass">

                <h2>
                    Notifications
                </h2>

                <p>
                    Send alerts and announcements.
                </p>

                <button id="sendBtn"
                class="primary-btn">

                    Send

                </button>

            </div>

        </div>

    `;

    // BUTTON EVENTS

    setTimeout(() => {

        document.getElementById(
        'approveBtn'
        ).addEventListener(
        'click',
        openApproveForm
        );

        document.getElementById(
        'manageBtn'
        ).addEventListener(
        'click',
        'click',
        openManageForm
        );

        document.getElementById(
        'generateBtn'
        ).addEventListener(
        'click',
        openGenerateForm
        );

        document.getElementById(
        'sendBtn'
        ).addEventListener(
        'click',
        openSendForm
        );

    }, 100);
}

        // STOCK MANAGEMENT

        else if(module ===
        'Categories & Stock') {

            dynamicContent.innerHTML = `

                <h1>
                    Inventory Dashboard
                </h1>

                <table class="table">

                    <tr>
                        <th>Category</th>
                        <th>Stock</th>
                    </tr>

                    <tr>
                        <td>Books</td>
                        <td>120</td>
                    </tr>

                    <tr>
                        <td>Laptops</td>
                        <td>25</td>
                    </tr>

                    <tr>
                        <td>Stationery</td>
                        <td>340</td>
                    </tr>

                </table>

            `;
        }

        window.location.href =
        '#dynamicSection';

    });

});

// ===============================
// APPROVAL PANEL
// ===============================

function openApprovalPanel() {

    dynamicContent.innerHTML = `

        <h1>Donation Approval Panel</h1>

        <table class="table">

            <tr>

                <th>Donor</th>
                <th>Item</th>
                <th>Status</th>
                <th>Approve</th>

            </tr>

            ${donations.map((donation, index) => `

                <tr>

                    <td>
                        ${donation.donorName}
                    </td>

                    <td>
                        ${donation.itemName}
                    </td>

                    <td>
                        ${donation.status}
                    </td>

                    <td>

                        <button onclick="
                        approveDonation(${index})
                        " class="primary-btn">

                            Approve

                        </button>

                    </td>

                </tr>

            `).join('')}

        </table>

    `;
}

function approveDonation(index) {

    donations[index].status =
    'Approved';

    showNotification(
    'Donation Approved Successfully'
    );

    openApprovalPanel();
}

// ===============================
// USER MANAGEMENT
// ===============================

function openUserManagement() {

    dynamicContent.innerHTML = `

        <h1>User Management</h1>

        <table class="table">

            <tr>

                <th>Name</th>
                <th>Role</th>
                <th>Action</th>

            </tr>

            ${users.map((user, index) => `

                <tr>

                    <td>
                        ${user.name}
                    </td>

                    <td>
                        ${user.role}
                    </td>

                    <td>

                        <button onclick="
                        removeUser(${index})
                        " class="primary-btn">

                            Remove

                        </button>

                    </td>

                </tr>

            `).join('')}

        </table>

    `;
}

function removeUser(index) {

    users.splice(index, 1);

    showNotification(
    'User Removed'
    );

    openUserManagement();
}

// ===============================
// REPORT GENERATOR
// ===============================

function openReportGenerator() {

    dynamicContent.innerHTML = `

        <h1>Generate System Report</h1>

        <div class="glass"
        style="padding:30px;">

            <p>
                Total Donations:
                ${donations.length}
            </p>

            <p>
                Total Users:
                ${users.length}
            </p>

            <p>
                Approved Donations:
                ${
                    donations.filter(
                    d => d.status ===
                    'Approved'
                    ).length
                }
            </p>

            <button
            id="downloadReportBtn"
            class="primary-btn">

                Download Report

            </button>

        </div>

    `;

    setTimeout(() => {

        document.getElementById(
        'downloadReportBtn'
        ).addEventListener(
        'click',
        downloadReport
        );

    }, 100);

}

function downloadReport() {

    showNotification(
    'Report Generated Successfully'
    );

}

// ===============================
// NOTIFICATION CENTER
// ===============================

function openNotificationCenter() {

    dynamicContent.innerHTML = `

        <h1>Notification Center</h1>

        <textarea
        id="notificationText"
        placeholder="
        Write notification here...
        ">
        </textarea>

        <button
        id="sendNotificationBtn"
        class="primary-btn">

            Send Notification

        </button>

    `;

    setTimeout(() => {

        document.getElementById(
        'sendNotificationBtn'
        ).addEventListener(
        'click',
        sendNotification
        );

    }, 100);

}

function sendNotification() {

    const text =
    document.getElementById(
    'notificationText'
    ).value;

    if(text === '') {

        showNotification(
        'Please Write Notification'
        );

        return;
    }

    showNotification(
    'Notification Sent Successfully'
    );

}
function openApproveForm() {

    dynamicContent.innerHTML = `

        <h1>
            Approval Management
        </h1>

        <table class="table">

            <tr>

                <th>Donor</th>
                <th>Item</th>
                <th>Status</th>
                <th>Approve</th>

            </tr>

            ${donations.map((donation, index) => `

                <tr>

                    <td>
                        ${donation.donorName}
                    </td>

                    <td>
                        ${donation.itemName}
                    </td>

                    <td>
                        ${donation.status}
                    </td>

                    <td>

                        <button onclick="
                        approveDonation(${index})
                        " class="primary-btn">

                            Approve

                        </button>

                    </td>

                </tr>

            `).join('')}

        </table>

    `;
}
function openManageForm() {

    dynamicContent.innerHTML = `

        <h1>
            User Management
        </h1>

        <table class="table">

            <tr>

                <th>Name</th>
                <th>Role</th>
                <th>Action</th>

            </tr>

            ${users.map((user, index) => `

                <tr>

                    <td>${user.name}</td>

                    <td>${user.role}</td>

                    <td>

                        <button onclick="
                        removeUser(${index})
                        " class="primary-btn">

                            Remove

                        </button>

                    </td>

                </tr>

            `).join('')}

        </table>

    `;
}
function openGenerateForm() {

    dynamicContent.innerHTML = `

        <h1>
            Generate Reports
        </h1>

        <div class="glass"
        style="padding:30px;">

            <p>
                Total Donations:
                ${donations.length}
            </p>

            <p>
                Total Users:
                ${users.length}
            </p>

            <p>
                Approved Donations:
                ${
                    donations.filter(
                    d => d.status ===
                    'Approved'
                    ).length
                }
            </p>

            <button id="downloadBtn"
            class="primary-btn">

                Download Report

            </button>

        </div>

    `;

    setTimeout(() => {

        document.getElementById(
        'downloadBtn'
        ).addEventListener(
        'click',
        () => {

            showNotification(
            'Report Generated'
            );

        });

    }, 100);
}
function openSendForm() {

    dynamicContent.innerHTML = `

        <h1>
            Notification Center
        </h1>

        <textarea
        id="messageBox"
        placeholder="
        Write announcement...
        ">
        </textarea>

        <button id="sendMessageBtn"
        class="primary-btn">

            Send Notification

        </button>

    `;

    setTimeout(() => {

        document.getElementById(
        'sendMessageBtn'
        ).addEventListener(
        'click',
        () => {

            const text =
            document.getElementById(
            'messageBox').value;

            if(text === '') {

                showNotification(
                'Write a message first'
                );

                return;
            }

            showNotification(
            'Notification Sent'
            );

        });

    }, 100);
}
// ===============================
// ADMIN BUTTON CONNECTIONS
// ===============================

setTimeout(() => {

    const approveBtn =
    document.getElementById(
    'approveBtn'
    );

    const manageBtn =
    document.getElementById(
    'manageBtn'
    );

    const generateBtn =
    document.getElementById(
    'generateBtn'
    );

    const sendBtn =
    document.getElementById(
    'sendBtn'
    );

    if(approveBtn) {

        approveBtn.addEventListener(
        'click',
        openApproveForm
        );

    }

    if(manageBtn) {

        manageBtn.addEventListener(
        'click',
        openManageForm
        );

    }

    if(generateBtn) {

        generateBtn.addEventListener(
        'click',
        openGenerateForm
        );

    }

    if(sendBtn) {

        sendBtn.addEventListener(
        'click',
        openSendForm
        );

    }

}, 500);
// ===============================
// NAVBAR DONATE CLICK
// ===============================

const donateNav = document.querySelector('a[href="#donate"]');

if (donateNav) {
    donateNav.addEventListener('click', (e) => {

        e.preventDefault(); // STOP default scroll

        // Open donation form (same as Donate Now button)

        dynamicContent.innerHTML = `

            <h1>Donation Form</h1>

            <input type="text" id="donorName" placeholder="Your Name">

            <input type="text" id="itemName" placeholder="Item Name">

            <input type="number" id="quantity" placeholder="Quantity">

            <select id="category">
                <option>Books</option>
                <option>Laptops</option>
                <option>Stationery</option>
            </select>

            <button id="submitDonationBtn" class="primary-btn">
                Submit Donation
            </button>

        `;

        window.location.href = '#dynamicSection';

        setTimeout(() => {
            document.getElementById('submitDonationBtn')
                .addEventListener('click', submitDonation);
        }, 100);

    });
}
// ===============================
// NAVBAR CONTACT CLICK
// ===============================

const contactNav = document.querySelector('a[href="#contact"]');

if (contactNav) {
    contactNav.addEventListener('click', (e) => {

        e.preventDefault();

        dynamicContent.innerHTML = `

            <h1>Contact Us</h1>

            <input type="text" id="contactName" placeholder="Your Name">

            <input type="email" id="contactEmail" placeholder="Your Email">

            <textarea id="contactMessage" placeholder="Your Message"></textarea>

            <button id="sendContactBtn" class="primary-btn">
                Send Message
            </button>

        `;

        window.location.href = '#dynamicSection';

        setTimeout(() => {
            document.getElementById('sendContactBtn')
                .addEventListener('click', sendContactForm);
        }, 100);

    });
}
// ===============================
// DASHBOARD ANALYTICS GRAPH
// ===============================

const analyticsCanvas = document.getElementById('analyticsChart');

if (analyticsCanvas) {

    new Chart(analyticsCanvas, {

        type: 'bar',

        data: {

            labels: [
                'Books',
                'Laptops',
                'Stationery',
                'Others'
            ],

            datasets: [{

                label: 'Donations by Category',

                data: [
                    120,
                    60,
                    200,
                    40
                ],

                backgroundColor: [
                    '#00d4ff',
                    '#00ffa6',
                    '#ffcc00',
                    '#ff6b6b'
                ],

                borderRadius: 10

            }]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {
                    labels: {
                        color: 'white'
                    }
                }

            },

            scales: {

                x: {
                    ticks: {
                        color: 'white'
                    }
                },

                y: {
                    ticks: {
                        color: 'white'
                    }
                }

            }

        }

    });

}
