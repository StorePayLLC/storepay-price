export const humanName = {
  validator: (_: any, value: string) => {
    if (!value || value === '' || value?.length === 0) return Promise.resolve();
    if (value.includes(' ')) return Promise.reject('Оноосон нэрийг хоосон зайгүй бичнэ үү');

    if (!/^[абвгдежзийклмнопрстуфхцчшщъыьэюяёүө-]+$/i.test(value)) return Promise.reject('Оноосон нэрийг крил үсэгээр бичнэ үү');

    if (value.includes('-') && !/-[ЁАЕИОУЫЭЮЯҮӨ]/.test(value)) return Promise.reject('-арын үсэг томоор бичигдэнэ');

    if (/^[йъь-]/i.test(value)) return Promise.reject(`Хүний нэр "${value[0]}" үсэгээр эхлэх боломжгүй`);

    return Promise.resolve();
  },
};
