import { shallow } from 'enzyme';
import ActionBarBtn from './index';

describe('Testing <ActionBarBtn />', () => {
    const mockFn = jest.fn();
    const onClick = new mockFn();

    const elm = shallow(<ActionBarBtn onClick={onClick}>
        <div></div>
    </ActionBarBtn>)
    console.log(elm.find('div').debug())
})