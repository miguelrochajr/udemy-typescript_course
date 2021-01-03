export const dateStringToDate = (dateString: string): Date => {
  // ['28/10/2018']
  const dateParts = dateString.split('/').map((value: string): number => {
    return parseInt(value);
  });

  return new Date(
    dateParts[2], // year
    dateParts[1] - 1, // month, indexed by 0
    dateParts[0] // day
  );
};
