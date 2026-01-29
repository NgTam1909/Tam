$(document).ready(function() {
    // Hiển thị/Ẩn mật khẩu
    $('#togglePassword').click(function() {
        const passwordInput = $('#password');
        const icon = $(this).find('i');
        
        if (passwordInput.attr('type') === 'password') {
            passwordInput.attr('type', 'text');
            icon.removeClass('fa-eye').addClass('fa-eye-slash');
        } else {
            passwordInput.attr('type', 'password');
            icon.removeClass('fa-eye-slash').addClass('fa-eye');
        }
    });
    
    // Form đăng nhập
    $('#loginForm').submit(function(e) {
        e.preventDefault(); // k gửi form ngay lập tức mà gửi sự kiện này để xử lý bên js
        
        // Reset lỗi trước đó
        $('.error').hide();
        $('.form-control').removeClass('error-border');
        $('#successMessage').hide();
        
        const username = $('#username').val().trim();
        const password = $('#password').val().trim();
        let isValid = true;
        
        // kiểm tra tên đăng nhập/email
        if (username === '') {
            $('#usernameError').text('Vui lòng nhập tên đăng nhập hoặc email').show();
            $('#username').addClass('error-border');
            isValid = false;
        } else if (!isValidEmail(username) && username.length < 3) {
            $('#usernameError').text('Tên người dùng phải có ít nhất 3 ký tự hoặc là email hợp lệ').show();
            $('#username').addClass('error-border');
            isValid = false;
        }
        
        // kiểm tra mật khẩu
        if (password === '') {
            $('#passwordError').text('Vui lòng nhập mật khẩu').show();
            $('#password').addClass('error-border');
            isValid = false;
        } else if (password.length < 8) {
            $('#passwordError').text('Mật khẩu phải có ít nhất 8 ký tự').show();
            $('#password').addClass('error-border');
            isValid = false;
        }
        
        if (isValid) {
            // Trạng thái đang tải
            $('#btnText').hide();
            $('#btnSpinner').show();
            $('#loginBtn').prop('disabled', true);
            
            // Mô phỏng quá trình đăng nhập
            setTimeout(function() {
                $('#successMessage').show();
                
                // Reset form
                $('#btnText').show();
                $('#btnSpinner').hide();
                $('#loginBtn').prop('disabled', false);
                
                //  Ẩn thông báo sau 2 giây
                setTimeout(function() {
                    $('#loginForm')[0].reset();
                    $('#successMessage').hide();
                }, 2000);
            }, 1500);
        }
    });
    
    // Hàm kiểm tra email hợp lệ
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Kiểm tra tên đăng nhập/email theo thời gian thực
    $('#username').on('input', function() {
        const username = $(this).val().trim();
        
        if (username !== '') {
            $('#usernameError').hide();
            $(this).removeClass('error-border');
        }
    });
    
    // Kiểm tra mật khẩu theo thời gian thực
    $('#password').on('input', function() {
        const password = $(this).val().trim();
        
        if (password.length >= 8) {
            $('#passwordError').hide();
            $(this).removeClass('error-border');
        }
    });
    
    // Quên mật khẩu
    $('.forgot-password').click(function(e) {
        e.preventDefault();
        alert('A password reset link will be sent to your email address.');
    });
    
    // Link đăng ký
    $('.signup-link a').click(function(e) {
        e.preventDefault();
        alert('Đang chuyển hướng đến trang đăng ký...');
    });
});