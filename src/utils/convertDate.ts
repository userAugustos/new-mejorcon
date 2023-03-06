export function convertDate(dateString: string){
    // dateString = dateString.slice(0, -1) + '0' // removendo o ) que vem no fim das datas
    const date = new Date(dateString);
    const day = addLeftZero(date.getDate());
    const month = addLeftZero(date.getMonth() + 1);
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

// garantindo que os dias e meses tenham dois dígitos
const addLeftZero = (number: number): string => {
    return number < 10 ? `0${number}` : `${number}`;
}
