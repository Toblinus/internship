import joinClasses from './joinClasses';

[
    {
        major: '',
        minors: [],
        result: ''
    }, {
        major: 'class',
        minors: [],
        result: 'class'
    }, {
        major: '',
        minors: ['a'],
        result: 'a'
    }, {
        major: 'class',
        minors: ['a'],
        result: 'class a'
    }, {
        major: 'class',
        minors: ['a', 'b'],
        result: 'class a b'
    }, {
        major: '',
        minors: ['a', 'b'],
        result: 'a b'
    }
].forEach(test => it(`major = "${
        test.major
    }", minors = ${
        JSON.stringify(test.minors)
    }. result = "${test.result}"`, function(){
        expect(joinClasses(test.major, ...test.minors)).toBe(test.result);
    })
)