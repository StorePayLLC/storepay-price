export const mobileRule = {
  validator: (_: any, mobile: string) => {
    if (!mobile || mobile === '' || mobile?.length === 0) return Promise.resolve();
    if (/^((80|86|88|89|99|95|94|85|90|91|96|72|98|93|97|83|92|69)\d{6})$/.test(mobile)) return Promise.resolve();
    return Promise.reject('утасны дугаар буруу байна');
  },
};
