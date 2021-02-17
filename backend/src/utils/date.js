module.exports = {
  date(timestamp) {
    const date = new Date(timestamp);

    const ano = date.getUTCFullYear();
    const mes = `0${date.getUTCMonth() + 1}`.slice(-2);
    const dia = `0${date.getUTCDate() + 1}`.slice(-2);

    return {
      iso: `${ano}-${mes}-${dia}`,
    };
  },
};
