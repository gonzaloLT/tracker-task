export const getOwnerName = (owner) => {
    if (owner && owner.length > 0 && owner[0]?.name) {
        return `${owner[0].name.first} ${owner[0].name.last}`;
    }
    return 'No se encontró al propietario';
};