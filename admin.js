// ✅ Load donations
async function loadAdminData() {
    const res = await fetch("http://localhost:5000/api/admin/donations");
    const data = await res.json();

    const table = document.getElementById("adminTable");
    table.innerHTML = "";

    data.forEach(d => {
        table.innerHTML += `
        <tr>
            <td>${d.donorName}</td>
            <td>${d.amount}</td>
            <td>${d.status}</td>
            <td>
                <button onclick="approve('${d._id}')">Approve</button>
                <button onclick="reject('${d._id}')">Reject</button>
                <button onclick="deleteDonation('${d._id}')">Delete</button>
            </td>
        </tr>
        `;
    });
}

// ✅ Approve
async function approve(id) {
    await fetch(`http://localhost:5000/api/admin/donations/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "approved" })
    });

    loadAdminData();
}

// ✅ Reject
async function reject(id) {
    await fetch(`http://localhost:5000/api/admin/donations/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "rejected" })
    });

    loadAdminData();
}

// ✅ Delete
async function deleteDonation(id) {
    await fetch(`http://localhost:5000/api/admin/donations/${id}`, {
        method: "DELETE"
    });

    loadAdminData();
}

// Load on page open
window.onload = loadAdminData;