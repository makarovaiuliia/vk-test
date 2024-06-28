/**
 * Adds an item to the favorites list in local storage.
 *
 * @param {number} id - The ID of the item to add to favorites.
 */
export const addToFavorites = (id: number): void => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (!favorites.includes(id)) {
        favorites.push(id);
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }
};

/**
 * Removes an item from the favorites list in local storage.
 *
 * @param {number} id - The ID of the item to remove from favorites.
 */
export const removeFromFavorites = (id: number): void => {
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    favorites = favorites.filter((favoriteId: number) => favoriteId !== id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
};

/**
 * Checks if an item is in the favorites list in local storage.
 *
 * @param {number} id - The ID of the item to check.
 * @returns {boolean} - True if the item is in the favorites list, false otherwise.
 */
export const isFavorite = (id: number): boolean => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    return favorites.includes(id);
};
