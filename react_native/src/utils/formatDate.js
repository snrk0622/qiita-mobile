const formatDate = (date) => {
  return date.split('T')[0].split('-').join('').replace(/(\d{4})(\d{2})(\d{2})/, '$1年$2月$3日');
};

export default formatDate;
