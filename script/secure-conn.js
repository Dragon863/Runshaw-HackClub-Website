if (location.protocol !== "https:" && "localhost" !== location.hostname && "127.0.0.1" !== location.hostname) {
    location.protocol = "https:";
}