function getNextCard(currentCard, direction) {
    if (currentCard === ".indexcd" && direction === "down") return ".profilecd"
    if (currentCard === ".profilecd" && direction === "up") return ".indexcd"
    if (currentCard === ".profilecd" && direction === "right") return ".aboutcd"
    if (currentCard === ".aboutcd" && direction === "left") return ".profilecd"
    if (currentCard === ".profilecd" && direction === "left") return ".projectscd"
    if (currentCard === ".projectscd" && direction === "right") return ".profilecd"
    if (currentCard === ".profilecd" && direction === "down") return ".tmicd"
    if (currentCard === ".tmicd" && direction === "up") return ".profilecd"



    return null
}

export default getNextCard