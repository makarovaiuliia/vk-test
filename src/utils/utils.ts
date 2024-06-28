export const addToFavorites = (id: number) => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (!favorites.includes(id)) {
        favorites.push(id);
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }
};

export const removeFromFavorites = (id: number) => {
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    favorites = favorites.filter((favoriteId: number) => favoriteId !== id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const isFavorite = (id: number): boolean => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    return favorites.includes(id);
};
