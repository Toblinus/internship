import getNowDate from './getNowDate';

const forTest = getNowDate();

it('testing date format', () => {
  expect(forTest).toMatch(/\d{4}-\d{2}-\d{2}/);      
})

const now = new Date();
const nowDate = `${
        now.getFullYear()
    }-${
        (now.getMonth() + 1).toString().padStart(2, '0')
    }-${
        now.getDate().toString().padStart(2, '0')
    }`;

it('date value = ' + nowDate, () => {
    expect(forTest).toBe(nowDate);
})