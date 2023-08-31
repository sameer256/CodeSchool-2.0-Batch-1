function login(event) {
    event.preventDefault();

    let username = $("#username").val();
    let password = $("#password").val();

    console.log("Attempting login for:", username);
    $("#usernameError").text("");
    $("#passwordError").text("");

    if (username.length < 3 || username.length > 25) {
        $("#usernameError").text(
            "Username should be at least 3 Characters and at most 25 Characters"
        );
        return false;
    }

    if (password.length < 3 || password.length > 25) {
        $("#passwordError").text(
            "Password should be at least 3 Characters and at most 25 Characters"
        );
        return false;
    }

    $.ajax({
        method: "POST",
        url: "http://localhost/pixelvidehrms/api/login.php",
        data: {
            username,
            password,
        },
        success: function (data) {
            console.log("Server response:", data);

            // data = JSON.parse(data);
            if (data.status) {
                console.log("Login successful");
                window.location.replace("index.html");
            } else {
                console.log("Login failed:", data.message);
                $("#usernameError").text(data.message);
            }
        },
        error: function (error) {
            console.error("AJAX Error:", error);
        },
    });
}