document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("appointment-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const patientName = document.getElementById("patient-name").value;
        const doctor = document.getElementById("doctor").value;
        const appointmentDate = document.getElementById("appointment-date").value;
        const appointmentTime = document.getElementById("appointment-time").value;

        // Gửi dữ liệu đặt lịch đến máy chủ hoặc xử lý dữ liệu theo nhu cầu của bạn ở đây

        // Sau khi đặt lịch, có thể hiển thị thông báo hoặc chuyển hướng đến trang khác
        alert(`Bạn đã đặt lịch khám với ${doctor} vào ngày ${appointmentDate} lúc ${appointmentTime}.`);
        form.reset();
    });
});
