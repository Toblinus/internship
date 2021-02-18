import { shallow } from 'enzyme';
import ActionBarBtn from './index';

it('Testing <ActionBarBtn />', () => {
    const forTest = [
        <div></div>,
        'Text'
    ];
    const onClick = jest.fn();
    forTest.map((test) => {
        const elm = shallow(<ActionBarBtn onClick={() => onClick()}>
            { test }
        </ActionBarBtn>)
        elm.simulate('click', {});
        expect(elm.contains(test)).toBe(true)
    })
   // const received = onClick.mock.calls.length;
    const expected = forTest.length;
    expect(onClick.mock.calls.length).toBe(expected)
})