
import test from 'ava';
import { NameHelper } from './nameHelper';

test('#isAbbr', t => {
    t.is(NameHelper.isAbbr('ABBR'), true, 'ABBR is an abbreviation')
    t.is(NameHelper.isAbbr('aBBR'), false, 'aBBR is not an abbreviation')
    t.is(NameHelper.isAbbr('A Abbr'), false, 'A Abbr is not an abbreviation')
    t.is(NameHelper.isAbbr('A ABBR'), true, 'A ABBR is an abbreviation')
})

test('#findAbbr', t => {
    t.is(NameHelper.findAbbr(['ABBR', 'Abbr', 'ABBR a', 'ABB']), 'ABB')
    t.is(NameHelper.findAbbr(['ABBR', 'Abbr', 'ABBR a', 'A']), 'ABBR')
})

test('#endsWithNumberWord', t => {
    t.is(NameHelper.endsWithNumberWord('iPhone6'), false, 'iPhone6 is not ending with a number word')
    t.is(NameHelper.endsWithNumberWord('iPhone 6'), true, 'iPhone 6 is ending with a number word')
})

test('#removeSymbols', t => {
    t.is(NameHelper.removeSymbols('Async (node)'), 'Async node')
    t.is(NameHelper.removeSymbols('iPhone #5'), 'iPhone 5')
    t.is(NameHelper.removeSymbols('iPhone & -= &&'), 'iPhone')
    t.is(NameHelper.removeSymbols('iPhone $^@^%*#^*(#()*#_*_)(@_)(@ &+-iPad'), 'iPhone&iPad')
})

test('#formatUniqueName', t => {
    t.is(NameHelper.formatUniqueName('Async (node)', 'en'), 'async node')
    t.is(NameHelper.formatUniqueName('iPhone #5', '5'), 'iphone 5')
    t.is(NameHelper.formatUniqueName('Ștefan Trăiește', 'ro'), 'stefan traieste')
})

test('#isIrregular', t => {
    t.is(NameHelper.isIrregular('Async (node)'), false)
    t.is(NameHelper.isIrregular('iPhone alfa'), true)
    t.is(NameHelper.isIrregular('Ștefan Trăiește'), false)
})
