function showToast() {
    let toast = document.getElementById("toast");
    toast.classList.add("show");

    // Hide after 3 seconds
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}
