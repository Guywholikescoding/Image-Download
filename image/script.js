document.getElementById("download-button").addEventListener("click", () => {
    const content = "Hello! This is a downloadable file.";

    const file = new Blob([content], {
        type: "text/plain"
    });

    const link = document.createElement("a");

    link.href = URL.createObjectURL(file);
    link.download = "my-file.txt";

    link.click();

    URL.revokeObjectURL(link.href);
});